import { Flashcard } from "../types";
import { useState } from "react";

type EditFlashcardProps = {
    card: Flashcard;
    onClose: () => void;
};

export default function EditFlashcard({ card, onClose }: EditFlashcardProps) {
    const [question, setQuestion] = useState(card.question);
    const [answer, setAnswer] = useState(card.answer);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5003/api/flashcards/${card.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: card.id, question, answer }),
        });

        if (response.ok) {
            setMessage("Flashcard Updated");
            onClose();
        } else {
            setMessage("Error updating Flashcard");
        }
    };

    return (
        <div className="h-full w-full grid grid-rows-[auto] tracking-tighter font-light">
            <div className="flex flex-col justify-center items-center gap-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">Update a Flashcard</h2>
                    <div className="bg-white rounded flex flex-col justify-center items-center text-3xl box-shadow-strong w-[50%] h-[60%]">
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full">
                            <input type="text" placeholder="Front" value={question} onChange={(e) => setQuestion(e.target.value)} className="max-w-[50%] rounded text-center" required />
                            <p className="text-gray-300 text-base">Front</p>
                        </div>
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full">
                            <input type="text" placeholder="Back" value={answer} onChange={(e) => setAnswer(e.target.value)} className="max-w-[50%] rounded text-center" required />
                            <p className="text-gray-300 text-base">Back</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="button-green" >Update Flashcard</button>
                    </div>
                </form>
                {message && <p className="text-sm text-green-600">{message}</p>}
            </div>
        </div>
    );
}