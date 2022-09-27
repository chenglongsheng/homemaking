class Base {
    page = 1
    size = 4
    data = []
    hasMoreData = true

    /**
     * 重置成员变量
     * @returns {Service}
     */
    reset() {
        this.page = 1
        this.size = 4
        this.data = []
        this.hasMoreData = true
        return this
    }
}

export default Base