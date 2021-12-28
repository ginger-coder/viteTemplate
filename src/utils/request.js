import axios, { isCancel } from "axios";
// import { ElMessage as Message } from 'element-plus';
import qs from "qs";
import { prefixPath as ENV_PATH } from "@/utils/constants";
import { getToken } from '@/utils/common';

import _ from 'lodash';

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限,重新登录",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

// axios default config
// axios默认设置 30s超时时间
axios.defaults.timeout = 30 * 1000;
axios.defaults.baseURL = ENV_PATH;
// axios请求添加token
axios.interceptors.request.use(
  (config) => {
    // if(config.url.indexOf('auth') < 0){
    //   const token = getToken();
    //   if (token) {
    //     config.headers["token"] = token;
    //   }
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// check http status
axios.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      if(response.data.code == 401 ){
        throw new Error('token失效');
      }
      if(response.data.code == 403){
        throw new Error('暂无权限访问');
      }
      return response.data;
    }
    const errorText = codeMessage[response.status] || response.statusText;
    const error = new Error(errorText);
    error.name = response.status;
    error.response = response;
    throw error;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// check server status
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function request(url, options = {}) {
  let cancel;
  const defaultOptions = {
    url,
    credentials: "include",
    method: "GET"
  };
  const newOptions = { ...defaultOptions, ...options };
  //  handle body request
  if (newOptions.body) {
    newOptions.data = qs.stringify(newOptions.body);
    delete newOptions.body;
  }
  // bodyJSON
  if (newOptions.bodyJSON) {
    newOptions.data = JSON.stringify(newOptions.bodyJSON);
    delete newOptions.bodyJSON;
  }
  return axios(newOptions).then(
    (data) => {
      return data;
    },
    (error) => {
      cancel = null;
      if (isCancel(error)) {
        console.log("Request canceled", error.message);
        return new Promise(() => { });
      } else {
        throw error;
      }
    }
  );
}
export { request as default };
