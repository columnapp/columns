import { ColumnSchema } from '@columnapp/schema'

type Post = {
  id: number
  title: string
  body: string
  userId: number
} | null

const column: ColumnSchema = {
  name: 'Typicode to pull post ids',
  info: 'Test column for read/write request using jsonplaceholder.typicode.com, get post ids',
  primitive: (api) => api.cell.value.id,
  display: {
    info: 'display id',
    render: (api) => ({
      type: 'number',
      value: (api.cell.value as Post)?.id ?? '',
    }),
  },
  cell: {
    info: 'post/get requests to typicode.com to read/write the post title',
    form: {
      parse: (api, id) => {
        return { value: id }
      },
      render: (api) => ({
        type: 'number',
        value: api.cell.value?.id ?? '',
      }),
    },
    request: {
      list: {
        method: 'get',
        url: () => `https://jsonplaceholder.typicode.com/posts/`,
        validate: (api) => true,
        parse: (_api, raw: Array<Post>) => {
          return {
            values: {
              items: raw.map((r) => r?.id).filter(Boolean),
            },
          }
        },
      },
    },
  },
}
export default column
