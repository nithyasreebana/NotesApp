import api from "../services/api";
import { toast } from "react-toastify";

function NoteCard({ note, fetchNotes,  openEditModal }) {

  const handlePin = async () => {
    try {
      await api.patch(`/notes/${note._id}/pin`);
      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  const handleArchive = async () => {
    try {
      await api.patch(`/notes/${note._id}/archive`);
      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note._id}`);

      toast.success("Note Deleted");

      fetchNotes();
    } catch (err) {
      toast.error("Error deleting note");
    }
  };

  return (
    <div
    className="card mb-3 shadow-sm h-100"
    style={{
  borderRadius: "16px",
  transition: "0.3s",
}}
  >
      <div className="card-body d-flex flex-column">

        <h5 className="fw-bold">{note.title}</h5>

        <p className="text-muted" style={{
   display: "-webkit-box",
   WebkitLineClamp: 3,
   WebkitBoxOrient: "vertical",
   overflow: "hidden",
 }}>{note.content}</p>
      <p className="text-muted small mb-3">
  {new Date(note.createdAt)
    .toLocaleDateString("en-GB")}
</p> 
         <div className="d-flex flex-wrap gap-2 mb-3">
  {note.tags?.map((tag, index) => (
    <span
      key={index}
      className="badge bg-primary me-2"
    >
      {tag}
    </span>
  ))}
</div>

      

        <div className="d-flex gap-2 mb-3">

          {note.pinned && (
            <span className="badge bg-warning text-dark me-2">
              Pinned
            </span>
          )}

          {note.archived && (
            <span className="badge bg-secondary">
              Archived
            </span>
          )}

        </div>
<div className="d-flex flex-wrap gap-2 mt-3">

  <button
    className="btn btn-outline-primary btn-sm"
    onClick={() => openEditModal(note)}
  >
    ✏ Edit
  </button>

  <button
    className="btn btn-outline-warning btn-sm"
    onClick={handlePin}
  >
    {note.pinned ? "📌 Unpin" : "📌 Pin"}
  </button>

  <button
    className="btn btn-outline-secondary btn-sm"
    onClick={handleArchive}
  >
    {note.archived? "🗄 UnArchive" : "🗄 Archive"}
  </button>

  <button
    className="btn btn-outline-danger btn-sm"
    onClick={handleDelete}
  >
    🗑 Delete
  </button>

</div>
       

      </div>
    </div>
  );
}

export default NoteCard;