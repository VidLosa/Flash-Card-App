import React from "react"
import { Link, useHistory } from "react-router-dom"
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function CreateDeck() {
    const history = useHistory();
    const submitLabel = "Submit";
    const cancelLabel = "Cancel";

    function cancel() {
        history.goBack(); // Send the user back to the previous page when canceling
    }

    function submitHandler(deck) {
        createDeck(deck)
            .then((response) => history.push(`/decks/${response.id}`)); // Take the user to the page of the newly created deck
    }

    return (
        <main className="container deck-view">
            {/* Breadcrumb navigation */}
            <nav className="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home" /> Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">Create Deck</li>
                </ol>
            </nav>

            <h1>Create Deck</h1>

            {/* Render the DeckForm component for creating a new deck */}
            <DeckForm
                onCancel={cancel}
                onSubmit={submitHandler}
                submitLabel={submitLabel}
                cancelLabel={cancelLabel}
            />
        </main>
    );
}

export default CreateDeck;
