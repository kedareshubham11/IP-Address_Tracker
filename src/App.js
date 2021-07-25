import "./App.css";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "./api/api";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import Login from "./Components/Login/Login";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const data = await axios.get(baseUrl);
    console.log(data.data);
    setLocation(data.data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      getLocation();
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setisLoggedIn={setisLoggedIn} />
      ) : (
        <>
          <Header
            location={location}
            setisLoggedIn={setisLoggedIn}
            setLocation={setLocation}
          />
          <Map location={location} />
        </>
      )}
    </div>
  );
}

export default App;
