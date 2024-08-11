import request from '@/utils/request'

export const insertCart = ({ skuId, count }) => {
  return request.post('/member/cart', {
    skuId,
    count
  })
}
export const deleteCart = (ids) => {
  return request({
    url: '/member/cart',
    method: 'delete',
    data: { ids }
  })
}
export const getCartList = () => {
  return request.get('/member/cart')
}
export const combineCart = (goods) => {
  return request.post('/member/cart/merge', goods)
}
