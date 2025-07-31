import React, { useEffect, useState } from "react";
import type { Deck } from '../types';

type DecksSidebarProps = {
    decks: Deck[];
    onSelectDeck: (deck: Deck) => void;
    onViewDeck: (deck: Deck) => void;
}

export default function DecksSidebar({ decks, onSelectDeck, onViewDeck} : DecksSidebarProps) {
    return (
        <div>
            {decks.length === 0 ? (
                <div className="flex justify-center items-center p-5">
                    <p className="text-2xl">No Decks Added</p>
                </div>
            ) : (
                <ul>
                    {decks.map(deck => (
                        <div className='flex justify-between items-center bg-black h-[8%] px-5 py-2 border-y border-gray-500 hover:cursor-pointer hover:bg-gray-900 duration-500' key={deck.id} onClick={() => onViewDeck(deck)}>
                            <h1 className='text-2xl tracking-tighter'>{deck.name}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600 hover:text-gray-100 duration-500" onClick={(e) => {onSelectDeck(deck); e.stopPropagation();}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}