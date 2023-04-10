import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";

// import img from "./images.jpeg";
import "./Sidebar.css";
import Service from "../../service";
import { MessageContext } from "../../context/MessageContextProvider";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

const users = [
  {
    id: "1",
    name: "Jasmine Thomson",
    lastMsg: "Had they visited Rome before",
    url: img1,
  },
  {
    id: "2",
    name: "Konstantin Frank",
    lastMsg: "Liked that disco music",
    url: img2,
  },
  {
    id: "3",
    name: "Gowthami Thapa",
    lastMsg: "Liked that disco music",
    url: img1,
  },
];

function Sidebar() {
  const themeCntxt = useContext(ThemeContext);
  const messageContext = useContext(MessageContext);
  const callMe = async (id) => {
    messageContext.setUserId(id);
    try {
      const response = await Service(
        "POST",
        "https://reactbasic.onrender.com/message/getMessageId",
        { messageId: id }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={themeCntxt.theme ? "side_container" : "side_container dark"}
    >
      <div className="sidebar-header">
        <h5>Chats</h5>
        <div className="search-container">
          <form action="">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              typeof="search"
              placeholder="search contact/chat"
            />
          </form>
        </div>
      </div>
      {users.map((item) => {
        return (
          <NavLink
            to={item.id}
            className={({ isActive }) =>
              isActive ? "link sidebar-active" : "link"
            }
            key={item.id}
            onClick={() => callMe(item.id)}
            end
          >
            <div className="container chat-container">
              <div className="row p-2">
                <div className="col-md-2">
                  <div className="img-container">
                    <img src={item.url} alt="user" />
                  </div>
                </div>
                <div className="col-md-8 content">
                  <h6>{item.name}</h6>
                  <p className="sub-title">{item.lastMsg}</p>
                </div>
                <div className="col-md-2 more-Icon">
                  <div className="circle">
                    <div className="dropdown dropdown-menu-end">
                      <p
                        className="btn"
                        href="#"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </p>
                      <ul className="dropdown-menu">
                        <li className="d-flex">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            &nbsp; Mark as Read
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                            &nbsp; Mute Notifications
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            &nbsp; View Profile
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            &nbsp; Audio Call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-video-camera"
                              aria-hidden="true"
                            ></i>
                            &nbsp;Video Call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                            &nbsp; Archive
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp; Delete
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-exclamation-triangle"
                              aria-hidden="true"
                            ></i>
                            &nbsp;Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;
