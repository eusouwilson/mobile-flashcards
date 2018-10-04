import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'Flashcards:deck'

const decks = {
  React: {
    title: 'DC Comics',
    questions: [
      {
        question: 'What s the biggest super hero in DC?',
        answer: 'Super-man'
      },
      {
        question: 'What is the identity of Superman?',
        answer: '50 years'
      }
    ]
  },
  JavaScript: {
    title: 'Marvel',
    questions: [
      {
        question: 'Who Destroyed Half the Universe?',
        answer: 'Thanos.'
      }
    ]
  }
}


function setDummyData () {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
  return decks
}

export function formatDeckResults (results) {
  return results === null ? setDummyData() : JSON.parse(results)
}
