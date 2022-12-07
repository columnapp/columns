import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Text',
  info: 'text',
  display: {
    info: 'render text',
    render: (api) => ({
      type: 'text',
      value: api.cell.value,
    }),
  },
  parse: {
    info: 'converts everything to string',
    logic: (_api, raw) => (raw == null ? null : String(raw)),
  },
  value: {
    type: 'cell',
    info: 'input text',
    form: (api) => ({ type: 'text', value: api.cell.value }),
  },
  filters: {
    contains: {
      type: 'string',
      info: 'Case Sensitive',
      form: (api) => ({
        type: 'text',
        value: api.cell.value,
      }),
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value.toLocaleLowerCase().includes(keyword)
      },
    },
    '=': {
      type: 'string',
      info: 'equals',
      form: (api) => ({
        value: api.cell.value,
        type: 'text',
      }),
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value == keyword
      },
    },
  },
}
export default column
