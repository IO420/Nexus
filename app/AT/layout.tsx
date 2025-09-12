import { PrivateRoute } from "../Routes/PrivateRoute";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <PrivateRoute>{children}</PrivateRoute>;
}
