import Http from "../utils/http";

class Category{
    async getCategoryList() {
        return Http.request({
            url:'category/list'
        })
    }
}

export default Category