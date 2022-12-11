const DateParser = require('any-date-parser')
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
          return DateParser.fromString(raw)
        default:
          return DateParser.fromAny(raw)
      }
    },
  },
  display: {
    info: 'local date',
    render: (api, value) => ({
      type: 'string',
      value: api.cell.value instanceof Date ? api.cell.value.toLocaleDateString() : null,
    }),
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
    form: (api, value) => ({
      type: 'date',
      value: value?.toISOString().split('T')[0],
    }),
  },
}
export default column
