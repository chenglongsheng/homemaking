/**
 * 模型的意义：分离调用与内部实现，实现功能解耦
 */
import Http from "../utils/http";

class Service {
    /**
     * 分页获取服务列表
     * @param page          页码
     * @param size          每页数量
     * @param category_id   分类id
     * @param type          服务类型
     */
    async getServiceList(page, size, category_id = null, type = null) {
        console.log("获取服务列表")
        return Http.request({
            url: 'v1/service/list',
            data: {
                page,
                size
            }
        })
    }
}

export default Service