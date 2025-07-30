import React, {useEffect, useState} from 'react';
import './App.css';
import AddFlashcard from "./components/AddFlashcard";
import AddDeck from './components/AddDeck';
import DecksSidebar from './components/DecksSidebar';
import EditDeck from './components/EditDeck';
import type { Deck } from './types';
import ViewDeck from './components/ViewDeck';

function App() {
  type Components = 'AddDeck' | 'AddFlashcard' | 'EditDeck' | 'ViewDeck' | null;

  const [decks, setDecks] = useState<Deck[]>([]);
  const fetchDecks = async () => {
    try {
      const response = await fetch("http://localhost:5003/api/deck");
      const data = await response.json();
      setDecks(data);
      
    } catch (err) {
      console.error("Failed to fetch decks:", err);
    }
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const handleEditDeck = (deck: Deck) => {
    setSelectedDeck(deck);
    setActivePopUp('EditDeck');
  };

  const handleViewDeck = (deck: Deck) => {
    setSelectedDeck(deck);
    setActivePopUp('ViewDeck');
  };

  const [activePopUp, setActivePopUp] = useState<Components>(null);
  let activeComponent = null;

  switch (activePopUp) {
    case 'AddDeck':
      activeComponent = <AddDeck onClose={() => {setActivePopUp(null); setSelectedDeck(null);}}/>;
      break;
    case 'EditDeck':
      if (selectedDeck) {
        activeComponent = <EditDeck deck={selectedDeck} onClose={() => {setActivePopUp(null); setSelectedDeck(null);}}/>;
      }
      break;
    case 'ViewDeck':
      if (selectedDeck) {
        activeComponent = <ViewDeck deck={selectedDeck} onClose={() => {setActivePopUp(null); setSelectedDeck(null);}}/>
      }
      break;
    default: 
      activeComponent = null;
  }

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='h-screen grid grid-cols-[15%_85%]'>
        <div className='bg-gray-600 grid grid-rows-[7%_86%_7%]'>
          <div className='flex justify-center items-center text-white border-y border-gray-500'>
            <h1 className='tracking-tighter font-bold text-4xl text-shadow'>Study Stacker</h1>
          </div>
          <div className='flex flex-col text-white'>
            <DecksSidebar decks={decks} onSelectDeck={handleEditDeck} onViewDeck={handleViewDeck}/>
          </div>
          <div className='flex justify-between items-center text-white bg-black p-4 border-y border-gray-500'>
             <button onClick={() => setActivePopUp('AddDeck')} className='text-2xl tracking-tighter hover:text-gray-400 duration-500'>Add Deck +</button>
             <button className=''>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-10 h-10 hover:text-gray-400 duration-500' fill='none' viewBox='0 0 24 24' stroke= 'currentColor' stroke-width='2' >
                <path stroke-linecap='round"'  stroke-linejoin='round'  d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
        <div className='bg-gray-100 h-screen grid grid-rows-[7%_93%]'>
          <div className='bg-gray-200 border-y border-gray-300 flex justify-between items-center px-10'>
            <div className='flex justify-center items-center gap-4'>
              <p className='text-4xl tracking-tighter font-light'>{selectedDeck ? selectedDeck.name : "No Deck Selected"}</p>
              <div className='flex flex-col justify-start'>
                <p>Total Decks: {decks.length}</p>
              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-gray-600 hover:cursor-pointer duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 hover:text-gray-600 hover:cursor-pointer  duration-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          {activeComponent}
        </div>
        
      </div>
    </div>
  );
}

export default App;
