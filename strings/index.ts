import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Multi Text',
  info: 'List of texts',
  primitive: (api) => (api.cell.value ?? []).join('-'),

  display: {
    info: 'Comma separated text',
    render: (api) => ({
      type: 'string',
      value: Array.isArray(api.cell.value) ? api.cell.value?.join(',') : api.cell.value ?? '',
    }),
  },
  cell: {
    info: 'comma separated texts',
    form: {
      render: (api) => ({
        type: 'text',
        value: Array.isArray(api.cell.value) ? api.cell.value?.join(',') : api.cell.value ?? '',
      }),
      parse: (_, raw) => {
        switch (typeof raw) {
          case 'string':
            return { value: raw.split(',') }
        }
        if (Array.isArray(raw)) {
          return { value: raw }
        }
        return null
      },
    },
  },
}

export default column
