# Thinkful Flashcard App
Welcome to the Thinkful Flashcard App repository! This project serves as the Capstone Flashcard App for the Thinkful Course. The app is designed to help teachers and students create decks of flashcards for studying purposes.

Getting Started
To run the app on your local machine, follow these steps:

Download the files from this repository.
Install the required dependencies by running npm install.
Run the server and the React app concurrently using npm run start:server and npm run start:react.
Purpose of the App
The Thinkful Flashcard App provides a platform for teachers and students to create, view, update, and study decks of flashcards. The app is designed to enhance the studying experience and facilitate learning through the use of interactive flashcards.

# Home Screen
The Home screen displays a list of decks, including their descriptions. Users have the options to view, study, or delete each deck. The decks are loaded from the database using the listDecks API call.

# Study Screen
The Study screen allows students to flip through existing cards. To proceed to the next card, the student must flip the current card. This feature is available only if a deck has at least 3 cards. If a deck has fewer than 3 cards, the student is prompted to add more cards. When the last card is flipped, the student is given the option to restart the deck or return to the Home page.

# View Deck Screen
The View Deck screen displays the selected deck, including its name, description, and cards. Users can choose to study, edit the deck, add cards, or delete the deck.

# Cards List
In the View Deck screen, there is a table containing all the cards in the deck, showing the front and back of each card. The table provides options for editing or deleting each card.

# Create / Update Deck
The pages for creating and updating a deck use the same form. When updating a deck, the fields are pre-filled with the current values. Clicking Submit takes the user to the View Deck screen, while clicking Cancel returns the user to the Home screen.

# Create / Update Card
The pages for creating and updating a card also use the same form. When updating a card, the fields are pre-filled with the current values. Clicking Submit after adding a card clears the form, allowing the user to create more cards. When updating a card, clicking Submit returns the user to the View Deck screen. Clicking Cancel on either form returns the user to the View Deck screen.

Acknowledgments
Special thanks to the team at Thinkful and all contributors who have contributed to this project.

Happy studying and enjoy using the Thinkful Flashcard App!
