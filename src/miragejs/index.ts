import { createServer } from 'miragejs'
import brStates from '../helpers/brazilianStates';
import statesCases from '../helpers/covidCases';

createServer({
  routes() {
    this.namespace = 'api';

    brStates.forEach(({ name }) => {
      this.get(`covidstatesbr/${name}`, () => {
        return statesCases[name as keyof typeof statesCases];
      },
      { timing: 3000 }
      )
    });

    this.get('posts', () => {
      return [];
    });
  }
})