import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import MainLayout from "../layouts/MainLayout";
import { toast } from "react-toastify";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [editForm, setEditForm] = useState({
  title: "",
  content: "",
  tags: "",
});

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
  if (editingNote) {
    setEditForm({
      title: editingNote.title,
      content: editingNote.content,
      tags: editingNote.tags.join(", "),
    });
  }
}, [editingNote]);

useEffect(() => {
  const timeout = setTimeout(() => {
    handleSearch();
  }, 500);

  return () => clearTimeout(timeout);
}, [search]);

  useEffect(() => {
    fetchNotes();
  }, []);

   const openEditModal = (note) => {
  setEditingNote(note);
};
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data.notes);
    } catch (err) {
      console.log(err);
    }
  };


  const handleSearch = async () => {
  try {
    if (!search.trim()) {
      fetchNotes();
      return;
    }

    const res = await api.get(
      `/notes/search?query=${search}`
    );

    setNotes(res.data.notes);
  } catch (err) {
    console.log(err);
  }
};


  const handleUpdateNote = async () => {
  try {
    await api.put(
      `/notes/${editingNote._id}`,
      {
        title: editForm.title,
        content: editForm.content,
        tags: editForm.tags
          .split(",")
          .map(tag => tag.trim()),
      }
    );

    toast.success("Note Updated Successfully");

    setEditingNote(null);

    fetchNotes();
  } catch (err) {
    toast.error("Error Updating Note");
  }
};
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();

    try {
      await api.post("/notes", {
        title: form.title,
        content: form.content,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim()),
      });
      setShowModal(false);
      setForm({
        title: "",
        content: "",
        tags: "",
      });

      fetchNotes();

      toast.success("Note Created Successfully");
    } catch (err) {
      toast.error("Error Creating Note");
    }
  };

  return (
   <MainLayout>
     <>

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">

  <div>
    <h1 className="fw-bold">
      My Notes
    </h1>

    <p className="text-muted">
      Organize your ideas
    </p>
  </div>

  <button
    className="btn btn-primary"
    onClick={() => setShowModal(true)}
  >
    + New Note
  </button>

</div>
        <div className="row mb-4">
  <div className="col-md-10">

    <input
      className="form-control"
      placeholder="Search notes..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

  </div>

  <div className="col-md-2">

    <button
      className="btn btn-primary w-100"
      onClick={handleSearch}
    >
      Search
    </button>

  </div>
</div>


        <h3 className="mb-3">
          Total Notes: {notes.length}
        </h3>

        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <div className="row">
  {notes.map((note) => (
    <div
      key={note._id}
      className="col-lg-4 col-md-6 mb-4"
    >
      <NoteCard
        note={note}
        fetchNotes={fetchNotes}
        openEditModal={openEditModal}
      />
    </div>
  ))}
</div>
        )}
        {editingNote && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{
      background: "rgba(0,0,0,0.5)",
      zIndex: 1000,
    }}
  >
    <div
      className="bg-white p-4 rounded"
      style={{ width: "500px" }}
    >
      <h3>Edit Note</h3>

      <input
        className="form-control mb-2"
        value={editForm.title}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            title: e.target.value,
          })
        }
      />

      <textarea
        className="form-control mb-2"
        rows="5"
        value={editForm.content}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            content: e.target.value,
          })
        }
      />

      <input
        className="form-control mb-3"
        value={editForm.tags}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            tags: e.target.value,
          })
        }
      />

      <button
        className="btn btn-success me-2"
        onClick={handleUpdateNote}
      >
        Save
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setEditingNote(null)}
      >
        Cancel
      </button>
    </div>
  </div>
)}
      </div>
    </>
    {showModal && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 9999,
    }}
  >
    <div
      className="bg-white p-4 rounded shadow"
      style={{
        width: "600px",
      }}
    >
      <h3>Create Note</h3>

      <form onSubmit={handleCreateNote}>

        <input
          className="form-control mb-3"
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="tags"
          placeholder="react,node,mongodb"
          value={form.tags}
          onChange={handleChange}
        />

        <div className="d-flex gap-2">

          <button
            type="submit"
            className="btn btn-primary"
          >
            Create
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setShowModal(false)
            }
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  </div>
)}
   </MainLayout>
  );
}

export default Dashboard;