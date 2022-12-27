import { ColumnSchema } from '@columnapp/schema'

type Post = {
  id: number
  title: string
  body: string
  userId: number
} | null
const column: ColumnSchema = {
  name: 'Typicode for Post Title',
  info: 'Test column for read/write request using jsonplaceholder.typicode.com, read/write just the title',
  primitive: (api) => api.cell.value,
  display: {
    info: 'display title',
    render: (api) => ({
      type: 'text',
      value: (api.cell.value as Post)?.title ?? '',
    }),
  },
  config: {
    id: {
      info: 'post id',
      label: 'Post Id',
      type: 'column',
      form(api) {
        return {
          type: 'column',
          value: api.config.id,
        }
      },
    },
  },
  cell: {
    info: 'post/get requests to typicode.com to read/write the post title',
    form: {
      parse: (api, title) => {
        const post: Post = api.cell.value ?? {
          title,
          body: '',
          userId: 1,
        }
        return { value: post }
      },
      render: (api) => ({
        type: 'text',
        value: api.cell.value?.title ?? '',
      }),
    },
    request: {
      read: {
        method: 'get',
        url: (api) => `https://jsonplaceholder.typicode.com/posts/${api.columns?.id?.value}`,
        validate: (api) => api.columns?.id?.value != null,
        parse: (_api, raw) => {
          return { value: raw }
        },
      },
      write: {
        method: 'patch',
        url: (api) => `https://jsonplaceholder.typicode.com/posts/${api.columns?.id?.value}`,
        validate: (api) => api.columns?.id?.value != null,
        body: (api) => JSON.stringify({ title: api.cell.value.title }),
        parse: (_api, raw) => {
          return { value: raw }
        },
      },
    },
  },
}
export default column
