import { request } from '../network/request'

export function getHomeData(type, page) {
    return request({
        url: 'home/data',
        params: {
            type,
            page
        }
    })
}

export function getHomeMultidata() {
    return request({
        url: 'home/multidata'
    })
}