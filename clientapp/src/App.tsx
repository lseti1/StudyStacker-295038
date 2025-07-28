import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddFlashcard from "./components/AddFlashcard";

function App() {
  return (
    <div className='w-full h-screen'>
      <div className='h-full grid grid-cols-[15%_85%]'>
        <div className='bg-gray-600 grid grid-rows-[7%_86%_7%]'>
          <div className='flex justify-center items-center text-white border-y border-gray-500'>
            <h1 className='tracking-tighter font-bold text-3xl text-shadow'>Study Stacker</h1>
          </div>
          <div className='flex flex-col text-white'>
            <div className='flex justify-between items-center bg-black h-[8%] px-5 border-y border-gray-500'>
              <p className='text-3xl tracking-tighter'>Decks</p>
              <p className='text-2xl font-light'>^</p>
            </div>
            <div className='flex justify-between items-center bg-black h-[8%] px-5 border-y border-gray-500'>
              <p className='text-3xl tracking-tighter'>Decks</p>
              <p className='text-2xl font-light'>^</p>
            </div>
          </div>
          <div className='flex justify-between items-center text-white bg-black p-2 border-y border-gray-500'>
             <button className='text-2xl tracking-tighter'>Add Deck +</button>
             <button className=''>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-10 h-10' fill='none' viewBox='0 0 24 24' stroke= 'currentColor' stroke-width='2' >
                <path stroke-linecap='round"'  stroke-linejoin='round'  d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
        <div className='bg-gray-100 grid grid-rows-[7%_86%_7%]'>
          <div className='bg-gray-200 border-y border-gray-300 flex justify-between items-center px-10'>
            <p>Deck Information</p>
            <p>Login/Settings Information</p>
          </div>
          <div className='grid grid-cols-3 h-full gap-10 flex justify-start items-start p-5'>
            <p className='border border-gray-300 shadow-md'>Card</p>
          </div>
          <div className='bg-gray-200 border-y border-gray-300 flex justify-end items-center px-10'>
            <p>Additional Action Buttons Here</p>
          </div>
          
        </div>
        
      </div>
      {/* <AddFlashcard/> */}
    </div>
  );
}

export default App;
