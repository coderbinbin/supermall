import { request } from '../network/request'

export function getHomeData() {
    return request({
        url: 'home/data',
        params: {
            type: "pop",
            page: 5
        }
    })
}

export function getHomeMultidata() {
    return request({
        url: 'home/multidata'
    })
}