import request from '@/utils/request'

export function queryFeatured(data) {
  return request({
    url: "material/query_featured",
    method: 'POST',
    data:data
  })

}


export function query(data) {
  return request({
    url: "material/query",
    method: 'POST',
    data
  })

}
