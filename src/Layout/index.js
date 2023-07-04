import React from "react";
import {Route, Switch} from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList.js"
import CardList from "./CardList";
import EditCard from "./EditCard"
import CreateDeck from "./CreateDeck"
import AddCard from "./AddCard"
import EditDeck from "./EditDeck"
import Study from "./Study"

function Layout() {


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>

          <Route exact path ="/">
            <DeckList />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <CardList />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path ="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path ="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
            <Route>
              <NotFound />
            </Route>
            
        </Switch>
          
        

      </div>
    </>
  );
}

export default Layout;
