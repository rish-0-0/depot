const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
};

const BASE_URL = 'https://damp-wave-21580.herokuapp.com/api';

const Fetch = async (method, URI, options, body = null) => {
	return new Promise((resolve, reject) => {
		try {
            let headers = DEFAULT_HEADERS;
            if (options.headers != undefined) {
                headers = { ...headers, ...options.headers };
            }
            let url = URI;
            if (URI[0] === '/') {
                url = `${BASE_URL}${URI}`;
            }
            const response = await fetch(url, {
                method,
                headers,
                body,
            });
            const result = await response.json();
            resolve(result);
		} catch (err) {
            console.log("Error ocurred in fetch: ", err);
            reject(err);
        };
	});
};

export const API = {
	post: (URI, body, options = {}) => {
		return Fetch("POST", URI, options, body);
	},
	put: (URI, body, options = {}) => {
		return Fetch("PUT", URI, options, body);
	},
	get: (URI, options = {}) => {
		return Fetch("GET", URI, options);
	},
};

const callFakeFetch = async (method, URI, options, body = {}) => {
	return new Promise((resolve, reject) => {
		// For now
		try {
			resolve(body);
		} catch (e) {
			console.log("Error in fake fetch: ", e);
			reject(e);
		}
	});
};

export const fakeAPI = {
	post: (URI, body, options = {}) => {
		return delay(callFakeFetch("POST", URI, options, body), 1000);
	},
	put: (URI, body, options = {}) => {
		return delay(callFakeFetch("PUT", URI, options, body), 1000);
	},
	get: (URI, options = {}) => {
		return delay(callFakeFetch("GET", URI, options), 1000);
	},
};

function delay(f, t) {
	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, f), t);
	});
}
