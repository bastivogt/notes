import { useEffect, useState } from "react";
import { HashRouter, Route, Router, Routes } from "react-router-dom";

import NotesServiceInstance from "./services/NoteServiceInstance";
import mockData from "./mockData";
import { useRenderOnUpdateService } from "./hooks/useRenderOnUpdateService";

import BaseLayout from "./components/BaseLayout";
import All from "./sites/All";
import New from "./sites/New";
import Edit from "./sites/Edit";
import Detail from "./sites/Detail";
import Delete from "./sites/Delete";

function App() {
  const [content, setContent] = useState("Text");

  /*const [renderUpdate, setRenderUpdate] = useState({});

  NotesServiceInstance.onUpdate = function () {
    setRenderUpdate({ ...renderUpdate });
  };*/

  useRenderOnUpdateService(NotesServiceInstance);

  useEffect(() => {
    NotesServiceInstance.notes = mockData;
    console.log(NotesServiceInstance.notes);
    console.log(NotesServiceInstance.getNoteByID(2));
    console.log("MOUNT");
  }, []);

  return (
    <>
      <HashRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        </BaseLayout>
      </HashRouter>
    </>
  );
}

export default App;
