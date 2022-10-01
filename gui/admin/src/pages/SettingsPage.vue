<script setup lang="ts">
import SiteSettingsForm from 'src/components/forms/SiteSettings.vue';
import { ref } from 'vue';
const f = ref();
</script>

<!-- Template -->
<template>
  <q-page padding class="q-gutter-y-sm">
    <q-card class="no-box-shadow">
      <q-card-section>
        <div class="text-h6">Ajustes de Sitio</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>

    <q-card class="no-box-shadow">
      <q-input v-model="f" type="textarea" min-height="5rem" label="Label" />
    </q-card>
  </q-page>
</template>
<!-- / Template -->
