import { Hono } from 'hono'
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";
import { users } from "./schema";

const app = new Hono()

app.get('/', async (c) => {
  const connection = await createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_yuan01',
    password: 'Mjva%QZ!JR$5sEJ',
    database: 'freedb_freedbmysql01',
    port: 3306,

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
