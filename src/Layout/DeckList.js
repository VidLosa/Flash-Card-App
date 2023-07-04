import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import Deck from "./Deck";
import { Link } from "react-router-dom";

function DeckList() {
    const [decks, setDecks] = useState([]);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal)
            .then(setDecks)
            .catch(setError);

        return () => abortController.abort();
    }, []);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    const deckItems = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

    return (
        <main className="container">
            {/* Link to create a new deck */}
            <Link to="decks/new" className="btn btn-secondary">
                <span className="oi oi-plus mr-2" />
                Create Deck
            </Link>

            <section className="column">{deckItems}</section>
        </main>
    );
}

export default DeckList;
