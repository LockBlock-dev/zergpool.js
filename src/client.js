const axios = require('axios').default
const errors = require('./errors')
const pkg = require("../package.json")

exports.Client = class Client {
    constructor() {
        /**
        * The base API Url
        * @type {String}
        */
        this.baseApiUrl = "http://api.zergpool.com:8080/api"
    }

    /**
    * Build url to the API
    * @param  {String} path API endpoint
    * @return {String} url
    * @private
    */
    #buildURL(path) {
      return `${this.baseApiUrl}/${path}`
    }

    /**
    * Make request against the API
    * @param  {String} method request method
    * @param  {String} path API endpoint
    * @param  {Object} [options] request options
    * @return {Promise} promise
    * @private
    */
    #request(path, data) {

      var options = {
        method: "GET",
        url: this.#buildURL(path),
        headers: {
          "User-Agent": `Zergpool.js ${pkg.version} (https://github.com/LockBlock-dev/zergpool.js)`,                  
          "Content-Type": "application/json",
          "Accept-Encoding": "UTF8",
        }
      }

      data ? options.data = data : null

      return axios(options)
      .then(response => {
        if (typeof(response.data) === "object") {
          return response.data
        } else {
          try {
            const data = JSON.parse(response.data)
            if (data.ok) {
              return data.result
            }
          } catch (err) {
            throw new errors.ParseError(`Error parsing response: ${response.data}`, response)
          }
        }
      })
      .catch(error => {
        if (!error.data) {
          return {err_code:"RATE_LIMITED", message:"you are rate limited"}
        } else {
          throw new errors.APIError(error, error.response.status, options.method, options.url)
        }
      })
    }

    /**
    * Get the pool status.
    * @example status()
    * @return {Promise}
    */
    status() {
      return this.#request("status")
    }

    /**
    * Get all pool currencies.
    * @example currencies()
    * @return {Promise}
    */
    currencies() {
      return this.#request("currencies")
    }

    /**
    * Get all pool miners.
    * @example miners()
    * @return {Promise}
    */
    miners() {
      return this.#request("miners")
    }

    /**
    * Get a wallet stats.
    * @param  {String} address - wallet address
    * @example wallet("DBvdqxQ7WSrDtQ32sfrDJ8YnwxWTFLb3kf")
    * @return {Promise}
    */
    wallet(address) {
      return this.#request(`wallet?address=${address}`)
    }

    /**
    * Get a wallet detailed stats.
    * @param  {String} address - wallet address
    * @example walletEx("DBvdqxQ7WSrDtQ32sfrDJ8YnwxWTFLb3kf")
    * @return {Promise}
    */
    walletEx(address) {
      return this.#request(`walletEx?address=${address}`)
    }

    /**
    * Get pool blocks | Get pool blocks for a coin.
    * @param  {String} coin - coin code
    * @example blocks()
    * @example blocks("DOGE")
    * @return {Promise}
    */
    blocks(coin) {
      var path = ""
      coin ? path = `blocks?coin=${coin}` : path = "blocks"
      return this.#request(path)
    }

}
