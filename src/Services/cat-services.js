import config from "../config";

const CatsService = {
  getCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default CatsService;
