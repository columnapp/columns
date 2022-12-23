const DateParser = require('any-date-parser')
import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Date',
  info: 'Date',
  config: {},
  primitive: (api) => (api.cell.value instanceof Date ? api.cell.value?.getUTCSeconds() : null),
  display: {
    info: 'local date',
    render: (api) => ({
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
  cell: {
    info: 'date input',
    form: {
      parse: ($api, raw) => {
        switch (typeof raw) {
          case 'string':
            return { value: DateParser.fromString(raw) }
          default:
            return { value: DateParser.fromAny(raw) }
        }
      },
      render: (api, value) => {
        return {
          type: 'date',
          value: api.cell.value instanceof Date ? value?.toISOString().split('T')[0] : null,
        }
      },
    },
  },
}
export default column
