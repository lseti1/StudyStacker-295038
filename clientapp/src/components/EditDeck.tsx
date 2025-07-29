import { useEffect, useState } from "react";
import type { Deck } from '../types';

type EditDeckProps = {
    deck: Deck;
    onClose: () => void;
};

export default function EditDeck({ deck, onClose}: EditDeckProps) {
    const [name, setName] = useState(deck.name);
    const [description, setDescription] = useState(deck.description);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setName(deck.name);
        setDescription(deck.description);
    }, [deck]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5003/api/deck/${deck.id}`, {
            method: "PUT",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({id: deck.id, name, description }),
        });

        if (response.ok) {
            setMessage("Deck Updated");
            window.location.reload();
            onClose();
        } else {
            setMessage("Error saving Deck");
        }
    };


    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="tracking-tighter text-5xl -mt-16">Edit Deck</h1>
                <div className="bg-gray-200 rounded flex flex-col justify-center items-center py-20 w-[40%] text-3xl box-shadow-strong gap-4">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-[90%]">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-[25%_75%] justify-between gap-4">
                                <label className="text-right">Deck Name:</label>
                                <input className="px-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="grid grid-cols-[25%_75%] justify-between gap-4">
                                <label className="text-right">Description:</label>
                                <input className="px-2" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="button-black" type="submit">Update Deck</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                <button className="button-black" onClick={onClose}>Exit</button>
            </div>
        </div>
    );
}