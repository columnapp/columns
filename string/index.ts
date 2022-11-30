import { ColumnSchemaString } from '@columnapp/schema'

const column: ColumnSchemaString = {
  type: 'string',
  name: 'Text',
  info: 'text',
  display: {
    info: 'render text',
    render: {
      type: 'text',
    },
  },
  parse: {
    info: 'converts everything to string',
    logic: (_api, raw) => (raw == null ? null : String(raw)),
  },
  value: {
    type: 'cell',
    info: 'input text',
    form: { type: 'text' },
  },
  filters: {
    contains: {
      type: 'string',
      info: 'Case Sensitive',
      form: {
        type: 'text',
      },
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value.toLocaleLowerCase().includes(keyword)
      },
    },
    '=': {
      type: 'string',
      info: 'equals',
      form: {
        type: 'text',
      },
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value == keyword
      },
    },
  },
}
export default column
