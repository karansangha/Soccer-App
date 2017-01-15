import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

export default class TeamList extends Component {

  updateCurrentPlayer(player){
    this.props.updateCurrentPlayer(player);
  }

  deletePlayer(playerId) {
    Meteor.call('deletePlayer', playerId, (error) => {
      if (error) {
        alert("Oops something went wrong: " + error.reason)
      }
      else {
        console.log("Player deleted!");
        }
    });
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg"/>}
        rightIcon={<ActionDeleteForever hoverColor={red500}
          onClick={this.deletePlayer.bind(this, this.props.playerId)}/>}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
        />
    )
  }
}
