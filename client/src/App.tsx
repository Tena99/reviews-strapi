import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
