import { createServer } from 'miragejs';
import brStates from '../helpers/brazilianStates';
import statesCases from '../helpers/covidCases';
import jokeCategory from '../helpers/jokeCategory';
import jokes from '../helpers/chuckJokes';

createServer({
  routes() {
    this.namespace = 'api';

    brStates.forEach((name) => {
      this.get(`covidstatesbr/${name}`, () => {
        return statesCases[name as keyof typeof statesCases];
      },
      { timing: 3000 }
      );
    });

    jokeCategory.forEach((name) => {
      this.get(`chucknorrisjoke/${name}`, () => {
        return jokes[name as keyof typeof jokes];
      },
      { timing: 3000 }
      );
    });
  }
});