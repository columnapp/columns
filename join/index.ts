import { ColumnSchema } from '@columnapp/schema'

const column: ColumnSchema = {
  name: 'Join Columns',
  info: 'Join up to 3 columns together as text',
  display: {
    info: 'render columns as text',
    config: {
      separator: true,
    },
    render: (api) => ({
      type: 'string',
      value: (api.cell.value ?? []).join(api.config.separator ?? ', '),
    }),
  },
  parse: {
    info: 'Combine columns into an array',
    logic: (api) => {
      return [api.columns.column1?.value, api.columns.column2?.value, api.columns.column3?.value].filter(Boolean)
    },
  },
  value: {
    type: 'cell',
    info: 'joins columns together with the given separator',
    form: (api) => ({
      type: 'string',
      value: (api.cell.value ?? []).join(api.config.separator ?? ', '),
    }),
  },
  filters: {},
  config: {
    column1: {
      label: 'Column 1',
      type: 'column',
      form: (api) => ({
        type: 'column',
        value: api.config.column1,
      }),
    },
    column2: {
      label: 'Column 2',
      type: 'column',
      form: (api) => ({
        type: 'column',
        value: api.config.column2,
      }),
    },
    column3: {
      label: 'Column 3',
      type: 'column',
      form: (api) => ({
        type: 'column',
        value: api.config.column3,
      }),
    },
    separator: {
      label: 'Separator',
      type: 'string',
      form: (api) => ({
        type: 'text',
        value: api.config.separator,
      }),
    },
  },
}
export default column
