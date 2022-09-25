Page({
    data: {
        tabs: ['全部服务', '在提供', '正在找'],
        categoryList: [
            {id: 1, name: "清洁"},
            {id: 2, name: "汽修"},
            {id: 3, name: "控件"}
        ]
    },
    onLoad: function (options) {

    },
    handleTabChange(e) {
        console.log(e)
    },
    handleCategoryChange(e) {
        console.log(e)
        const id = e.currentTarget.dataset.id
    }
});