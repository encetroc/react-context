import { useContext } from "react";
import { AuthContext } from "./context";

export function Dummy() {
  const value = useContext(AuthContext);

  return (
    <div>
      <h1>Dummy component</h1>
      <code>{JSON.stringify(value.user.firstName)}</code>
    </div>
  );
}
