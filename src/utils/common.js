export function queryURLParams() {
  let url = location.href;
	let result = {},
		reg1 = /([^?=&#]+)=([^?=&#]+)/g,
		reg2 = /#([^?=&#]+)/g;
	url.replace(reg1, (n, x, y) => result[x] = y);
	url.replace(reg2, (n, x) => result['HASH'] = x);
	return result;
};
export const getToken = () => {
  const token = localStorage.getItem('self_token') || null;
  if (token) {
    return token
  } else {
    return null;
  }
};