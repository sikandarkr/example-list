import axios from "axios";
var baseURL = "http://localhost:5000s"; //'https://api.zwopr.com/api/v1'; // */'https://zwopr-test.herokuapp.com/api/v1'; //prod :- https://zwopr-prod.herokuapp.com  //old:- 'https://zwopr.herokuapp.com/api/v1';
var api_key = "WeLBwoDvI72rHHhXsiT0";
class Api {
  static headers(headersparams) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": api_key,
      ...headersparams
    };
  }
  static get(route, key = null) {
    return this.request(route, null, "GET", key);
  }

  static put(route, params, key = null) {
    return this.request(route, params, "PUT", key);
  }

  static post(route, params, key) {
    // console.log("your route is .........", route);
    return this.request(route, params, "POST", key);
  }

  static delete(route, params, key = null) {
    return this.request(route, params, "DELETE", key);
  }
  static patch(route, params, key = null) {
    return this.request(route, params, "PATCH", key);
  }

  static request(route, params, verb, key) {
    if (!!route.match("https://")) {
      const url = `${route}`;
      const options = { method: verb, params };
      console.log(url, options);
      return axios(url, options);
    } else {
      const host = baseURL;
      const url = `${host}${route}`;
      const options = { method: verb, data: params };
      let keys = {
        ...key,
        Authorize: localStorage.getItem("Authorization")
      };
      options.headers = Api.headers(keys);
      console.log(url, options);
      return axios(url, options);
    }
  }
}
export default Api;
