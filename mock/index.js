import Mock from 'mockjs'

Mock.mock('/list/news', 'get', {
  code:1,
  data: [
    {
      id: 12, title: '我是十二'
    },
    {
      id: 13, title: '我是十三'
    },
    {
      id: 14, title: '我是十四'
    },
    {
      id: 15, title: '我是十五'
    }
  ]
})