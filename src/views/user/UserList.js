import React, { useEffect, useState } from 'react';
import "./UserList.css";
import { Form, Input, Button, Space, Modal, Table, Pagination, Select, message, Popconfirm } from 'antd';
import { fetchUsers, createUser, deleteUser, updateUser } from '../../rest-services/userApi';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from "../../components/Loader/Loader";
const { Option } = Select;

let tableHeight = 0;

export const UserList = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => handleClickEdit(record)}>Edit</a>
                    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => handleClickDelete(record)}>
                        <a >Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const layout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
    };
    const dispatch = useDispatch();
    const storeState = useSelector(state => state);
    const userData = storeState && storeState.user && storeState.user.data;
    const isFetching = storeState && storeState.user && storeState.user.isFetching;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [modalTitle, setModalTitle] = useState("Create");
    const [idToEdit, setIdToEdit] = useState(null);

    useEffect(() => {
        tableHeight = window.innerHeight - 200;
        fetchUsers(dispatch);
    }, []);

    const handleClickEdit = (clickedRowData) => {
        setIdToEdit(clickedRowData.id);
        form.setFieldsValue(clickedRowData);
        setModalTitle('Update');
        setIsModalVisible(true);
    }

    const handleClickDelete = (clickedRowData) => {
        deleteUser(dispatch, clickedRowData.id).then((response) => {
            message.success({
                content: 'User deleted successfully...',
                style: {
                    marginTop: '1vh',
                },
                duration: 1,
            });
            fetchUsers(dispatch);
        }).catch(() => {
            message.error({
                content: 'something went wrong!',
                style: {
                    marginTop: '1vh',
                },
                duration: 1
            });
        });
    }

    const handleClickCreate = () => {
        setIsModalVisible(true);
    }

    const handleOnCancel = () => {
        setIdToEdit(null);
        form.resetFields();
        setIsModalVisible(false);
    }

    const handleChangePagination = (pageNumber) => {
        fetchUsers(dispatch, pageNumber);
    }

    const onFinish = (formData) => {
        if (idToEdit) {
            updateUser(dispatch, idToEdit, formData)
                .then((response) => {
                    handleOnCancel();
                    message.success({
                        content: 'User updated successfully...',
                        style: {
                            marginTop: '1vh',
                        },
                        duration: 1
                    });
                }).catch(() => {
                    message.error({
                        content: 'something went wrong!',
                        style: {
                            marginTop: '1vh',
                        },
                        duration: 1
                    });
                });
        } else
            createUser(dispatch, formData).then(() => {
                message.success({
                    content: 'User created successfully...',
                    style: {
                        marginTop: '1vh',
                    },
                    duration: 1,
                });
                handleOnCancel();
            }).catch(() => {
                message.error({
                    content: 'something went wrong!',
                    style: {
                        marginTop: '1vh',
                    },
                    duration: 1
                });
            });
    }

    // const onGenderChange = (value) => {
    //     switch (value) {
    //         case 'male':
    //             form.setFieldsValue({ note: 'Hi, man!' });
    //             return;
    //         case 'female':
    //             form.setFieldsValue({ note: 'Hi, lady!' });
    //             return;
    //         case 'other':
    //             form.setFieldsValue({ note: 'Hi there!' });
    //     }
    // };

    return (
        <div>
            {isFetching ? <Loader />
                :
                <>
                    <Modal title={modalTitle + " user"} footer={false} visible={isModalVisible} onCancel={handleOnCancel}>
                        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item
                                name={'name'}
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Enter name here' />
                            </Form.Item>
                            <Form.Item
                                name={'email'}
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='Enter email here' />
                            </Form.Item>
                            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select"
                                    allowClear
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select"
                                    allowClear
                                >
                                    <Option value="active">active</Option>
                                    <Option value="inactive">Inactive</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <button className='btn-create-user' onClick={handleClickCreate}>Create user</button>
                    {userData && userData.data && userData.data.length && userData.meta && userData.meta.pagination &&
                        <div>
                            <Table scroll={{ y: tableHeight }} bordered columns={columns} dataSource={userData.data} pagination={false} />
                            <div className='my-20px'>
                                < Pagination responsive showSizeChanger={false} defaultCurrent={userData.meta.pagination.page}
                                    onChange={handleChangePagination} total={userData.meta.pagination.total} defaultPageSize={20}
                                />
                            </div>
                        </div>
                    }
                </>

            }

        </div>
    )
}
