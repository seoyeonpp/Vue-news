<template>
    <div>
        <!-- 사용자 상세정보 -->
        <div class="user-container">
            <div><i class="fas fa-user"></i></div>
            <div class="user-description">
                <!-- <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link> -->
                <!-- <div>username : {{ fetchedUser.id }}</div> -->
                <slot name="username">
                    <!-- 상위컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                    <!-- time : {{ fetchedUser.created }} -->
                    <slot name="time">
                        <!-- 상위컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <slot name="karma">
                    <!-- 상위컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["fetchedUser"]),
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
