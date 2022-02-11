import * as actionTypes from "./constant"

import { getRecommendBanners } from "@/network/recommend"

const changeRecommendBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getRecommendBannersAction = () => {
  return dispatch => {
    getRecommendBanners().then(res => {
      dispatch(changeRecommendBannersAction(res))
    })
  }
}