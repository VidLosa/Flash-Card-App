import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import Card from "./Card";
import { useParams, Link } from "react-router-dom"

function CardList() {
    const [deck, setDeck] = useState([]);
    const [error, setError] = useState(undefined);
    const { deckId } = useParams();

    useEffect(() => {
        // Fetch the deck data when the component mounts
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal)
            .then(setDeck)
            .catch(setError);

        // Cleanup function to abort the fetch if the component unmounts
        return () => abortController.abort();
    }, []);

    if (error) {
        // Display an error message if there was an error while fetching the deck data
        return <ErrorMessage error={error} />;
    }

    return (
        <main>
            {/* Breadcrumb navigation */}
            <nav className="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home" /> Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">{deck.name}</li>
                </ol>
            </nav>

            <div className="mt-2">
                {/* Display deck name and description */}
                <h4>{deck.name}</h4>
                <p>{deck.description}</p>

                <div>
                    {/* Button to add new cards to the deck */}
                    <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary mb-2">
                        <span className="oi oi-plus mr-2" />
                        Add Cards
                    </Link>

                    {/* Button to edit the deck */}
                    <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mb-2 ml-2" title="Edit deck">
                        <span className="mr-2 oi oi-pencil" />
                        Edit
                    </Link>
                </div>

                <h2>Cards</h2>
                {/* Render the cards in the deck */}
                {deck.cards?.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </main>
    );
}

export default CardList;
