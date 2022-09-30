<template>
    <app-header />
    <router-view />
    <app-footer />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import AppHeader from "src/layouts/AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import { injectStrict, _appInjectable } from "src/injectables";

const $appSettings = injectStrict(_appInjectable);

onBeforeMount(async () => {
    try {
        await $appSettings.loadSettings();
    } catch (error) {
        alert("Error");
        console.log(error);
    }
});
</script>
