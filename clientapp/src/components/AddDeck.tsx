import { useState } from "react";

export default function AddDeck() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            const response = await fetch("http://localhost:5003/api/deck", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({ name, description}),
            });

            if (response.ok) {
                setMessage("Deck saved");
                setName("");
                setDescription("");
            } else {
                setMessage("Error saving Deck");
            }
        };

    return (
        <div>
            <h2>Add a deck</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Deck Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Deck Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Save Deck</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
