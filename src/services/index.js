import createService from "./serviceFactory";
import api from "./api";
let services = {};

Object.keys(api).forEach(name => {
  const args = Array.isArray(api[name])? api[name]: [api[name]];
  const func = createService(...args);
  services[name] = func;
});
services = {
  ...services,
}

export default services;