import Login from "./Components/Login/Login";
import { LoginRedirect } from "./Routes/LoginRedirect";

export default function Home() {
  return (
    <LoginRedirect>
      <Login />
    </LoginRedirect>
  );
}
//IO