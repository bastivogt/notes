import React, { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import NotesServiceInstance from "../services/NoteServiceInstance";
import { nl2br, stripDoubleN, stripTags } from "../helper/functions";

import MyEditor from "../components/MyEditor";

import Card from "../components/Card";

export default function Edit() {
  const params = useParams();
  const id = parseInt(params.id);
  const note = NotesServiceInstance.getNoteByID(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const [html, setHtml] = useState(note.text);

  console.log("EDIT PAGE ID", id);
  console.log("Note", note);

  function titleChangeHandler(evt) {
    setTitle(evt.target.value);
  }

  function textChangeHandler(evt) {
    setText(evt.target.value);
  }

  function editHandler() {
    if (title !== "" && text !== "") {
      let newText = stripTags(text);
      //newText = nl2br(newText, true);
      //newText = stripDoubleN(newText);

      let newTitle = stripTags(title);

      NotesServiceInstance.updateNote(id, newTitle, html);
      navigate(`/detail/${id}`);
    } else {
      alert("ERROR");
    }
  }

  return (
    <>
      <Card className="border-primary">
        <Card.Header className="text-primary">
          <h5>
            [EDIT] {note.title} [#{note.id}]
          </h5>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <label className="form-label" htmlFor="input-title">
              Title
            </label>
            <input
              className="form-control"
              id="input-title"
              type="text"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="input-text">
              Text
            </label>
            <MyEditor
              value={html}
              onChange={(evt) => setHtml(evt.target.value)}
            ></MyEditor>
          </div>
        </Card.Body>
        <Card.Footer>
          <div>
            <small>
              <strong>created at:</strong>{" "}
              {new Date(note.createdAt).toLocaleString("de-DE")}
            </small>
          </div>
          <div>
            <small>
              <strong>updated at:</strong>{" "}
              {new Date(note.updatedAt).toLocaleString("de-DE")}
            </small>
          </div>
          <div>
            <small>
              <strong>ID: </strong>
              {note.id}
            </small>
          </div>
        </Card.Footer>
        <Card.Footer>
          <NavLink to="/" className="btn btn-primary mx-1">
            Overview
          </NavLink>
          <NavLink to={`/detail/${id}`} className="btn btn-primary mx-1">
            Detail
          </NavLink>
          <button onClick={editHandler} className="btn btn-primary mx-1">
            Save
          </button>
        </Card.Footer>
      </Card>
    </>
  );
}
