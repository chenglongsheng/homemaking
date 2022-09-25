Component({
    options: {
        // 开启多插槽
        multipleSlots: true
    },
    // 传参进来
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },
    data: {
        currentTabIndex: 0
    },
    methods: {
        // 传入一个数组，通知父组件或者正在使用组件的页面
        handleTabChange(e) {
            const index = e.currentTarget.dataset.index
            // 避免重复点击
            if (index === this.data.currentTabIndex) {
                return
            }
            this.setData({
                currentTabIndex: index
            })
            // 传数据出去
            this.triggerEvent('change', {index})
        },

        handleTouchMove(e) {
            console.log(e)
            const direction = e.direction
            const currentTabIndex = this.data.currentTabIndex
            const targetTabIndex = currentTabIndex + direction
            // 越界判断
            if (targetTabIndex < 0 || targetTabIndex > this.data.tabs.length - 1) {
                return
            }
            // 构建实参结构
            const customE = {
                currentTarget: {
                    dataset: {
                        index: targetTabIndex
                    }
                }
            }
            this.handleTabChange(customE)
        }
    }
});
