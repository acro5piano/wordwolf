const search = new URLSearchParams(location.search.slice(1))

const playerCount = Number(search.get('playerCount'))
const playerIndex = Number(search.get('playerIndex'))
let seed = Number(search.get('seed'))

function random() {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const words = [
  ['パスタ', '白飯'],
  ['お正月', '春休み'],
  ['修学旅行', '運動会'],
  ['イチロー', '松井秀喜'],
  ['赤ちゃん', 'ハムスター'],
  ['東京ドーム', 'メロンパン'],
  ['ドラえもん', 'クレヨンしんちゃん'],
  ['センター試験', '免許試験'],
  ['シュークリーム', 'アンパン'],
  ['スマートフォン', 'パソコン'],
]

const targetWord = words.sort(() => random() - random())[0]

const wolfIndex = Math.floor(random() * 100) % playerCount

const civilWord = targetWord[0]
const wolfWord = targetWord[1]

if (wolfIndex == playerIndex) {
  document.write(wolfWord)
} else {
  document.write(civilWord)
}
