import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from "@/api/index.js";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((res) => {
                context.commit("SET_NEWS", res.data);
            })
            .catch((err) => console.log(err));
    },
    FETCH_ASK(context) {
        fetchAskList()
            .then((res) => {
                context.commit("SET_ASK", res.data);
            })
            .catch((err) => console.log(err));
    },
    // destructuring
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit("SET_JOBS", data);
            })
            .catch((err) => console.log(err));
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(({ data }) => {
                commit("SET_USER", data);
            })
            .catch((err) => console.log(err));
    },
    FETCH_ITEM({ commit }, itemid) {
        fetchItemInfo(itemid)
            .then(({ data }) => {
                commit("SET_ITEM", data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    },
};
