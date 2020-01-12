import express from 'express'
import { render } from './util'
import routes from '../Routes'
import {getStore} from '../store/index'
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy'


const app = express()

app.use(express.static('public')) // 只要发现express发现请求了一个静态文件，就去当前项目的根路径下的public目录中去找

app.use('/api', proxy('http://47.95.113.63/', {
  proxyReqPathResolver: function (req) {
   return '/ssr/api' + req.url
  }
}));

app.get('*', (req, res) => {

  const store = getStore(req)
  // 根据路由的路径，来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = []


  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })


  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const html = render(store, routes, req, context)

    if(context.action === 'REPLACE') {
      res.redirect(301, context.url)
    }else if(context.Not_FOUND) {
      res.status(404)
      res.send(html)
    }else{
      res.send(html)
    }
  })


  
})


const server = app.listen(3000, () => {
  
})