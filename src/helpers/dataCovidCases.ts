import ICovidCases from "../interfaces/ICovidCases";

const dataCovid: ICovidCases[] = [
  {
    id: 1,
    uf: 'RS',
    name: 'Rio Grande do Sul',
    confirmed_cases: 1234,
  },
  {
    id: 2,
    uf: 'RJ',
    name: 'Rio de Janeiro',
    confirmed_cases: 5891,
  },
  {
    id: 3,
    uf: 'SP',
    name: 'São Paulo',
    confirmed_cases: 8993,
  },
  {
    id: 4,
    uf: 'MG',
    name: 'Minas Gerais',
    confirmed_cases: 4212,
  }
]

export default dataCovid;