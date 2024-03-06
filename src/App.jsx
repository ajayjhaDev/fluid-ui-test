import "./styles.css";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSbmit = () => {
    axios
      .post("/api/login", { email: email, password: password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="button2">Login</button>
      <div className="App">
        <input
          type={"text"}
          placeholder={"Enter Email"}
          onChange={(e) => setEmail(e.target.value)}
          className={"input1"}
        />
        <input
          type={"text"}
          placeholder={"Enter Password"}
          onChange={(e) => setPassword(e.target.value)}
          className={"input1"}
        />
        <button onClick={handleSbmit} className="button1">
          Submit
        </button>
      </div>
    </>
  );
}
