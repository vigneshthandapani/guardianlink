const token = 'Bearer 86ecb7042168489d66515f9e14d37e1c850099c7aaac2a0166e95c911ff45d2d';

export const fetchApi = (
    url,
    success,
    failure,
) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', },
    };
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(
            (response) => {
                success(response);
                return true;
            })
        .catch((error) => {
            failure(error);
            return false;
        })
};

export const createApi = (
    url,
    payload,
    success,
    failure,
) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token },
        body: JSON.stringify(payload)
    };

    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(
            (response) => {
                success(response);
                return true;
            })
        .catch((error) => {
            failure(error);
            return false;
        })
};

export const updateApi = (
    url,
    payload,
    success,
    failure,
) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token },
        body: JSON.stringify(payload)
    };
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(
            (response) => {
                success(response);
                return true;
            })
        .catch((error) => {
            failure(error);
            return false;
        })
};

export const deleteApi = (
    url,
    success,
    failure,
) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token },
    };
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(
            (response) => {
                success(response);
                return true;
            })
        .catch((error) => {
            failure(error);
            return false;
        })
};
