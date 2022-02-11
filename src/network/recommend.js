import request from "./request"

export function getRecommendBanners() {
  return request({
    url: "/banner"
  })
}