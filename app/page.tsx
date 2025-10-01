import Login from "./Components/auth/Login/Login";
import { LoginRedirect } from "./Routes/LoginRedirect";

export default function Home() {
  return (
    <div className="loginContainer">
      <LoginRedirect>
        <div className="container">
          <div className="img"></div>
          <Login />
        </div>
      </LoginRedirect>
    </div>
  );
}
//IO
