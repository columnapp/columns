import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'True/False',
  info: 'Standard Checkbox',
  filters: {
    is: {
      info: 'is true/false',
      type: 'boolean',
      form: (api, value) => ({
        type: 'checkbox',
        value,
      }),
      logic: ($api, value) => $api.cell.value === value,
    },
  },
  parse: {
    info: 'Converts anything to true/false, anything empty or zeroes would be false, everything else is true',
    logic: ($api, raw) => Boolean(raw),
  },
  value: {
    info: 'basic boolean',
    type: 'cell',
    form: (api) => ({ type: 'checkbox', value: api.cell.value }),
  },
  display: {
    info: 'shows as checkbox',
    render: (api) => ({
      type: 'checkbox',
      value: api.cell.value,
    }),
  },
}
export default column
