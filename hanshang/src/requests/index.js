import axios from 'axios';
const server = axios.create({
    baseURL: 'https://api5.hanfugou.com'
})

// 获取首页轮播图列表
export const getCarousel_items = () => {
    return server.get('/Poster/GetPosterInfoListForCode?code=gou_banner&count=4')
}

export const getProductListPublicForHot = () => {
    return server.get('/Product/GetProductListPublicForHot?count=8')
}
export const getProductListPublicForDefault = () => {
    return server.get('/Product/GetProductListPublicForDefault?count=8')
}