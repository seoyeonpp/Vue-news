<template>
    <div id="app">
        <ToolBar />
        <transition name="page">
            <router-view></router-view>
        </transition>
        <SpinnerEl loading="true" />
    </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import SpinnerEl from "@/components/SpinnerEl.vue";
import bus from "@/utils/bus.js";
export default {
    components: {
        ToolBar,
        SpinnerEl,
    },
    data() {
        return {
            loadingStatus: false,
        };
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        },
    },
    created() {
        bus.$on("start:spinner", this.startSpinner);
        bus.$on("end:spinner", this.endSpinner);
    },
    beforeDestroy() {
        bus.$off("start:spinner", this.startSpinner);
        bus.$off("end:spinner", this.endSpinner);
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

/* Router transition */
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
