import "./App.css";
import { useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

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
      <button>일기 추가</button>
      <button>일기 수정</button>
      <button>일기 삭제</button>
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
