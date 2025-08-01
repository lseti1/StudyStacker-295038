import { useState } from "react";
import { Flashcard } from "../types";

type DeleteFlashcardProps = {
    card: Flashcard;
    onClose: () => void; 
}

export default function DeleteFlashcard( {card, onClose} : DeleteFlashcardProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5003/api/flashcards/${card.id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            setMessage("Flashcard Successfully Deleted");
            onClose();
        } else {
            setMessage("Flashcard couldn't be deleted");
        }
        
    };

    return (
        <div className="h-full w-full grid grid-rows-[auto] tracking-tighter font-light">
            <div className="flex flex-col justify-center items-center gap-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">Deleting a Flashcard</h2>
                    <div className="bg-white rounded flex flex-col justify-center items-center text-3xl box-shadow-strong w-[50%] h-[60%] select-none">
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full">
                            <p>{card.question}</p>
                            <p className="text-gray-300 text-base">Front</p>
                        </div>
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full">
                            <p>{card.answer}</p>
                            <p className="text-gray-300 text-base">Back</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="button-red" >Delete Flashcard</button>
                    </div>
                </form>
                {message && <p className="text-sm text-green-600">{message}</p>}
            </div>
        </div>
    )
}