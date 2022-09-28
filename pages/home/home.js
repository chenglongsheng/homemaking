import Service from '../../model/service'
import Category from "../../model/category";
import {throttle} from "../../utils/utils";

const service = new Service()
const category = new Category()

Page({
    data: {
        tabs: ['全部服务', '在提供', '正在找'],
        categoryList: [],
        serviceList: [],
        tabIndex: 0,
        categoryId: 0,
        loading: false
    },
    /**
     * 页面加载
     * @param options
     */
    onLoad: async function (options) {
        await this._getServiceList()
        await this._getCategoryList()
        this.setData({loading: false})
    },

    async _getServiceList() {
        const serviceList = await service.reset().getServiceList(this.data.categoryId, this.data.tabIndex)
        console.log(serviceList)
        this.setData({serviceList})
    },

    async _getCategoryList() {
        const categoryList = await Category.getCategoryListWithAll()
        this.setData({categoryList})
    },
    /**
     * 点击服务
     * @param e
     */
    handleSelectService(e) {
        console.log(e)
        const service = e.currentTarget.dataset.service
        wx.navigateTo({
            url: '/pages/service-detail/service-detail?service_id=' + service.id
        })
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