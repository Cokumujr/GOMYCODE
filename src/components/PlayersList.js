import React from 'react'
import Player from './Player'
import players from '../players'


const PlayersList = () => {
  return (
    <div>
      <h1>Team of The Year Nominees</h1>
      <div className="row">
        {players.map((player) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={player.id}>
            <Player {...player} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayersList