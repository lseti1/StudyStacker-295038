import { useState } from 'react';
import type { Deck } from '../types';
import AddFlashcard from './AddFlashcard';
import DeckCards from './DeckCards';

type ViewDeckProps = {
    deck: Deck;
    onClose: () => void;
};

export default function ViewDeck({ deck, onClose} : ViewDeckProps) {
    type Components = 'AddFlashcard' | 'DeckCards' | null; // Delete Flashcard & Edit Flashcard popups to be added here late

    const [activePopUp, setActivePopUp] = useState<Components>(null);
    let activeComponent = null;

    switch (activePopUp) {
        case 'AddFlashcard':
            activeComponent = <AddFlashcard deckId={deck.id}/>;
            break;
        default: 
            activeComponent = <DeckCards />;
            break;
    }

    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div className='overflow-y-hidden'>{activeComponent}</div>
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                <button className="button-black" onClick={() => setActivePopUp('AddFlashcard')}>Add Card</button>
                <button className="button-black">Edit Deck</button>
                <button className="button-black">Start Learning</button>
                {activePopUp !== null && (
                    <button className="button-black" onClick={() => setActivePopUp(null)}>Exit</button>
                )}
            </div>
        </div>
    );
}