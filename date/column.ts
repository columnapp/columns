import dayjs from 'dayjs'
import { ColumnSchemaDate } from '@columnapp/schema'

const column: ColumnSchemaDate = {
  type: 'date',
  name: 'Date',
  info: 'date',
  config: {},
  parse: {
    info: 'basic dayjs based parsing',
    logic: ($api, raw) => dayjs(raw as any).toDate(),
  },
  display: {
    info: 'just as string',
    render: { type: 'string' },
  },
  filters: {
    '=': {
      info: 'equal',
      type: 'date',
      form: { type: 'date' },
      logic: ($api, value) => ($api.value == null ? false : $api.value === value),
    },
    '<': {
      type: 'date',
      info: 'less than',
      form: { type: 'date' },
      logic: ($api, value) => ($api.value == null ? false : $api.value < value),
    },
    '<=': {
      type: 'date',
      info: 'less than equal to',
      form: { type: 'date' },
      logic: ($api, value) => ($api.value == null ? false : $api.value <= value),
    },
    '>': {
      type: 'date',
      info: 'greater than',
      form: { type: 'date' },
      logic: ($api, value) => ($api.value == null ? false : $api.value > value),
    },
    '>=': {
      type: 'date',
      info: 'greater than equal to',
      form: { type: 'date' },
      logic: ($api, value) => ($api.value == null ? false : $api.value >= value),
    },
  },
  value: {
    type: 'cell',
    info: 'date input',
    form: {
      type: 'date',
    },
  },
}
export default column
