import { useContext } from "react";
import { AuthContext } from "./context";
import "./App.css";
import { Dummy } from "./Dummy";

function App() {
  const value = useContext(AuthContext);

  return (
    <div>
      <h1>App component</h1>
      <code>{JSON.stringify(value)}</code>
      <Dummy />
    </div>
  );
}

export default App;
