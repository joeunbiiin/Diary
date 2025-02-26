import "./App.css";
import { useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import Button from "./components/Button";

const mockData = [
  {
    id: 1,
    createdData: new Date().getTime(),
    emotioId: 1,
    content: "1번째 일기입니다 ^^~!",
  },
  {
    id: 2,
    createdData: new Date().getTime(),
    emotioId: 2,
    content: "2번째 일기입니다 ^^~!",
  },
];

function App() {
  return (
    <>
      <Header />
      <Button
        text={"text"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("기본 클릭");
        }}
      />
      <Button
        text={"text"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("기본 클릭");
        }}
      />
      <Button
        text={"text"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("기본 클릭");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit/id" element={<Edit />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
