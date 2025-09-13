import Login from "./Components/Login/Login";
import { LoginRedirect } from "./Routes/LoginRedirect";

export default function Home() {
  return (
    <div className="mainContainer">
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
