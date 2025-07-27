"use client";

import { useState } from "react";

export default function EditBioForm({ userId, currentBio }) {
  const [bio, setBio] = useState(currentBio);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/update-bio", {
      method: "POST",
      body: JSON.stringify({ userId, bio }),
    });
    if (res.ok) {
      setMessage("Bio Updated!");
    } else {
      setMessage("Failed to update bio.");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="gap-1">
      <textarea
        className=" w-full border-2 border-purple-800"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={3}
      ></textarea>

      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-white"
      >
        Submt
      </button>
      {message && <p className="text-sm text-green-400">{message}</p>}
    </form>
  );
}
