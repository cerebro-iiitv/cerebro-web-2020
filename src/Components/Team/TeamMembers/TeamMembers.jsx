import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

class TeamMembers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      members: props.team,
      memberList: this.getMemberList(props.team)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teamName !== this.props.teamName ) {
      this.setState({members: nextProps.team, memberList: []}, () => {
        this.setState({
          memberList: this.getMemberList(nextProps.team)
        })
      })
    }
  }

  getMemberList = team => {
    return team.map(member => {
      return <TeamMember id={member.name} member={member} />
    })
  }
  
  render() {
    return (
      <div className="team__container__members">
        <div className="team__container__members__container">
          {this.state.memberList}
        </div>    
        <div className="team__container__members__shadow-bottom"></div>
      </div>
    )
  }
}

const TeamMember = ({member}) => {

  const deg = parseInt((Math.random() * Math.random() * Math.random()) * 1000)

  return (
    <div className="team-member animation-fade-in">
      <div className="team-member__left">
        <div
          className="team-member__left__image"
          style={{
            transform: `rotate(${deg}deg)`
          }}
        >
          <div
            className="team-member__left__image__profile"
            style={{
              backgroundImage: `url('${member.img}')`,
              transform: `rotate(-${deg}deg)`
            }}  
          ></div>
          <div className="team-member__left__image__planet"><span></span></div>
          <div className="team-member__left__image__moon"><span></span></div>
        </div>
        <p className="team-member__left__name">{member.name}</p>
        <p className="team-member__left__role">{member.role}</p>
      </div>
      <div className="team-member__social">
        <a className=""><i className="fa fa-github"></i></a>
        <a className=""><i className="fa fa-linkedin"></i></a>
        <a className=""><i className="fa fa-dribbble"></i></a>
      </div>
    </div>
  )
}

export default TeamMembers
