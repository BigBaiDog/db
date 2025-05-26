import { Hono } from 'hono'
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";
import { users } from "./schema";


export interface Env {
  HYPERDRIVE: Hyperdrive;
  }
const app = new Hono()

app.get('/', async (c) => {
  const connection = await createConnection({
      host: env.HYPERDRIVE.host,
      user: env.HYPERDRIVE.user,
      password: env.HYPERDRIVE.password,
      database: env.HYPERDRIVE.database,
      port: env.HYPERDRIVE.port,

    // Required to enable mysql2 compatibility for Workers
    disableEval: true,
  });
  // Create the Drizzle client with the mysql2 driver connection
  const db = drizzle(connection);

  // Sample query to get all users
  const allUsers = await db.select().from(users);

  return c.json(allUsers)
})

export default app
