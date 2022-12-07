const Date = require('any-date-parser')
import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Date',
  info: 'Date',
  config: {},
  parse: {
    info: 'Best case scenario parsing to date',
    logic: ($api, raw) => {
      switch (typeof raw) {
        case 'string':
          return Date.fromString(raw)
        default:
          return Date.fromAny(raw)
      }
    },
  },
  display: {
    info: 'local date',
    render: (api) => ({ type: 'string', value: api.cell.value == null ? null : api.cell.value.toLocaleDateString() }),
  },
  filters: {
    '=': {
      info: 'equal',
      type: 'date',
      form: (api, value) => ({ type: 'date', value }),
      logic: ($api, value) => ($api.cell.value == null ? false : $api.cell.value === value),
    },
    '<': {
      type: 'date',
      info: 'less than',
      form: (api, value) => ({ type: 'date', value }),
      logic: ($api, value) => ($api.cell.value == null ? false : $api.cell.value < value),
    },
    '<=': {
      type: 'date',
      info: 'less than equal to',
      form: (api, value) => ({ type: 'date', value }),
      logic: ($api, value) => ($api.cell.value == null ? false : $api.cell.value <= value),
    },
    '>': {
      type: 'date',
      info: 'greater than',
      form: (api, value) => ({ type: 'date', value }),
      logic: ($api, value) => ($api.cell.value == null ? false : $api.cell.value > value),
    },
    '>=': {
      type: 'date',
      info: 'greater than equal to',
      form: (api, value) => ({ type: 'date', value }),
      logic: ($api, value) => ($api.cell.value == null ? false : $api.cell.value >= value),
    },
  },
  value: {
    type: 'cell',
    info: 'date input',
    form: (api) => ({
      type: 'date',
      value: api.cell.value?.toISOString().split('T')[0],
    }),
  },
}
export default column
