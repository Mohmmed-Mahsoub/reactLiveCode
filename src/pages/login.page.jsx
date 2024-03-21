import { dynamicAxiosRequest } from "@/helpers/utilities/dynamicAxiosRequest";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("candidate@interview.com");
  const [password, setPassword] = useState("123456");

  console.log("email", email, "password", password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //send request
    const res = await dynamicAxiosRequest({
      baseUrl: "https://dev.minaini.com:2053/r",
      endPoint: "/token",
      method: "POST",
      body: {
        email,
        password,
        app_type: "patient",
      },
    });

    console.log("res", res);
  };
  return (
    <form>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={(e) => handleSubmit(e)} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
<div>login</div>;
