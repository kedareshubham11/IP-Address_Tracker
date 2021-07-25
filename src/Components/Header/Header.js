import "./Header.css";
import Arrow from "../../assets/images/icon-arrow.svg";
import LogoutIcon from "../../assets/images/logout.png";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../api/api";
import { notification } from "antd";

function Header({ location, setisLoggedIn, setLocation }) {
  const [ip, setIp] = useState("");

  const logout = () => {
    setisLoggedIn(false);
  };

  const getLocationByIP = async () => {
    await axios(`${baseUrl}${ip}`)
      .then((data) => {
        if (data.data.ip) {
          setLocation(data.data);
        } else {
          notification["error"]({
            message: "Invalid IP or domain.",
            description: "Please provide valid IP address or domain",
          });
        }
      })
      .catch((error) => {
        notification["error"]({
          message: "Invalid IP or domain.",
          description: "Please provide valid IP address or domain",
        });
      });
  };

  return (
    <div className="header">
      <div className="logout" onClick={() => logout()}>
        <img src={LogoutIcon} alt="logout" className="logoutIcon" />
      </div>
      <p className="Typo">IP Address Tracker</p>

      <div className="textfield">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="input"
          defaultValue={ip}
          onChange={(e) => setIp(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && getLocationByIP()}
        />
        <button
          className="button"
          onClick={() => getLocationByIP()}
          type="submit"
        >
          <img src={Arrow} alt="arrow" />
        </button>
      </div>

      <div className="container">
        <div className="content ">
          <p>IP ADDRESS</p>
          <h3>{location?.ip}</h3>
        </div>
        <span className="block-separator"></span>
        <div className="content">
          <p>LOCATION</p>
          <h3>{location?.location.region}</h3>
        </div>
        <span className="block-separator"></span>
        <div className="content">
          <p>TIMEZONE</p>
          <h3>{location?.location.timezone}</h3>
        </div>
        <span className="block-separator"></span>
        <div className="content">
          <p>ISP</p>
          <h3>{location?.isp}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
