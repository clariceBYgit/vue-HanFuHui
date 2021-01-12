import axios from 'axios';
const server = axios.create({
    baseURL: 'https://api5.hanfugou.com'
})

// 获取首页轮播图列表
export const getCarousel_items = () => {
    return server.get('https://api5.hanfugou.com/Poster/GetPosterInfoListForCode?code=gou_banner&count=4')
}