import { ColumnSchemaStrings } from '@columnapp/schema'

const column: ColumnSchemaStrings = {
  name: 'Multi Text',
  type: 'string[]',
  info: 'List of texts',
  parse: {
    info: 'split comma separaterd texts to list of texts',
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
    form: {
      type: 'text',
    },
  },
}

export default column
