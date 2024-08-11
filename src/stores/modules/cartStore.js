import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useUserStore } from './user'
import { insertCart, deleteCart, getCartList, combineCart } from '@/api/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const cartList = ref([])
    const getCart = async () => {
      const res = await getCartList()
      cartList.value = res.data.result
      console.log(res)
    }
    const combineCartList = async () => {
      if (cartList.value) {
        await combineCart(cartList.value)
        getCart()
      }
    }
    const addCart = async (goods) => {
      if (userStore.userInfo.token) {
        await insertCart(goods)
        getCart()
      } else {
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
          item.count += goods.count
        } else {
          cartList.value.push(goods)
        }
      }
    }
    const allCount = computed(() =>
      cartList.value.reduce((sum, item) => sum + item.count, 0)
    )
    const allPrice = computed(() =>
      cartList.value.reduce((sum, item) => sum + item.price * item.count, 0)
    )
    const delCart = async (id) => {
      if (userStore.userInfo.token) {
        await deleteCart([id])
        getCart()
      } else {
        const index = cartList.value.findIndex((item) => item.skuId === id)
        cartList.value.splice(index, 1)
      }
    }
    const singleCheck = (skuId, flag) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = flag
    }
    const allCheck = (flag) => {
      cartList.value.forEach((item) => {
        item.selected = flag
      })
    }
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    const checkList = computed(() =>
      cartList.value.filter((item) => item.selected)
    )
    const checkCount = computed(() =>
      checkList.value.reduce((sum, item) => sum + item.count, 0)
    )
    const checkPrice = computed(() =>
      checkList.value.reduce((sum, item) => sum + item.price * item.count, 0)
    )
    const clearCart = () => {
      cartList.value = []
    }
    return {
      cartList,
      addCart,
      allCount,
      allPrice,
      delCart,
      singleCheck,
      allCheck,
      isAll,
      checkCount,
      checkPrice,
      clearCart,
      combineCartList,
      checkList
    }
  },
  {
    persist: true
  }
)
