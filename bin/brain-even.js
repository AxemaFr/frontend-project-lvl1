#!/usr/bin/env node
import start from '../src/games/brain-even.js';
import askName from '../src/cli.js';

async function startGame() {
  const name = await askName();
  start(name);
}

startGame();
