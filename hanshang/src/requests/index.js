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

// 根据pid获取单个商品的信息
export const getProductByPid = (pid) =>{
    return server.get(`/System/GetTowCodeForObject?objecttype=product&objectid=${pid}`)
}

// 获取当前页面的推荐商品数据
export const getRecommendedProduct = (pid) =>{
    return server.get(`/Product/GetProductListPublicForRelevant?ids=${pid}&count=15`)
}

// 根据pid获取单个商品的评论信息
export const getProductCommentByPid = (pid) =>{
    return server.get(`/ProductComment/GetProductCommentList?role=6&productid=${pid}`)
}
