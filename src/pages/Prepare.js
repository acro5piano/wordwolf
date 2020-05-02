import React from 'react'

export function Prepare() {
  const [state, setState] = React.useState({
    players: ['Masaki', 'Akira', 'Chiru'],
    seed: Math.floor(Math.random() * 10000),
    playerName: '',
  })

  React.useEffect(() => {
    try {
      const initialState = window.location.hash.slice(1)
      if (initialState) {
        console.log({ message: 'initializing', state: atob(initialState) })
        setState(JSON.parse(atob(initialState)))
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  const addPlayer = e => {
    e.preventDefault()
    setState({
      ...state,
      players: [...state.players, state.playerName],
      playerName: '',
    })
  }

  const randomize = () => {
    setState({
      ...state,
      seed: Math.floor(Math.random() * 10000),
    })
  }

  const link = `${window.location.protocol}//${window.location.host}/#${btoa(
    JSON.stringify(state),
  )}`

  return (
    <div>
      <ul>
        {state.players.map((player, playerIndex) => (
          <li key={playerIndex}>
            <a
              href={`/?mode=play&playerCount=${state.players.length}&seed=${
                state.seed
              }&playerIndex=${playerIndex + 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {player}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={addPlayer}>
          <input
            type="text"
            value={state.playerName}
            onChange={e => setState({ ...state, playerName: e.target.value })}
            autoFocus
          />
          <button type="submit" onClick={addPlayer}>
            add
          </button>
        </form>
      </div>
      <div>
        <button type="button" onClick={randomize}>
          Randomize (Next Game)
        </button>
      </div>
      <div>
        Sharable link
        <div>
          <a href={link}>{link}</a>
        </div>
      </div>
    </div>
  )
}
