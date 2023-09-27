import { createServer } from 'miragejs'

createServer({
  routes() {
    this.get('api/covidcases', () => {
      return [
        {
          id: 0,
          select: 'RS',
          main: 1234,
        },
        {
          id: 1,
          select: 'RJ',
          main: 5891,
        },
        {
          id: 2,
          select: 'SP',
          main: 8993,
        },
        {
          id: 3,
          select: 'MG',
          main: 4212,
        }
      ];
    } )
  }
})