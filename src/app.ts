import Koa from 'koa'
import proxy from 'koa-proxy'
import router from './routers/index'

const app = new Koa()
const port = 3000

app.use(proxy({
    jar: true,
    match: /\/api/,
    host:  'http://192.168.3.177:8089',
    map: function (path) { return path.replace(/\/api/, '') }
}))

app.use(proxy({
    jar: true,
    match: /\/jia/,
    host:  'http://192.168.3.129:8089',
    map: function (path) { return path.replace(/\/jia/, '') }
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
    console.log('\nApp running at:\n- Local:\x1B[96m%s\x1B[0m', ` http://localhost:${port}\n`)
}).on('error',console.log)

