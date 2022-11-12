import { ColumnSchema } from 'engine/column'

export const ColumnString: ColumnSchema = {
  version: 'string.0.0.0',
  info: 'Text',
  display: {
    info: 'render text',
    render: {
      type: 'text',
    },
  },
  parse: {
    info: 'basic string parsing',
    logic: (_api, raw) => (raw == null ? raw : String(raw)),
  },
  value: {
    type: 'cell',
    info: 'input text',
    form: { type: 'text' },
  },
  filters: {
    contains: {
      info: 'asdssa',
      type: 'string',
      label: 'Case Sensitive',
      form: {
        type: 'text',
      },
      logic: ($api, keyword) => {
        return $api.value == null ? false : $api.value.toLocaleLowerCase().includes(keyword)
      },
    },
  },
}
