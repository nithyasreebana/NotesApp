import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import MainLayout from "../layouts/MainLayout";

function Archived() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchArchivedNotes();
  }, []);

  const fetchArchivedNotes = async () => {
    try {
      const res = await api.get("/notes/archived");
      setNotes(res.data.note);
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <MainLayout>
     <>

      <div className="container mt-4">
        <h2>Archived Notes</h2>

        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            fetchNotes={fetchArchivedNotes}
          />
        ))}
      </div>
    </>
   </MainLayout>
  );
}

export default Archived;