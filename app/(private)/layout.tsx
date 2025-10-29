import { ReactNode } from "react";
import BarNavigation from "../Components/layout/BarNavigation/BarNavigation";
import Logout from "../Components/auth/Logout/Logout";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mainContainer">
      <div className="container">
        <Logout />
        <div className="img"></div>
        {children}
      </div>
    </div>
  );
}
//IO
