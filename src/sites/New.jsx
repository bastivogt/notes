import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotesServiceInstance from "../services/NoteServiceInstance";
import Card from "../components/Card";
import { nl2br, stripDoubleN, stripTags } from "../helper/functions";

export default function New() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function createHandler() {
    console.log("CREATE_HANDLER");
    if (title !== "" && text !== "") {
      let newText = stripTags(text);
      newText = stripDoubleN(newText);
      //newText = nl2br(newText);

      let newTitle = stripTags(title);
      const id = new Date().getTime();
      NotesServiceInstance.addNote(id, newTitle, newText);
      navigate(`/detail/${id}`);
    } else {
      alert("ERROR");
    }
  }

  function titleChangeHandler(evt) {
    setTitle(evt.target.value);
  }

  function textChangeHandler(evt) {
    setText(evt.target.value);
  }

  return (
    <>
      <Card>
        <Card.Header>
          <h5>New note</h5>
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
            <textarea
              className="form-control font-monospace"
              id="input-text"
              cols="30"
              rows="10"
              value={text}
              onChange={textChangeHandler}
            ></textarea>
          </div>
        </Card.Body>
        <Card.Footer>
          <NavLink to="/" className="btn btn-primary mx-1">
            Overview
          </NavLink>
          <button onClick={createHandler} className="btn btn-primary mx-1">
            Save
          </button>
        </Card.Footer>
      </Card>
    </>
  );
}
