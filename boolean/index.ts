import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'True/False',
  info: 'Standard Checkbox',
  primitive: (api) => api.cell.value,
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
  cell: {
    info: 'basic boolean',
    form: {
      parse: (_, raw) => ({ value: Boolean(raw) }),
      render: (api) => ({ type: 'checkbox', value: api.cell.value }),
    },
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
