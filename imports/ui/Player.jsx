import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {

  showEditForm() {
    this.props.showEditForm();
  }

  render() {
    const player = this.props.player;
    const defense = player.duelTackling + player.fieldCoverage + player.blockingAbilities + player.gameStrategy + player.playmakingRisks;
    const offense = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.fieldCoverage + player.playmakingRisks;
    const total = defense + offense;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total} `} />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.ballManipulation}
              </Avatar>
              Ball manipulation
            </Chip>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.kickingAbilities}
            </Avatar>
            Kicking abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.passingAbilities}
            </Avatar>
            Passing abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.duelTackling}
            </Avatar>
            Duel/Tackling abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.fieldCoverage}
            </Avatar>
            Field speed coverage
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.blockingAbilities}
            </Avatar>
            Blocking abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.gameStrategy}
            </Avatar>
            Game strategy
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {player.playmakingRisks}
            </Avatar>
            Playmaking risks
          </Chip>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit player/stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}/>
        </CardActions>
      </Card>
    )
  }
}
