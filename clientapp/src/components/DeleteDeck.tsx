import type { Deck } from '../types';
import { useState } from 'react';

type DeleteDeckProps = {
    deck: Deck;
    onEditDeck: () => void;
    onExit: () => void;
}

export default function DeleteDeck({deck, onEditDeck, onExit} : DeleteDeckProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5003/api/deck/${deck.id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            setMessage("Deck Deleted");
            onExit();
            window.location.reload();
        } else {
            setMessage("Deck could not be deleted");
        }
    }

    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="tracking-tighter text-5xl -mt-16">Delete Deck</h1>
                <div className="bg-gray-200 rounded flex flex-col justify-center items-center py-20 w-[40%] text-3xl box-shadow-strong gap-4">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-[80%]">
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-[30%_70%] justify-between gap-4">
                                <label className="text-right font-semibold">Deck Name:</label>
                                <input className="px-2 select-none  pointer-events-none" type="text" value={deck.name}/>
                            </div>
                            <div className="grid grid-cols-[30%_70%] justify-between gap-4">
                                <label className="text-right font-semibold">Description:</label>
                                <input className="px-2 select-none  pointer-events-none" type="text" value={deck.description}/>
                            </div>
                        </div>
                        <p className='text-center text-lg'><b>PLEASE NOTE:</b><br />Deleting a deck will delete all cards associated with it</p>
                        <div className="flex justify-center">
                            <button className="button-red" type="submit">Delete Deck</button>
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                <button className="button-black" onClick={onEditDeck}>Edit Deck</button>
                <button className="button-black" onClick={onExit}>Exit</button>
            </div>
        </div>
    );
}