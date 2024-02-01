import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import "./App.scss";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;
