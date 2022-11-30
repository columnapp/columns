import { ColumnSchemaBoolean } from '@columnapp/schema'

const column: ColumnSchemaBoolean = {
  name: 'True/False',
  type: 'boolean',
  info: 'Standard Checkbox',
  filters: {
    is: {
      info: 'is true/false',
      type: 'boolean',
      form: {
        type: 'checkbox',
      },
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
    form: { type: 'checkbox' },
  },
  display: {
    info: 'shows as checkbox',
    render: {
      type: 'checkbox',
    },
  },
}
export default column
