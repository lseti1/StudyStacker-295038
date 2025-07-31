import { useState, useEffect } from "react";
import type { Flashcard } from '../types';


type DeckCardsProps = {
    deckId: number;
}

export default function DeckCards({ deckId }: DeckCardsProps) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    useEffect(() => {
        if (!deckId) return;

        const fetchFlashcards = async () => {
            const response = await fetch(`http://localhost:5003/api/flashcards/deck/${deckId}`)

            if (response.ok) {
                const data = await response.json();
                setFlashcards(data);
            }
        };

        fetchFlashcards();
    }, [deckId]);

    return (
        <div className="h-full w-full grid grid-rows-[auto] tracking-tighter font-light">
            <div className="overflow-y-auto">
                <div>
                    {flashcards.length === 0 ? (
                        <div className="flex justify-center items-center p-5">
                            <p className="text-3xl">No Flashcards Added</p>
                        </div>
                    ) : (
                        <div className="flex flex-row flex-wrap gap-4 p-5 justify-center">
                            {flashcards.map((card) => (
                                <p key={card.id} className="bg-white bg-white h-60 w-[32%] border box-shadow-light flex items-center justify-center text-3xl">{card.question}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

