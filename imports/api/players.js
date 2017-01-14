import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  ballManipulation: { type: Number, defaultValue: 0},
  kickingAbilities: { type: Number, defaultValue: 0},
  passingAbilities: { type: Number, defaultValue: 0},
  duelTackling: { type: Number, defaultValue: 0},
  fieldCoverage: { type: Number, defaultValue: 0},
  blockingAbilities: { type: Number, defaultValue: 0},
  gameStrategy: { type: Number, defaultValue: 0},
  playmakingRisks: { type: Number, defaultValue: 0},
  notes: { type: String, optional: true},
});

Players.attachSchema(PlayerSchema);
