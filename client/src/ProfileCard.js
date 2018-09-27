import React, {Component} from 'react';
import './App.css';

class ProfileCard extends Component {

  render(){
    return (
      <div className="profile">
        {
          this.props.pictureURL &&
          <img className="profile-picture" src={this.props.pictureURL} alt="Avatar"/>
        }
        <div className="profile-container">
          <h1><a href={this.props.profileURL} target="_blank">{this.props.firstName} {this.props.lastName}</a></h1>
          <h2>{this.props.headline}</h2>
          <h3>{this.props.location}・{this.props.connectionsCount} </h3>
          <hr/>
          <p className="profile-summary">{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

export default ProfileCard;
