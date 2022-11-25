import { ColumnSchemaString } from '@columnapp/schema'

export default {
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
    logic: (_api, raw) => (raw == null ? raw : String(raw)),
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
        return $api.value == null ? false : $api.value.toLocaleLowerCase().includes(keyword)
      },
    },
    '=': {
      type: 'string',
      info: 'equals',
      form: {
        type: 'text',
      },
      logic: ($api, keyword) => {
        return $api.value == null ? false : $api.value == keyword
      },
    },
  },
} as ColumnSchemaString
