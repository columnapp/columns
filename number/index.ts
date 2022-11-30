import { ColumnSchemaNumber } from '@columnapp/schema'

const column: ColumnSchemaNumber = {
  type: 'number',
  name: 'Number',
  info: 'Number',
  display: {
    info: 'render number',
    render: {
      type: 'number',
    },
  },
  parse: {
    info: 'convert to number',
    logic: (_api, raw) => {
      if (typeof raw === 'number') {
        return raw
      } else if (typeof raw === 'string') {
        const result = Number(raw)
        return isNaN(result) ? null : result
      }
      return null
    },
  },
  value: {
    type: 'cell',
    info: 'just info form cell',
    form: {
      type: 'number',
    },
  },
  filters: {
    '=': {
      type: 'number',
      info: 'equal',
      form: { type: 'number' },
      logic: ($api, value) => $api.cell.value != null && $api.cell.value === value,
    },
    '<': {
      type: 'number',
      info: 'less than',
      form: { type: 'number' },
      logic: ($api, value) => $api.cell.value != null && $api.cell.value < value,
    },
    '<=': {
      type: 'number',
      info: 'less than equal to',
      form: { type: 'number' },
      logic: ($api, value) => $api.cell.value != null && $api.cell.value <= value,
    },
    '>': {
      type: 'number',
      info: 'greater than',
      form: { type: 'number' },
      logic: ($api, value) => $api.cell.value != null && $api.cell.value > value,
    },
    '>=': {
      type: 'number',
      info: 'greater than equal to',
      form: { type: 'number' },
      logic: ($api, value) => $api.cell.value != null && $api.cell.value >= value,
    },
  },
}
export default column
