# Flashcards - Udacity Nano Degrees React

Flashcards is a react native mobile application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

To get started, install [Expo](https://expo.io/learn) and follow the installation instructions bellow

## Installation

* `npm install`
* `npm run start`

or 

* `yarn install`
* `yarn start`

Note: There are some problems with npm 5.6 so it might be best if you use yarn.

## Support
* Simulator device - Iphone X  iOS 12
* Simulator device - Iphone XS  iOS 12
* Simulator - Samsung s7
* Device - ASUS 3MAX


## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── Actions # action folder.
    ├── index.js # File containing actions that called reducers.
├── App.js # This is the root of your app.
├── App.test.js # Used for testing. 
├── App.json # used to have the settings to create the builds.
├── components #Component folder
    ├── AddCard.js # Component to add the card
    ├── AddDeck #Component to add the deck
    ├── Button #component that creates a button whether it is used in the project.
    ├── DeckCard #component that creates the cards that will be used in the deck.
    ├── DeckDetail.js # Component with the details of each card
    ├── Decks.js # component that creates the deck
    ├── Quiz.js #  
    ├── textButton.js # component that creates a button whether it is used in the projectyar 

├── reducers # reducers folders.
    ├── index.js # files containing reducers.
├── utils # utils folders.
    ├── _decks.js # Contains the Array with questions and answers.
    ├── _notifications.js # notifications configuration component.
    ├── api.js # provider for connection to the database.
    ├── colors.js # Global colors used in any design.
    ├── routes.js # routing componente.
```

## Create React App
