import { useState } from 'react';
import type { Deck } from '../types';
import AddFlashcard from './AddFlashcard';

type ViewDeckProps = {
    deck: Deck;
    onClose: () => void;
};

export default function ViewDeck({ deck, onClose} : ViewDeckProps) {
    type Components = 'AddFlashcard' | null; // Delete Flashcard & Edit Flashcard popups to be added here late

    const [activePopUp, setActivePopUp] = useState<Components>(null);
    let activeComponent = null;

    switch (activePopUp) {
        case 'AddFlashcard':
            activeComponent = <AddFlashcard />;
            break;
        default: 
            activeComponent = null;
    }

    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div>
                {activeComponent}
            </div>
            {/* <div className="overflow-y-auto">
                <div className="flex flex-row flex-wrap gap-4 p-5 justify-center">
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                <p className='h-60 w-[32%] border box-shadow-light flex items-center justify-center'>Card 1</p>
                </div>
            </div> */}
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                <button className="button-black" onClick={() => setActivePopUp('AddFlashcard')}>Add Card</button>
                <button className="button-black">Edit Deck</button>
                <button className="button-black">Start Learning</button>
                <button className="button-black" onClick={onClose}>Exit</button>
            </div>
        </div>
    );
}