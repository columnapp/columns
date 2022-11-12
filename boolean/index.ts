import { ColumnSchemaBoolean } from '@columnapp/schema'

export default {
  name: 'True/False',
  version: 'boolean.0.0.1',
  info: 'Standard Checkbox',
  filters: {
    is: {
      info: 'is true/false',
      type: 'boolean',
      form: {
        type: 'checkbox',
      },
      logic: ($api, value) => $api.value === value,
    },
  },
  parse: {
    info: 'basic boolean',
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
} as ColumnSchemaBoolean
