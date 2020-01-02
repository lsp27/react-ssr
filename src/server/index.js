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
      promises.push(item.route.loadData(store))
    }
  })


  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })


  
})


const server = app.listen(3000, () => {
  
})