import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </div>
  );
}

export default App;
