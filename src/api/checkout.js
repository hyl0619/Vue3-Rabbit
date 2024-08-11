import request from '@/utils/request'
export const getCheckOut = () => {
  return request.get('/member/order/pre')
}
export const createOrder = (data) => {
  return request.post('/member/order', data)
}
