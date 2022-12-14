import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Number',
  info: 'Number',
  display: {
    info: 'render number',
    render: (api) => ({
      type: 'number',
      value: api.cell.value,
    }),
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
    form: (api) => ({
      type: 'number',
      value: api.cell.value,
    }),
  },
  filters: {
    '=': {
      type: 'number',
      info: 'equal',
      form: (api, value) => ({ type: 'number', value }),
      logic: ($api, value) => $api.cell.value != null && $api.cell.value === value,
    },
    '<': {
      type: 'number',
      info: 'less than',
      form: (api, value) => ({ type: 'number', value }),
      logic: ($api, value) => $api.cell.value != null && $api.cell.value < value,
    },
    '<=': {
      type: 'number',
      info: 'less than equal to',
      form: (api, value) => ({ type: 'number', value }),
      logic: ($api, value) => $api.cell.value != null && $api.cell.value <= value,
    },
    '>': {
      type: 'number',
      info: 'greater than',
      form: (api, value) => ({ type: 'number', value }),
      logic: ($api, value) => $api.cell.value != null && $api.cell.value > value,
    },
    '>=': {
      type: 'number',
      info: 'greater than equal to',
      form: (api, value) => ({ type: 'number', value }),
      logic: ($api, value) => $api.cell.value != null && $api.cell.value >= value,
    },
  },
}
export default column
