import dotenv from 'dotenv'
import { Hono } from 'hono'
import { db } from './db'
import { users } from './db/schema/users'

dotenv.config()

const app = new Hono()

app.get('/', async c => {
  const userList = await db.select().from(users)
  return c.json(userList)
})

export default {
  port: process.env.PORT || 4001,
  fetch: app.fetch,
}
