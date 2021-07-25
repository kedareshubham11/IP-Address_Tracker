import "./Login.css";
import Sawo from "sawo";
import { notification } from "antd";
import { useEffect } from "react";

function Login({ setisLoggedIn }) {
  useEffect(() => {
    const config = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: process.env.REACT_APP_SAWO_API_KEY,
      onSuccess: onSuccessLogin,
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  const onSuccessLogin = async (payload) => {
    setisLoggedIn(true);
    notification["success"]({
      message: "Login Successful.",
    });
    console.log(payload);
  };

  return (
    <>
      <h2>IP Address Tracker</h2>
      <div className="login-container">
        <div className="leftContainer">
          <h1>Login</h1>
          <div
            className="login-ui"
            id="sawo-container"
            // style={{ height: "230px", width: "400px" }}
          ></div>
        </div>

        <div className="rightContainer">
          <h3>Discover the precise physical location of a given IP address</h3>
          <h4>
            If you only have as much as an IP address, you can still find out
            its geographical details
          </h4>

          <ul>
            <li>Country</li>
            <li>Region State Province</li>
            <li>Latitude Longitude</li>
            <li>Time zone</li>
          </ul>
          <p>
            To start, you need to know what an IP address is. IP stands for
            internet protocol, which is the set of processes that dictate how
            information is shared across the web. If you’ve ever wondered how
            one machine knows how to connect to another and what information to
            share with it, all internet-connected devices use the internet
            protocol for that.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
