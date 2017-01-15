import React, { Component } from 'react';

import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

export default class TeamStats extends Component {

  render() {

    const players = this.props.players;
    const numPlayers = players.length;

    const data = {
      labels: ['Ball Manipulation', 'Kicking', 'Passing', 'Duel/Tackling', 'Field Coverage', 'Blocking', 'Strategy','Risks'],

      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12, 71, 161, 1)',
          pointBackgroundColor: 'rgba(12, 71, 161, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12, 71, 161, 1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={data}
              width={500}
              height={500}
              options={{
                mantainAspectRatio: false
              }}/>
          </div>
          <div className="col s12 m5">
            <h4>Scores in % of max possible</h4>
            <Divider />
            <h4>Team's offense: 45%</h4>
            <h4>Team's defense: 45%</h4>
            <h4>Team's total: 45%</h4>
            <Divider />
            <h4>Number of players: 9</h4>
          </div>
        </div>
      </div>
    );
  }
}
