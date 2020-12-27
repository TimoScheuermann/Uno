import store from '@/store';
import { IRound } from './models';

function getEveryRound(): IRound[] {
  return store.state.rounds;
}

const totalRounds = () => getEveryRound().length;

function round(number: number, decimals = 2): number {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function getWonRoundsTimo(): IRound[] {
  return getEveryRound().filter(x => x.winner === 'timo');
}

function getWonRoundsPetra(): IRound[] {
  return getEveryRound().filter(x => x.winner === 'petra');
}

export function getPointsTimo(): number {
  return getWonRoundsPetra()
    .map(x => x.points)
    .reduce((a, b) => a + b, 0);
}

export function getPointsPetra(): number {
  return getWonRoundsTimo()
    .map(x => x.points)
    .reduce((a, b) => a + b, 0);
}

export function getAmount(): number {
  return Math.abs(getPointsPetra() - getPointsTimo());
}

export function getFoursTimo(): number {
  return getEveryRound()
    .map(x => x.drawTimo)
    .reduce((a, b) => a + b, 0);
}

export function getFoursPetra(): number {
  return getEveryRound()
    .map(x => x.drawPetra)
    .reduce((a, b) => a + b, 0);
}

export function getWinChanceTimo(): number {
  if (totalRounds() === 0) return 100;
  return round((getWonRoundsTimo().length / totalRounds()) * 100);
}

export function getWinChancePetra(): number {
  if (totalRounds() === 0) return 100;
  return round((getWonRoundsPetra().length / totalRounds()) * 100);
}

export function getFoursPerRoundTimo(): number {
  if (totalRounds() === 0) return 0;
  return round(getFoursTimo() / totalRounds(), 1);
}

export function getFoursPerRoundPetra(): number {
  if (totalRounds() === 0) return 0;
  return round(getFoursPetra() / totalRounds(), 1);
}

export function getMostFoursInRoundTimo(): number {
  if (totalRounds() === 0) return 0;
  return getEveryRound()
    .map(x => x.drawTimo)
    .sort((a, b) => b - a)[0];
}

export function getMostFoursInRoundPetra(): number {
  if (totalRounds() === 0) return 0;
  return getEveryRound()
    .map(x => x.drawPetra)
    .sort((a, b) => b - a)[0];
}

export function getMostExpensiveRoundTimo(): number | string {
  if (getWonRoundsPetra().length === 0) return '-/-';
  return getWonRoundsPetra()
    .map(x => x.points)
    .sort((a, b) => b - a)[0];
}

export function getMostExpensiveRoundPetra(): number | string {
  if (getWonRoundsTimo().length === 0) return '-/-';
  return getWonRoundsTimo()
    .map(x => x.points)
    .sort((a, b) => b - a)[0];
}

export function getMostCheapestRoundTimo(): number | string {
  if (getWonRoundsPetra().length === 0) return '-/-';
  return getWonRoundsPetra()
    .map(x => x.points)
    .sort((a, b) => a - b)[0];
}

export function getMostCheapestRoundPetra(): number | string {
  if (getWonRoundsTimo().length === 0) return '-/-';
  return getWonRoundsTimo()
    .map(x => x.points)
    .sort((a, b) => a - b)[0];
}
