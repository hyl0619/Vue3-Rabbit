import request from '@/utils/request'
export const getTopCategoryAPI = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}
export const getCategoryFilterAPI = (id) => {
  return request.get('/category/sub/filter', {
    params: {
      id
    }
  })
}
export const getSubCategory = (data) => {
  return request.post('/category/goods/temporary', data)
}
