class ApiResult {
    /** 
     * @param {any} data
     * @param {"success"|"fail"|"error"} status
     * @param {string} message
     * */
    constructor(status, data = null, message = "") {
        this.status = status;
        this.data = data;
        this.message = message;
    }
}

module.exports = {
    ApiResult,
}