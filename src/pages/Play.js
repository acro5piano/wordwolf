import React from 'react'
import words from '../words'

const search = new URLSearchParams(window.location.search.slice(1))

const playerCount = Number(search.get('playerCount'))
const playerIndex = Number(search.get('playerIndex'))
let seed = Number(search.get('seed'))

function random() {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const [civilWord, wolfWord] = words.sort(() => random() - random())[0]

const wolfIndex = (Math.floor(random() * 100) % (playerCount - 1)) + 1

console.log({ wolfIndex })

export function Play() {
  return (
    <div>
      <p>{wolfIndex === playerIndex ? wolfWord : civilWord}</p>
    </div>
  )
}
