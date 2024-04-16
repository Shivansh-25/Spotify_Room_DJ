import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App(props) {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </Router>
 );
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);
