import request from '@/utils/request'
export const getGoodDetail = (id) => {
  return request.get('/goods', {
    params: {
      id
    }
  })
}
export const getGoodsHot = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
}
