import { ReactNode } from "react";
import BarNavigation from "../Components/BarNavigation/BarNavigation";
import Logout from "../Components/Logout/Logout";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mainContainer">
      <BarNavigation />
      <div className="container">
        <Logout />
        <div className="img"></div>
        {children}
      </div>
    </div>
  );
}
//IO
