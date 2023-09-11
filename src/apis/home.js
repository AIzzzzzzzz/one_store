import httpInstance from "@/utils/http";

export function getbannerAPI(params = {}) {
    //默认为1
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot'
    })
}
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}