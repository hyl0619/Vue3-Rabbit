import { ref, onMounted } from 'vue'
import { getBanner } from '@/api/layout'

export function useBanner() {
  const bannerList = ref([])

  const getBannerList = async () => {
    const res = await getBanner({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.data.result
  }

  onMounted(() => getBannerList())

  return {
    bannerList
  }
}
