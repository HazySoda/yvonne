import { Hono } from 'hono'
import { db } from './db'
import { users } from './db/schema/users'

const app = new Hono()

app.get('/', async c => {
  const userList = await db.select().from(users)
  return c.json(userList)
})

export default {
  port: 4001,
  fetch: app.fetch,
}
