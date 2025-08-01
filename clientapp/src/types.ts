export type Deck = {
    id: number;
    name: string;
    description: string;
    // cards?: Flashcard[];
};

export type Flashcard = {
    id: number;
    question: string;
    answer: string;
    deckId: number;
};