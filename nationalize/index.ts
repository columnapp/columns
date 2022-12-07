import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Nationalize',
  info: 'Guess the nationality of a name',
  display: {
    info: 'render text',
    render: (api) => ({
      type: 'text',
      value: api.cell.value,
    }),
  },
  parse: {
    info: 'parse nationalize.io response',
    logic: (_api, raw) => {
      /*
      {"country":[{"country_id":"ID","probability":0.938},{"country_id":"MY","probability":0.013},{"country_id":"SQ","probability":0.009},{"country_id":"QA","probability":0.004},{"country_id":"JP","probability":0.004}],"name":"Wahyu"}
      */
      let data: { country: { country_id: string; probability: number }[]; name: string } = { country: [], name: '' }
      if (typeof raw === 'string') {
        data = JSON.parse(raw)
      } else if (typeof raw === 'object') {
        data = raw as typeof data
      }
      return data.country[0]?.country_id ?? ''
    },
  },
  value: {
    config: {
      name: true,
    },
    type: 'request',
    info: 'fetch data from nationalize.io',
    read: {
      method: 'get',
      url: 'https://api.nationalize.io/',
      params: (api) => ({
        name: api.columns.name?.value,
      }),
    },
  },
  filters: {},
  config: {
    name: {
      label: 'Column for name',
      type: 'column',
      form: (api) => ({
        type: 'column',
        value: api.config.name,
      }),
    },
  },
}
export default column
