import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "@/api/index.js";
import { fetchAskList } from "@/api/index.js";
import { fetchJobsList } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then((res) => {
                    context.commit("SET_NEWS", res.data);
                })
                .catch((err) => console.log(err));
        },
        FETCH_ASKS(context) {
            fetchAskList()
                .then((res) => {
                    context.commit("SET_ASKS", res.data);
                })
                .catch((err) => console.log(err));
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then((res) => {
                    context.commit("SET_JOBS", res.data);
                })
                .catch((err) => console.log(err));
        },
    },
});
