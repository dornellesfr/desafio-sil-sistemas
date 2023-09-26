import { createServer } from 'miragejs'

createServer({
  routes() {
    this.get('api/covidcases', () => {
      return [];
    } )
  }
})