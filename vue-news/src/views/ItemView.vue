<template>
    <div>
        <section>
            <!-- 질문 상세정보 -->
            <!-- <div class="user-container">
                <div><i class="fas fa-user"></i></div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                    <div class="time">{{ fetchedItem.time_ago }}</div>
                </div>
            </div> -->
            <UserProfile>
                <div slot="username">
                    <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                </div>
                <template slot="time">{{ fetchedItem.time_ago }}</template>
            </UserProfile>
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>
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
        ...mapGetters(["fetchedItem"]),
    },
    created() {
        const itemId = this.$route.params.id;

        this.$store.dispatch("FETCH_ITEM", itemId);
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.time {
    font-size: 0.7rem;
}
</style>
