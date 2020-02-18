import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

import "./styles.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <h1>Open Modal</h1>

      {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
      <button onClick={toggleModal}>Open Modal</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Modal
// modal component
// toggle
// wethter or not modal is open
// state
// keep track of modal being open
