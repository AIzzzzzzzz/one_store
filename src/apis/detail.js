import requset from '@/utils/http'

export const getDetail = (id) => {
    return requset({
        url: '/goods',
        params: {
            id
        }
    })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return requset({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}