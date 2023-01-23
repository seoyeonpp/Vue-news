<template>
    <div>
        <div v-for="ask in this.$store.state.asks" :key="ask">{{ ask.title }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("FETCH_ASKS");
    },
};
</script>

<style></style>
