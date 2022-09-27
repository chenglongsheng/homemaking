/**
 * 模型的意义：分离调用与内部实现，实现功能解耦
 */
import Http from "../utils/http";
import Base from "./base";

class Service extends Base{

    /**
     * 实例对象是有状态的
     * 静态方法是类方法
     * 实例方法是对象方法
     */

    /**
     * 分页获取服务列表
     * @param category_id   分类id
     * @param type          服务类型
     */
    async getServiceList(category_id = null, type = null) {
        // 避免一直请求
        if (!this.hasMoreData) {
            return this.data
        }
        console.log("获取服务列表")
        const serviceList = await Http.request({
            url: 'v1/service/list',
            data: {
                page: this.page,
                size: this.size,
                category_id: category_id || '',
                type: type || ''
            }
        })
        // 每次下拉合并数据
        this.data = this.data.concat(serviceList.data)
        this.hasMoreData = !(this.page === serviceList.last_page)
        this.page++
        return this.data
    }

    /**
     * 根据id获取服务信息
     * @param serviceId
     * @returns {Promise<*|undefined>}
     */
    static getServiceById(serviceId) {
        return Http.request({
            url: `service/${serviceId}`
        })
    }

}

export default Service