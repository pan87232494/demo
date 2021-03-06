import Koa from 'koa';
import json from 'koa-json'
import logger from 'koa-logger'
import path from 'path'
import serve from 'koa-static'
import koaRouter from 'koa-router'
import koaBodyparser from 'koa-bodyparser'
import api from './server/routes/api.js'

const app = new Koa()
const router = koaRouter()
let port = 8899

app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

// router.use('/api', jwt({secret: 'vue-koa-demo'}), api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。
router.use('/api', api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录

export default app.listen(port, () => {
  console.log(`Koa is listening in ${port}`)
})