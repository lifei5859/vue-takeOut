import Mock from 'mockjs'
import shopsData from './shops'
import category from './index_category'

Mock.mock('./wocao/shops', {
  code: 0,
  codeMsg: '成功',
  data: shopsData
})
Mock.mock('./wocao1/shops', {
  code: 0,
  codeMsg: '成功',
  data: category
})
