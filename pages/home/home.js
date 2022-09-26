import Service from '../../model/service'
import Category from "../../model/category";
import {throttle} from "../../utils/utils";

const service = new Service()
const category = new Category()

Page({
    data: {
        tabs: ['全部服务', '在提供', '正在找'],
        categoryList: [
            {id: 1, name: "清洁"},
            {id: 2, name: "汽修"},
            {id: 3, name: "控件"},
            {id: 6, name: "护理"}
        ],
        serviceList: [
            {
                category: {
                    id: 6, name: "护理"
                },
                cover_image: {
                    id: 24, path: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/image-20210829230656830.png"
                },
                create_time: "2022-09-25 14:02:03",
                description: "家中有100岁男性老人XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                designated_place: 0,
                id: 19,
                price: "12000.0",
                publisher: {
                    id: 1,
                    nickname: "龙哥",
                    avatar: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/boy.jpg",
                    real_name: "xinmo",
                    gender: 1
                },
                sales_volume: 0,
                score: "5",
                title: "北京路找一名保安",
                type: 2
            },
            {
                category: {
                    id: 6, name: "护理"
                },
                cover_image: {
                    id: 24, path: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/image-20210829230656830.png"
                },
                create_time: "2022-09-25 14:02:03",
                description: "家中有100岁男性老人XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                designated_place: 0,
                id: 19,
                price: "12000.0",
                publisher: {
                    id: 1,
                    nickname: "XXX",
                    avatar: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/boy.jpg",
                    real_name: "xinmo",
                    gender: 1
                },
                sales_volume: 0,
                score: "0",
                title: "北京路找一名保安",
                type: 2
            },
            {
                category: {
                    id: 6, name: "护理"
                },
                cover_image: {
                    id: 24, path: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/image-20210829230656830.png"
                },
                create_time: "2022-09-25 14:02:03",
                description: "家中有100岁男性老人XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                designated_place: 0,
                id: 19,
                price: "12000.0",
                publisher: {
                    id: 1,
                    nickname: "XXX",
                    avatar: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/boy.jpg",
                    real_name: "xinmo",
                    gender: 1
                },
                sales_volume: 0,
                score: "0",
                title: "北京路找一名保安",
                type: 2
            },
            {
                category: {
                    id: 6, name: "护理"
                },
                cover_image: {
                    id: 24, path: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/image-20210829230656830.png"
                },
                create_time: "2022-09-25 14:02:03",
                description: "家中有100岁男性老人XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                designated_place: 0,
                id: 19,
                price: "12000.0",
                publisher: {
                    id: 1,
                    nickname: "XXX",
                    avatar: "https://note-1010.oss-cn-beijing.aliyuncs.com/img/boy.jpg",
                    real_name: "xinmo",
                    gender: 1
                },
                sales_volume: 0,
                score: "0",
                title: "北京路找一名保安",
                type: 2
            }
        ],
        tabIndex: 0,
        categoryId: 0
    },
    /**
     * 页面加载
     * @param options
     */
    onLoad: function (options) {
        // this._getServiceList()
        // this._getCategoryList()
    },

    async _getServiceList() {
        const serviceList = await service.reset().getServiceList(this.data.categoryId, this.data.tabIndex)
        this.setData({serviceList})
    },

    async _getCategoryList() {
        const categoryList = await category.getCategoryList()
        this.setData({categoryList})
    },
    /**
     * 切换tab【全部服务，在提供，正在找】
     * @param e 事件
     */
    handleTabChange(e) {
        console.log(e)
        this.data.tabIndex = e.detail.index
        this._getServiceList()
    },
    /**
     * 点击分类
     * @param e 事件
     */
    handleCategoryChange: throttle(function (e) {
        if (this.data.categoryId === e.currentTarget.dataset.id) {
            return
        }
        console.log(e)
        this.data.categoryId = e.currentTarget.dataset.id
        this._getCategoryList()
    }),
    /**
     * 下拉刷新
     */
    async onPullDownRefresh() {
        console.log("下拉刷新")
        await this._getServiceList()
        wx.stopPullDownRefresh()
    },
    /**
     * 上拉触底
     */
    async onReachBottom() {
        console.log("上拉触底")
        if (!service.hasMoreData) {
            return
        }
        const serviceList = await service.getServiceList()
        this.setData({serviceList})
    },
});