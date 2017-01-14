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
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Emmanuel Henri" subtitle="Offense: 12 - Defense: 8" />}
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
                2
              </Avatar>
              Ball manipulation
            </Chip>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Kicking abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Passing abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Duel/Tackling abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Field speed coverage
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Blocking abilities
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Game strategy
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Playmaking risks
          </Chip>
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
