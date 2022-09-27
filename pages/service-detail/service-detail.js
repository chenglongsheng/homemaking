import Service from "../../model/service";

Page({
    data: {
        service: null,
        serviceId: null
    },
    onLoad: function (options) {
        console.log(options)
        this.data.serviceId = options.service_id
        // this._getService()
    },

    async _getService() {
        const service = await Service.getServiceById(this.data.serviceId)
        this.setData({
            service
        })
    }

});