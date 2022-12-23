import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Text',
  info: 'text',
  primitive: (api) => api.cell.value?.toString(),
  display: {
    info: 'render text',
    render: (api) => ({
      type: 'text',
      value: api.cell.value,
    }),
  },
  cell: {
    info: 'input text',
    form: {
      parse: (_api, raw) => ({ value: raw == null ? null : String(raw) }),
      render: (api) => ({ type: 'text', value: api.cell.value }),
    },
  },
  filters: {
    contains: {
      type: 'string',
      info: 'Case Sensitive',
      form: (api, value) => ({
        type: 'text',
        value,
      }),
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value.toLocaleLowerCase().includes(keyword)
      },
    },
    '=': {
      type: 'string',
      info: 'equals',
      form: (api, value) => ({
        value,
        type: 'text',
      }),
      logic: ($api, keyword) => {
        return $api.cell.value != null && $api.cell.value == keyword
      },
    },
  },
}
export default column
