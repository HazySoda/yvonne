import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgres://yvon:123456@127.0.0.1:5432/yvonne',
  },
})
