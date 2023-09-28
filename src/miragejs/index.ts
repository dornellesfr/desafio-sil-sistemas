import { createServer } from 'miragejs'
import brStates from '../helpers/brazilianStates';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('covidstatesbr', () => {
      return brStates;
    } );

    this.get('posts', () => {
      return [];
    });
  }
})