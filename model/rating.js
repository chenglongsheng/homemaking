import Base from "./base";
import Http from "../utils/http";

class Rating extends Base {
    async getServiceRatingList(serviceId) {
        if (!this.hasMoreData) {
            return this.data
        }
        const ratingList = await Http.request({
            url: 'v1/rating/service',
            data: {
                page: this.page,
                size: this.size,
                service_id: serviceId
            }
        })
        // 每次下拉合并数据
        this.data = this.data.concat(ratingList.data)
        this.hasMoreData = !(this.page === ratingList.last_page)
        this.page++
        return this.data
    }
}

export default Rating