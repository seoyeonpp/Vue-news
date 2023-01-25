<template>
    <div>
        <p v-for="item in this.$store.state.news" :key="item">
            <a :href="item.url">{{ item.title }}</a>
            <small>
                {{ item.time_ago }} by
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
import bus from "@/utils/bus.js";
export default {
    created() {
        bus.$emit("start:spinner");
        this.$store.dispatch("FETCH_NEWS");
        bus.$emit("end:spinner");
    },
};
</script>

<style></style>
