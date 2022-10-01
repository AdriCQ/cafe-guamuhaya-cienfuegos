<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="q-ml-md text-weight-medium">
          Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <MainDrawer v-model="leftDrawerOpen" />
    <q-page-container class="text-grey-9">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainDrawer from 'components/layout/MainDrawer.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
