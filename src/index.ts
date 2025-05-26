import { Hono } from 'hono'
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";
import { users } from "./schema";

  type Bindings = {
  HYPERDRIVE: Hyperdrive;
}


const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const connection = await createConnection({
      host: c.env.HYPERDRIVE.host,
      user: c.env.HYPERDRIVE.user,
      password: c.env.HYPERDRIVE.password,
      database: c.env.HYPERDRIVE.database,
      port: c.env.HYPERDRIVE.port,
    disableEval: true,
  });
  const db = drizzle(connection);
  console.log(db);
  const allUsers = await db.select().from(users);

  return c.json(allUsers)
})

export default app
