import { useContext } from "react";
import { AuthContext } from "./context";

export function Dummy({prop1, prop2}) {
  const value = useContext(AuthContext);

  return (
    <div>
      <h1>Dummy component</h1>
      <code>{JSON.stringify(value.user.firstName)}</code>
      <p>{prop1}</p>
      <p>{prop2}</p>
    </div>
  );
}
