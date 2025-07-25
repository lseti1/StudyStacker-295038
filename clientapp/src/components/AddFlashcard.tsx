import { useState } from "react";

export default function AddFlashcard() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5003/api/flashcards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, answer, category }),
        });

        if (response.ok) {
            setMessage("Flashcard saved");
            setQuestion("");
            setAnswer("");
            setCategory("");
        } else {
            setMessage("Error saving flashcard");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center p-6 bg-white rounded-xl shadow-md ">
            <h2 className="text-2xl font-semibold text-center">Add a Flashcard</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full border border-gray-300 rounded p-2" required />
                <input type="text" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} className="w-full border border-gray-300 rounded p-2" required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded p-2" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" > Save Flashcard </button>
            </form>
            {message && <p className="text-sm text-green-600">{message}</p>}
        </div>
    );
}
