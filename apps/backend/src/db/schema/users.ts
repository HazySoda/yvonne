import { index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  users => {
    return {
      userIdIndex: index('id_idx').on(users.id),
    }
  },
)
