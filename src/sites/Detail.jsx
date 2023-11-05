import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import NotesServiceInstance from "../services/NoteServiceInstance";

//import replacer from "../helper/replacer";
import { __replacer, replacer } from "../helper/functions";
import Card from "../components/Card";

export default function Detail() {
  const params = useParams();
  const id = parseInt(params.id);
  const note = NotesServiceInstance.getNoteByID(id);
  const navigate = useNavigate();

  //const text = note.text.split("\n").join("<br />");
  const text = replacer(note.text);

  function editHandler() {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <Card>
        <Card.Header>
          <h5>
            {note.title} [#{note.id}]
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
          <NavLink to={`/edit/${id}`} className="btn btn-primary mx-1">
            Edit
          </NavLink>
          <NavLink to={`/delete/${id}`} className="btn btn-danger mx-1">
            Delete
          </NavLink>
        </Card.Footer>
      </Card>
    </>
  );
}
