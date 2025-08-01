import { useState, useEffect } from "react";
import type { Flashcard } from '../types';

type DeckCardsProps = {
    deckId: number;
    onCardClick: (card: Flashcard) => void;
    onCardSettingsClick: (card: Flashcard) => void;
    onCardDeleteClick: (card: Flashcard) => void;
    highlight: boolean;
}

export default function DeckCards({ deckId, onCardClick, onCardSettingsClick, onCardDeleteClick, highlight }: DeckCardsProps) {
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
                                <div key={card.id} onClick={() => onCardClick(card)} className="relative bg-white h-60 w-[32%] border box-shadow-light flex items-center justify-center text-3xl hover:bg-gray-100 hover:cursor-pointer select-none duration-500">
                                    <p>{card.question}</p>
                                    {highlight && <div className="absolute flex flex-row top-2 right-4 gap-3 justify-center items-center text-gray-400 ">
                                            <button onClick={(e) => {e.stopPropagation(); onCardDeleteClick(card);}} className="text-lg font-bold hover:text-black duration-500">X</button>
                                            <svg onClick={(e) => {e.stopPropagation(); onCardSettingsClick(card);}} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 hover:text-black hover:cursor-pointer duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                                            </svg>
                                            
                                        </div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

