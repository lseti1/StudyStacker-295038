import { useState } from 'react';
import { Flashcard, type Deck } from '../types';
import AddFlashcard from './AddFlashcard';
import DeckCards from './DeckCards';
import ViewFlashcard from './ViewFlashcard';
import EditFlashcard from './EditFlashcard';
import DeleteFlashcard from './DeleteFlashcard';

type ViewDeckProps = {
    deck: Deck;
    onClose: () => void;
};

export default function ViewDeck({ deck, onClose} : ViewDeckProps) {
    type Components = 'AddFlashcard' | 'DeckCards' | 'ViewFlashcard' | 'EditFlashcard' | 'DeleteFlashcard' | null; 

    const [highlight, setHighlight] = useState(false);
    const [activePopUp, setActivePopUp] = useState<Components>(null);
    const [selectedCard, setSelectedCard] = useState<Flashcard | null>(null); 
    let activeComponent = null;

    switch (activePopUp) {
        case 'AddFlashcard':
            activeComponent = <AddFlashcard deckId={deck.id}/>;
            break;
        case 'ViewFlashcard':
            activeComponent = selectedCard ? <ViewFlashcard card={selectedCard}/> : null;
            break;
        case 'EditFlashcard':
            activeComponent = selectedCard ? <EditFlashcard card={selectedCard} onClose={() => setActivePopUp(null)}/> : null;
            break;
        case 'DeleteFlashcard':
            activeComponent = selectedCard ? <DeleteFlashcard card={selectedCard} onClose={() => setActivePopUp(null)}/> : null;
            break;
        default: 
            activeComponent = <DeckCards deckId={deck.id} onCardClick={(card) => {setSelectedCard(card); setActivePopUp('ViewFlashcard')}} onCardSettingsClick={(card) => {setSelectedCard(card); setActivePopUp('EditFlashcard');}} onCardDeleteClick={(card) => {setSelectedCard(card); setActivePopUp('DeleteFlashcard');}}highlight={highlight}/>;
            break;
    }

    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div className='overflow-y-hidden'>{activeComponent}</div>
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                {activePopUp !== 'AddFlashcard' && (<button className="button-black" onClick={() => setActivePopUp('AddFlashcard')}>Add Card</button>)}
                {activePopUp === null && ( <button className="button-black" onClick={() => setHighlight((prev) => !prev)}>Edit Cards</button> )}
                {activePopUp !== null && activePopUp !== 'EditFlashcard' && activePopUp !== 'AddFlashcard' && selectedCard && ( <button className="button-black" onClick={() => setActivePopUp('EditFlashcard')} > Edit Card </button> )}
                {activePopUp === 'EditFlashcard' && (<button className="button-black" onClick={() => setActivePopUp('DeleteFlashcard')}>Delete Flashcard</button>)}
                <button className="button-black">Start Learning</button>
                {activePopUp !== null && ( <button className="button-black" onClick={() => setActivePopUp(null)}>Exit</button> )}
            </div>
        </div>
    );
}