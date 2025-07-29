import React, { useEffect, useState } from "react";

type Deck = {
    id: number;
    name: string;
    description: string;
};

export default function DecksSidebar() {
    const [decks, setDecks] = useState<Deck[]>([]);

    const fetchDecks = async () => {
        const response = await fetch("http://localhost:5003/api/deck");
        const data = await response.json();
        setDecks(data);
    };

    useEffect(() => {
        fetchDecks();
    }, []);

    return (
        <div>
            {decks.length === 0 ? (
                <p>No Decks Found</p>
            ) : (
                <ul>
                    {decks.map(deck => (
                        <div className='flex justify-between items-center bg-black h-[8%] px-5 py-2 border-y border-gray-500'>
                            <h1 className='text-2xl tracking-tighter'>{deck.name}</h1>
                            <p className='text-2xl font-light'>^</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}