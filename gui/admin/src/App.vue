<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { $user, _user } from './injectables';

provide(_user, $user)
</script>
