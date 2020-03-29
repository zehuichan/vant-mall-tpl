import request from '@/utils/request'

export function getJssdk(data) {
  return request({
    url: '/api/do/get.php?action=getJssdk',
    method: 'get',
    params: data
  })
}
