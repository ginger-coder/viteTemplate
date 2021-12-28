import request from "@/utils/request";

/**
 * @description: 请求生成工厂函数
 * @param {String}  请求URL
 * @param {String}  请求方式 默认为GET 支持所有axios 中的请求方式
 * @param {String}  请求发送体, POST请求可以设置为body, 默认为 header
 * @return: request函数
 */
export default function createService (url, method="GET", params="data"){
    if(method.toUpperCase() === "GET"){
        params = "params"
    }
    return async function (args) {
        return request(url, {
            method,
            [params]: args
        });
    }
}