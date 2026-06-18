import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

function Trash() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchTrashNotes();
  }, []);

  const fetchTrashNotes = async () => {
    try {
      const res = await api.get("/notes/trash");
      setNotes(res.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  const restoreNote = async (id) => {
    try {
      await api.patch(`/notes/${id}/restore`);

      fetchTrashNotes();
    } catch (err) {
      console.log(err);
    }
  };

  const permanentlyDelete = async (id) => {
  try {

    const confirmDelete = window.confirm(
      "This note will be deleted forever. Continue?"
    );

    if (!confirmDelete) return;

    await api.delete(
      `/notes/${id}/permanent`
    );

    fetchTrashNotes();

  } catch (err) {
    console.log(err);
  }
};

  return (
    <MainLayout>
        <>
      

      <div className="container mt-4">

        <h2>Trash Notes</h2>

        {notes.map((note) => (
          <div
            key={note._id}
            className="card mb-3"
          >
            <div className="card-body">

              <h5>{note.title}</h5>

              <p>{note.content}</p>

             <div className="d-flex gap-2">

  <button
    className="btn btn-success"
    onClick={() =>
      restoreNote(note._id)
    }
  >
    Restore
  </button>

  <button
    className="btn btn-danger"
    onClick={() =>
      permanentlyDelete(note._id)
    }
  >
    Delete 
  </button>

</div>

            </div>
          </div>
        ))}
      </div>
    </>
    </MainLayout>
  );
}

export default Trash;