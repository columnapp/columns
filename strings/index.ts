import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Multi Text',
  info: 'List of texts',
  parse: {
    info: 'split comma separated texts to list of texts',
    logic(_, raw) {
      switch (typeof raw) {
        case 'string':
          return raw.split(',')
      }
      if (Array.isArray(raw)) {
        return raw
      }
    },
  },
  display: {
    info: 'Comma separated text',
    render: (api) => ({
      type: 'string',
      value: api.cell.value?.join(', '),
    }),
  },
  value: {
    info: 'comma separated texts',
    type: 'cell',
    form: (api) => ({
      type: 'text',
      value: api.cell.value?.join(','),
    }),
  },
}

export default column
