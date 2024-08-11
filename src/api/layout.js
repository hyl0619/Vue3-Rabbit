import request from '@/utils/request'
export const getCategoryHeader = () => {
  return request.get('/home/category/head')
}
export const getBanner = (params = {}) => {
  const { distributionSite = '1' } = params
  return request.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}
export const getNew = () => {
  return request.get('/home/new')
}
export const getHot = () => {
  return request.get('/home/hot')
}
export const getProduct = () => {
  return request.get('/home/goods')
}
