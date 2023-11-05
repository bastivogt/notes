import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import NotesServiceInstance from "../services/NoteServiceInstance";

import Card from "../components/Card";
import List from "../components/List";
import LinkList from "../components/LinkList";

export default function All() {
  const navigate = useNavigate();
  function newNoteHandler() {
    NotesServiceInstance.addNote(new Date().getTime(), "Test 3", "Test 3 Text");
  }

  function deleteHandler(evt, id) {
    evt.preventDefault();
    console.log("DELETE_HANDLER", id);
    //NotesServiceInstance.removeNote(id);
    navigate(`/delete/${id}`);
  }

  function editHandler(id) {
    console.log("EDIT_HANDLER");
    //NotesServiceInstance.updateNote(id, "updated Title", "updated Text");
    navigate(`/edit/${id}`);
  }

  function contentChangeHandler(evt) {
    console.log("ON_CONTENT_CHANGE");
    console.log(evt);
    setContent(evt.target.innerHTML);
    console.log("CONTENT", content);
  }
  return (
    <>
      <NavLink to="/new" className="btn btn-primary btn-lg mb-4">
        +
      </NavLink>
      {NotesServiceInstance.notes.length > 0 ? (
        <Card>
          <Card.Header>
            <h5>All notes</h5>
          </Card.Header>
          <Card.Body>
            <LinkList>
              {NotesServiceInstance.getNotesByDate(false).map((note) => {
                return (
                  <LinkList.Item
                    to={`/detail/${note.id}`}
                    key={note.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5>{note.title}</h5>

                      <div>
                        <div>
                          <small>
                            <strong>created at: </strong>
                            {new Date(note.createdAt).toLocaleString("de-DE")}
                          </small>
                        </div>
                        <div>
                          <small>
                            <strong>updated at: </strong>
                            {new Date(note.updatedAt).toLocaleString("de-DE")}
                          </small>
                        </div>
                        <div>
                          <small>
                            <strong>ID: </strong>
                            {note.id}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={(evt) => deleteHandler(evt, note.id)}
                        className="btn btn-danger"
                      >
                        x
                      </button>
                    </div>
                  </LinkList.Item>
                );
              })}
            </LinkList>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}
