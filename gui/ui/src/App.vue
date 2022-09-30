<template>
    <router-view />
</template>

<script lang="ts" setup>
import { onMounted, provide } from "vue";
import { loadJQuery } from "src/helpers";
import { _appInjectable, $appInjectable } from "src/injectables";

provide(_appInjectable, $appInjectable);

onMounted(() => {
    setTimeout(loadJQuery, 1000);
});
</script>
