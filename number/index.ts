import { ColumnSchemaNumber } from '@columnapp/schema'

const column: ColumnSchemaNumber = {
  version: 'number.0.0.1',
  name: 'Number',
  info: 'Number',
  display: {
    info: 'render number',
    render: {
      type: 'number',
    },
  },
  parse: {
    info: 'parseFloat',
    logic: (_api, raw) => {
      if (typeof raw === 'number') {
        return raw
      } else if (typeof raw === 'string') {
        return parseFloat(raw)
      }
      return null
    },
  },
  value: {
    type: 'cell',
    info: 'just info form cell',
  },
  filters: {
    '=': {
      type: 'number',
      info: 'equal',
      form: { type: 'number' },
      logic: ($api, value) => ($api.value == null ? false : $api.value === value),
    },
    '<': {
      type: 'number',
      info: 'less than',
      form: { type: 'number' },
      logic: ($api, value) => ($api.value == null ? false : $api.value < value),
    },
    '<=': {
      type: 'number',
      info: 'less than equal to',
      form: { type: 'number' },
      logic: ($api, value) => ($api.value == null ? false : $api.value <= value),
    },
    '>': {
      type: 'number',
      info: 'greater than',
      form: { type: 'number' },
      logic: ($api, value) => ($api.value == null ? false : $api.value > value),
    },
    '>=': {
      type: 'number',
      info: 'greater than equal to',
      form: { type: 'number' },
      logic: ($api, value) => ($api.value == null ? false : $api.value >= value),
    },
  },
}
export default column
