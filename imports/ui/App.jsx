import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {

  getPlayers() {
    return[
      {
        _id: 1,
        name: "Karan Sangha",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks:2,
      },
      {
        _id: 2,
        name: "Rajvir Sangha",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks:2,
      },
      {
        _id: 3,
        name: "Jagdish Sangha",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks:2,
      }
    ];
  }

  renderPlayers() {
    return this.getPlayers().map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team list</h2>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}
