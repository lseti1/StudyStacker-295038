import { Flashcard } from "../types";

type ViewFlashcardProps = {
    card: Flashcard
};

export default function ViewFlashcard({ card }: ViewFlashcardProps) {

    return (
        <div className="h-full w-full grid grid-rows-[auto] tracking-tighter font-light">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
                    <div className="bg-white rounded flex flex-col justify-center items-center text-3xl box-shadow-strong w-[50%] h-[60%]">
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full ">
                            <h2>{card.question}</h2>
                            <p className="text-gray-300 text-base">Front</p>
                        </div>
                        <div className="flex flex-col justify-center items-center border border-gray-100 h-full w-full">
                            <p>{card.answer}</p>
                            <p className="text-gray-300 text-base">Back</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}