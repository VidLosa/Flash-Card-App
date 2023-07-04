import React from "react";
import { Link, useParams } from "react-router-dom"
import { deleteCard } from "../utils/api"

function Card({card}){

    // Card component that displays a card with front and back content

    return (
  
    <div className="flex-coloumn card">
        <form>
            {/* Display the front and back content of the card */}
            <div className="d-flex justify-content-around">
                <div className="w-50 p-3"><p>{card.front}</p></div>
                <div className="w-50 p-3"><p>{card.back}</p></div>
            </div>    

            {/* Delete button to delete the card */}
            <button 
            className="float-right m-1 mr-3 mb-2 btn btn-danger"       
            onClick={() => {
                const confirm = window.confirm(
                    "Delete this card?\n \nYou won't be able to recover it."
                )
                if(confirm === true){
                    deleteCard(card.id)
                }
                }}
                 >
                <span className="oi oi-trash"/>
            </button>

            {/* Edit button to navigate to the edit card page */}
            <Link 
                to={`/decks/${card.deckId}/cards/${card.id}/edit`} 
                className="float-right m-1 mb-2 btn btn-secondary"
                >
                <span className="oi oi-pencil mr-2"/>
                Edit
            </Link>
        </form>
    </div>
    )

}

export default Card
