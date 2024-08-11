import request from '@/utils/request'
export const getLike = ({ limit = 4 }) => {
  return request.get('/goods/relevant', { params: { limit } })
}
export const getMyOrder = (params) => {
  return request.get('/member/order', { params })
}
