import Service from '../../model/service'
import Category from "../../model/category";

const service = new Service()
const category = new Category()

Page({
    data: {
        tabs: ['全部服务', '在提供', '正在找'],
        categoryList: [
            {id: 1, name: "清洁"},
            {id: 2, name: "汽修"},
            {id: 3, name: "控件"}
        ],
        serviceList: [
            {}
        ]
    },
    onLoad: function (options) {
        // this._getServiceList()
        // this._getCategoryList()
    },
    async _getServiceList() {
        await service.getServiceList(1, 10)
    },
    async _getCategoryList() {
        await category.getCategoryList()
    },
    handleTabChange(e) {
        console.log(e)
    },
    handleCategoryChange(e) {
        console.log(e)
        const id = e.currentTarget.dataset.id
    }
});