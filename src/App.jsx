import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { Button } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");

  const storeMovieName = (e) => {
    e.preventDefault();
    localStorage.setItem("movieName", name);
    window.location.reload();
  };

  return (
    <div>
      {/* <NavbarComponent title="Props testing 1" />
      <NavbarComponent title="Props testing 2" />
      <NavbarComponent title="Props testing 3" />
      <NavbarComponent title="Props testing 4" />
      <NavbarComponent title="Props testing 5" /> */}

      {/* <h1> {process.env.REACT_APP_COMPANY_NAME} </h1> */}

      <NavbarComponent title="Movie Name" />
      <div className="container mt-4">
        <h4>Enter your favourite Movie name</h4>
        <input
          style={{ width: 360, height: 40 }}
          placeholder="Enter movie name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={storeMovieName}
          style={{ marginLeft: 15 }}
          variant="info"
        >
          Submit
        </Button>

        <h1>{localStorage.getItem("movieName")}</h1>
      </div>
    </div>
  );
}

export default App;
