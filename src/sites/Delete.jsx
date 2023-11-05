import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import NotesServiceInstance from "../services/NoteServiceInstance";

import { __replacer, replacer } from "../helper/functions";

import Card from "../components/Card";

export default function Delete() {
  const params = useParams();
  const navigate = useNavigate();
  const id = parseInt(params.id);
  const note = NotesServiceInstance.getNoteByID(id);

  const text = replacer(note.text);

  function deleteHandler() {
    NotesServiceInstance.removeNote(id);
    navigate("/");
  }

  return (
    <>
      <Card className="border-danger">
        <Card.Header className="text-danger">
          <h5>
            [DELETE] {note.title} [#{note.id}]
          </h5>
        </Card.Header>
        <Card.Body>
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
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
          <button onClick={deleteHandler} className="btn btn-danger mx-1">
            Delete
          </button>
        </Card.Footer>
      </Card>
    </>
  );
}
