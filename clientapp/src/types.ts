export type Deck = {
    id: number;
    name: string;
    description: string;
};

export type Flashcard = {
    id: number;
    question: string;
    answer: string;
    deckId: number;
};