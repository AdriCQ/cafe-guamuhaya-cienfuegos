<template>
  <q-page padding>
    <q-card square class="q-py-md q-mx-auto" style="max-width: 380px">
      <!-- Title -->
      <q-card-section class="text-center">
        <div class="text-h6">Inicia sesión</div>
        <div class="text-body2 text-grey-9">
          Inserta tus datos para continuar
        </div>
      </q-card-section>
      <!-- / Title -->

      <!-- Form -->
      <q-form @submit.prevent="onSubmit">
        <q-card-section class="q-py-sm q-gutter-y-md">
          <q-input
            v-model="form.email"
            type="email"
            label="Correo electrónico *"
            color="dark"
            outlined
            class="q-mb-xs"
            required
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account" color="dark" size="20px" />
            </template>
          </q-input>

          <q-input
            v-model="form.password"
            type="password"
            label="Contraseña *"
            color="dark"
            outlined
            required
          >
            <template v-slot:prepend>
              <q-icon name="mdi-key" color="dark" size="20px" />
            </template>
          </q-input>

          <div class="row justify-center">
            <q-btn
              label="Olvidaste tu contraseña?"
              color="primary"
              :ripple="false"
              flat
              no-caps
              class="text-subtitle2"
            />
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            label="Entrar"
            type="submit"
            color="primary"
            unelevated
            class="full-width text-bold"
          />
        </q-card-actions>
      </q-form>
      <!-- / Form -->
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { _user, injectStrict } from 'src/injectables';
import { useNotification } from 'src/composables';
import { ROUTE_NAME } from 'src/router';
import { IUserRequestLogin } from 'src/services';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const $notify = useNotification();
const $user = injectStrict(_user);
const $router = useRouter();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const form = ref<IUserRequestLogin>({
  email: '',
  password: '',
});
/**
 * -----------------------------------------
 *	Methdods
 * -----------------------------------------
 */
/**
 * Submit
 */
async function onSubmit() {
  try {
    await $user.login(form.value);
    void $router.push({ name: ROUTE_NAME.HOME });
  } catch (error) {
    $notify.axios(error);
  }
}
</script>

<style lang="scss" scoped>
.q-page {
  padding: 6rem 1rem;
}
</style>
