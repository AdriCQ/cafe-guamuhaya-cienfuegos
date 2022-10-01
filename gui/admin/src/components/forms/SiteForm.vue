<script setup lang="ts">
import { ISiteSettings } from 'src/services';
import { ref } from 'vue';

const form = ref<ISiteSettings>({
  address: '',
  id: 1,
  site_about: [],
  site_title: '',
  social: [],
});

async function onSubmit() {
  console.log(form.value);
}
</script>

<template>
  <q-card>
    <q-form @submit.prevent="onSubmit">
      <q-card-section class="q-gutter-y-sm">
        <q-input v-model="form.site_title" type="text" label="Titulo" />

        <div class="row q-col-gutter-sm">
          <div class="col-12">
            <q-input
              v-model="form.site_about[0]"
              type="textarea"
              label="Sobre Nosotros"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="form.site_about[1]"
              type="textarea"
              label="Sobre Nosotros"
            />
          </div>
        </div>

        <q-input v-model="form.address" type="text" label="Direccion" />
      </q-card-section>
    </q-form>
  </q-card>
</template>
