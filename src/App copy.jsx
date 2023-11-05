import { useEffect, useState } from "react";
import { HashRouter, Route, Router } from "react-router-dom";

import NotesServiceInstance from "./services/NoteServiceInstance";
import mockData from "./mockData";
import { useRenderOnUpdateService } from "./hooks/useRenderOnUpdateService";

import BaseLayout from "./components/BaseLayout";

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

  function newNoteHandler() {
    NotesServiceInstance.addNote(new Date().getTime(), "Test 3", "Test 3 Text");
  }

  function removeHandler(id) {
    console.log("REMOVE_HANDLER", id);
    NotesServiceInstance.removeNote(id);
  }

  function editHandler(id) {
    console.log("EDIT_HANDLER");
    NotesServiceInstance.updateNote(id, "updated Title", "updated Text");
  }

  function contentChangeHandler(evt) {
    console.log("ON_CONTENT_CHANGE");
    console.log(evt);
    setContent(evt.target.innerHTML);
    console.log("CONTENT", content);
  }

  return (
    <>
      <h2>New Note</h2>
      <button onClick={newNoteHandler}>New Note</button>
      <hr />
      <ul>
        {NotesServiceInstance.getNotesByDate(false).map((note) => {
          const date = new Date(note.updatedAt);
          return (
            <li key={note.id}>
              #{note.id} {note.title} | {date.toString()}
              <button onClick={() => removeHandler(note.id)}>x</button>
              <button onClick={() => editHandler(note.id)}>Edit</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <div
        contentEditable
        onBlur={contentChangeHandler}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
}

export default App;
