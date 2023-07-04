import React from "react"
import { Link } from "react-router-dom"
import { deleteDeck } from "../utils/api"

function Deck({ deck }) {

    return (
        <div className="mt-2">
            <form className="w-100 card">
                {/* Display deck name and number of cards */}
                <div className="card-header d-flex justify-content-between">
                    <h2>{deck.name}</h2>
                    <p>{deck.cards.length} cards</p>
                </div>
                <div className="m-2">
                    <p className="w-100">{deck.description}</p>
                </div>

                <div>
                    {/* Button to view the deck */}
                    <Link to={`/decks/${deck.id}`} className="ml-2 mr-2 mb-2 btn btn-secondary">
                        <span className="oi oi-eye mr-2" />
                        View
                    </Link>
                    {/* Button to study the deck */}
                    <Link to={`/decks/${deck.id}/study`} className="mb-2 btn btn-primary">
                        <span className="oi oi-book mr-2" />
                        Study
                    </Link>
                    {/* Button to delete the deck */}
                    <button
                        className="mr-2 mb-2 btn btn-danger float-right"
                        onClick={() => {
                            const confirm = window.confirm(
                                "Delete this deck?\n \nYou won't be able to recover it."
                            )
                            if (confirm === true) {
                                deleteDeck(deck.id)
                            }
                        }}
                    >
                        <span className="oi oi-trash" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Deck;
