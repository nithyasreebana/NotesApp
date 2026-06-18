import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import MainLayout from "../layouts/MainLayout";

function Pinned() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchPinnedNotes();
  }, []);

  const fetchPinnedNotes = async () => {
    try {
      const res = await api.get("/notes/pinned");
      setNotes(res.data.note);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>
        <>

      <div className="container mt-4">
        <h2>Pinned Notes</h2>

        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            fetchNotes={fetchPinnedNotes}
          />
        ))}
      </div>
    </>
    </MainLayout>
  );
}

export default Pinned;