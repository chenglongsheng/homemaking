import APIConfig from "../config/api";
import exceptionMessage from "../config/exception-message";
import wxToPromise from "./wx";

class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await wxToPromise('request', {
            url: APIConfig.baseUrl + url,
            data,
            method
        })

        //全局统一异常处理
        //TODO 成功
        if (res.code === 200) {
            return res.data.data
        }
        //TODO 失败
        if (res.code === 401) {
            return
        }
        Http._showError(res.data.code, res.data.message)

    }

    static _showError(code, message) {
        console.log(code, message)
        let title = ''
        const errorMessage = exceptionMessage[code]
        title = errorMessage || message || '未知异常'

        title = typeof title === 'object' ? Object.values(title).join(';') : title
        wx.showToast({
            title, icon: "none", duration: 3000
        })
    }

}

export default Http