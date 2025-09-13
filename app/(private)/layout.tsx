import { ReactNode } from "react";
import { PrivateRoute } from "../Routes/PrivateRoute";
import BarNavigation from "../Components/BarNavigation/BarNavigation";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mainContainer">
      <BarNavigation />
      <div className="container">
        <div className="img"></div>
        {children}
      </div>
    </div>
  );
}
//IO
