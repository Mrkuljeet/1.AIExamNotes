import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import FinalResult from "../components/FinalResult";

function History() {
  const [topics, setTopics] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const credits = userData?.credits || 0;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          serverUrl + "/api/notes/getnotes",
          { withCredentials: true }
        );
        setTopics(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);

  const openNotes = async (noteId) => {
    setLoading(true);
    setActiveNoteId(noteId);

    try {
      const res = await axios.get(
        serverUrl + `/api/notes/${noteId}`,
        { withCredentials: true }
      );
      setSelectedNote(res.data.content);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <header
        className="mb-6 bg-black text-white p-6 rounded-xl flex justify-between items-center animate-fade-in-down"
      >
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl font-bold">ExamNotes AI</h1>
          <p className="text-sm text-gray-300">
            AI-powered exam-oriented notes
          </p>
        </div>

        <div className="flex items-center gap-4">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          )}

          <button
            onClick={() => navigate("/pricing")}
            className="bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
          >
            💠 {credits}
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* SIDEBAR */}
        {isSidebarOpen && (
          <div
            className="bg-black text-white p-5 rounded-xl col-span-1 animate-fade-in-left"
          >
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="mb-4 hover:text-gray-300 transition-colors cursor-pointer"
            >
              ⬅ Back
            </button>

            <h2 className="mb-4 text-lg font-bold">📚 Your Notes</h2>

            {topics.length === 0 && (
              <p className="text-gray-400 text-sm">
                No notes created yet
              </p>
            )}

            <ul className="space-y-3">
              {topics.map((t) => (
                <li
                  key={t._id}
                  onClick={() => openNotes(t._id)}
                  className={`cursor-pointer p-3 rounded-lg border transition-colors ${activeNoteId === t._id
                      ? "bg-indigo-500"
                      : "bg-gray-800 hover:bg-gray-700"
                    }`}
                >
                  <p className="font-semibold">{t.topic}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTENT */}
        <div
          className="col-span-3 bg-white p-6 rounded-xl shadow animate-fade-in"
        >
          {loading && (
            <p className="text-center text-gray-500">
              Loading notes...
            </p>
          )}

          {!loading && !selectedNote && (
            <div className="text-gray-400 text-center">
              Select a topic from the sidebar
            </div>
          )}

          {!loading && selectedNote && (
            <FinalResult result={selectedNote} />
          )}
        </div>
      </div>

    </div>
  );
}

export default History;