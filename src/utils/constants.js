let pathname = [];
let parsePath = window.location.pathname.match(
  /\/platform(?:\/((?:testing|gray)(?:\d{2})?))?/
);

pathname[0] = import.meta.env.VITE_APP_ENV_PATH || (parsePath && parsePath[0]);
pathname[1] = import.meta.env.VITE_APP_ENV_NAME || (parsePath && parsePath[1]);

// console.log('process.env.VITE_APP_ENV_PATH',import.meta.env);

if (!pathname[1]) {
  const ret = window.location.hostname.match(/gray|testing/);
  pathname[1] = (ret && ret[0]) || "prod";
}

const [prefixPath, envName] = pathname;



export {
  prefixPath,
  envName
}