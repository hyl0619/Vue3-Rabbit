import { ref } from 'vue'
import { defineStore } from 'pinia'
import { toLogin } from '@/api/user'
import { useCartStore } from './cartStore'
export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    const userInfo = ref({})
    const getUserInfo = async (data) => {
      const {
        data: { result }
      } = await toLogin(data)
      userInfo.value = result
      cartStore.combineCartList()
    }
    const exitLogin = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }
    return {
      userInfo,
      getUserInfo,
      exitLogin
    }
  },
  {
    persist: true
  }
)
