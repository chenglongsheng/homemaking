import Service from "../../model/service";
import User from "../../model/user";
import Rating from "../../model/rating";

const rating = new Rating();

Page({
    data: {
        service: {
            id: 10,
            type: 2,
            designated_place: 0,
            title: '北京招工',
            description: "adasdasafiuasdhfasufh",
            price: '123.00',
            begin_date: "2021-04-29",
            score: 0,
            status: 2,
            sales_volume: 0,
            create_time: '2021-04-29 20:45:23'
        },
        serviceId: null,
        isPublisher: true,
        ratingList: []
    },
    onLoad: async function (options) {
        console.log(options)
        this.data.serviceId = options.service_id
        // await this._getService()
        // await this._getServiceRatingList()
        this._checkRole()
    },

    async _getService() {
        const service = await Service.getServiceById(this.data.serviceId)
        this.setData({
            service
        })
    },

    _checkRole() {
        const userinfo = User.getUserInfoByLocal()
        if (userinfo && userinfo.id === this.data.service.publisher.id) {
            this.setData({
                isPublisher: true
            })
        }
    },

    async _getServiceRatingList() {
        const ratingList = await rating.getServiceRatingList(this.data.serviceId);
        this.setData({
            ratingList
        })
    }
});