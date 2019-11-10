import Koa from 'koa'
import proxy from 'koa-proxy'

const app = new Koa()

app.use(proxy({
    host:  'http://www.baidu.com',
    jar: true
}))

app.listen(3000).on('error',console.log)