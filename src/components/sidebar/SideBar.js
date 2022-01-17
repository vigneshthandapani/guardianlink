import "./Sidebar.css";
import feedIcon from "../../assets/feed.png";
import userIcon from "../../assets/user.png";
import dashboardIcon from "../../assets/dashboard.png";
import logo from "../../assets/logo.jpg";

export const SideBar = () => {
    return (
        <div id='side-bar'>
            <a href="/">
                <img width={'80%'} height={50} src={logo} className="show-mobile"/>
                <img width={'80%'} height={50} src='https://www.guardianlink.io/product-hotspot/images/guardianlink_logo.svg' className="show-desktop" />
            </a>
            <a href="/" className={window.location.pathname === "/" ? "slide-item-selected slide-item" : "slide-item"} >
                <img src={dashboardIcon} className="icon" /> <span className="item-name">Dashboard</span>
            </a>
            <a href="/user-list" className={window.location.pathname === "/user-list" ? "slide-item-selected slide-item" : "slide-item"}>
                <img src={userIcon} className="icon" /> <span className="item-name">UserList</span></a>
            <a href="/post-search" className={window.location.pathname === "/post-search" ? "slide-item-selected slide-item" : "slide-item"}>
                <img src={feedIcon} className="icon" /> <span className="item-name">PostSearch</span></a>
        </div >
    )
}