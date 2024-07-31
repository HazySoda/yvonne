import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const queryClient = postgres('postgres://yvon:123456@127.0.0.1:5432/yvonne')

export const db = drizzle(queryClient)
