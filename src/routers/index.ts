import Router from 'koa-router'
import send from 'koa-send'
import path from 'path'
const router = new Router()

const publicDir = path.join(__dirname, '../public')

router.get(/^\/$/, async (ctx) => {
  console.log('path1', ctx.path)
  await send(ctx, ctx.path, { root: publicDir, index: 'index.html' })
})

router.get(/\/[^.]+.[^.]/, async (ctx) => {
  console.log('path2', ctx.path)
  await send(ctx, ctx.path, { root: publicDir })
})

export default router
