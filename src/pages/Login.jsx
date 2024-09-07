import "./Login.css";
import RightCon from "../component/RightCon";
import LeftCon from "../component/LeftCon";

function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <LeftCon />
      </div>
      <div className="container">
        <RightCon />
      </div>
    </div>
  );
}

export default Login;
