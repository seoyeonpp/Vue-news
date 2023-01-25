<template>
    <div>
        <UserProfile>
            <div slot="username">{{ fetchedUser.id }}</div>
            <template slot="time">{{ fetchedUser.created }}</template>
            <div slot="karma">{{ fetchedUser.karma }}</div>
        </UserProfile>
        <!-- <p>name : {{ fetchedUser.id }}</p>
        <p>karma : {{ fetchedUser.karma }}</p>
        <p>created : {{ fetchedUser.created }}</p> -->
    </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters(["fetchedUser"]),
    },

    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch("FETCH_USER", userName);
    },
};
</script>

<style></style>
