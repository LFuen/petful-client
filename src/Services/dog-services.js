import config from "../config";

const DogsService = {
  getDog() {
    return fetch(`${config.REACT_APP_API_BASE}/dogs`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteDog() {
    return fetch(`${config.REACT_APP_API_BASE}/dogs`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default DogsService;
