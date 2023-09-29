import { createServer } from 'miragejs'
import brStates from '../helpers/brazilianStates';
import statesCases from '../helpers/covidCases';

createServer({
  routes() {
    this.namespace = 'api';

    brStates.forEach(({ name }) => {
      this.get(`covidstatesbr/${name}`, () => {
        return statesCases[name as keyof typeof statesCases];
      })
    });

    this.get('posts', () => {
      return [];
    });
  }
})