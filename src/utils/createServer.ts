import { createServer } from 'miragejs'
import dataCovid from '../helpers/dataCovidCases';

createServer({
  routes() {
    this.get('api/covidcases', () => {
      return dataCovid;
    } )
  }
})