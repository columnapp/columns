import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Number',
  info: 'Number',
  primitive: (api) => api.cell.value,
  display: {
    info: 'render number',
    render: (api) => ({
      type: 'number',
      value: api.cell.value,
    }),
  },
  cell: {
    info: 'just info form cell',
    form: {
      render: (api) => ({
        type: 'number',
        value: api.cell.value,
      }),
      parse: (_api, raw) => {
        if (typeof raw === 'number') {
          return { value: raw }
        } else if (typeof raw === 'string') {
          const result = Number(raw)
          return { value: isNaN(result) ? null : result }
        }
        return { value: null }
      },
    },
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
