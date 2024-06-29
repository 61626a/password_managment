import { useEffect, useState } from "react";
import "./App.css";

import Axios from "axios";

function App() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [passwordlist, setPasswordlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4010/showpassword").then((response) => {
      console.log("start");
      setPasswordlist(response.data);
      console.log(passwordlist);
    });
  }, []);

 const updatelist = () => {
      Axios.get("http://localhost:4010/showpassword").then((response) => {
        console.log("start");
        setPasswordlist(response.data);
        console.log(passwordlist);
      });
  }

  const savepassword = () => {
    // Axios.post("http://localhost:4010/temp",{password:10,title:"yuously"})
    Axios.post("http://localhost:4010/addpassword", {
      password: password,
      title: title,
    }).then((response) => {
      updatelist()
  })
}
  const alerting = () =>{
    let x = prompt("type the  safety password:  ");
    Axios.post("http://localhost:4010/alerting",{
      device_code:x,
    }).then((response)=>{
      return response.data;

    });
  };
  const getpasswords = (encryption) => {
    console.log("welcome");
    let res = alerting();
    if(res=="success"){
    Axios.post("http://localhost:4010/getpassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      console.log(response.data);
      setPasswordlist(
        passwordlist.map((e) => {
          return e.id == encryption.id
            ? {
                id: encryption.id,
                password: encryption.password,
                Title: response.data,
                iv: encryption.iv,
              }
            : e;
        })
      );
    });
  }
  else {
    console.log("failed")
    alert("you are giving wrong password")
  }
  };

  return (
    <div className="App">
      <div className="addingpassword">
        <input
          type="text"
          placeholder="Ex. password123"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ex. company"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={savepassword}>Add password</button>
      </div>

      <div className="passwords">
        {passwordlist.map((val) => {
          return (
            <div
              className="password"
              onClick={() => {
                getpasswords({
                  password: val.password,
                  iv: val.iv,
                  id: val.id,
                });
              }}
            >
              <h1>{val.Title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
