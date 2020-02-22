import React from 'react'

const TeamNames = ({teamdata, selectTeam, selectedTeam}) => {

  const teamnames = Object.keys(teamdata).map(teamname => {
    return (
      <p
        className={`team__container__names__name ${selectedTeam === teamname ? 'active' : ''}`}
        onClick={() => selectTeam(teamname)}
      >
        {teamname}
      </p>
    )
  })

  return (
    <div className="team__container__names">
      <div className="team__container__names__container">
        {teamnames}
      </div>
    </div>
  )
}

export default TeamNames
