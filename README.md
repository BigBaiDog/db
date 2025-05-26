```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```


npx wrangler hyperdrive create hyperdrive-config --connection-string=`mysql://freedb_yuan01:Mjva%QZ!JR$5sEJ@sql.freedb.tech:3306/freedb_freedbmysql01`

npx wrangler hyperdrive create test --connection-string="mysql://freedb_yuan01:Mjva%QZ!JR$5sEJ@sql.freedb.tech:3306/freedb_freedbmysql01"