import { ColumnSchema } from '@columnapp/schema'

/*
  {"country":[{"country_id":"ID","probability":0.938},{"country_id":"MY","probability":0.013},{"country_id":"SQ","probability":0.009},{"country_id":"QA","probability":0.004},{"country_id":"JP","probability":0.004}],"name":"Wahyu"}
*/
type Value = { country: Array<{ country_id: string; probability: number }>; name: string } | null

const column: ColumnSchema = {
  name: 'Nationalize',
  info: 'Guess the nationality of a name',
  primitive: (api) => (api.cell.value as Value)?.country[0]?.country_id ?? null,
  display: {
    info: 'render text',
    render: (api) => ({
      type: 'string',
      value: (api.cell.value as Value)?.country?.[0]?.country_id ?? '',
    }),
  },
  expose: {
    countryCode: {
      label: 'Country Code',
      info: 'most probable country this name is from',
      returns: (api) => (api.cell.value as Value)?.country?.[0]?.country_id ?? null,
    },
    countryProbability: {
      label: 'Country Probability',
      info: 'how probable is the countryCode, value is from 0 to 1',
      returns: (api) => (api.cell.value as Value)?.country?.[0]?.probability ?? null,
    },
  },

  cell: {
    info: 'fetch data from nationalize.io',
    request: {
      read: {
        validate: (api) => api.columns.name?.value != null,
        method: 'get',
        url: 'https://api.nationalize.io/',
        query: (api) => ({
          name: api.columns.name?.value,
        }),
        parse: (_api, raw) => {
          return { value: raw }
        },
      },
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
