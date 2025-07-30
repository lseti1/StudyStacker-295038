import type { Deck } from '../types';

type ViewDeckProps = {
    deck: Deck;
    onClose: () => void;
};

export default function ViewDeck({ deck, onClose} : ViewDeckProps) {

    return (
        <div className="h-full grid grid-rows-[auto_7%] tracking-tighter font-light">
            <div className="overflow-y-auto">
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
            </div>
            <div className='bg-gray-200 border-y border-gray-300 flex justify-end gap-4 items-center px-10'>
                <button className="button-black" onClick={onClose}>Exit</button>
            </div>
        </div>
    );
}