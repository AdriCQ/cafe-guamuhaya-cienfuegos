<template>
  <q-drawer :model-value="modelValue" @update:model-value="p=>$emit('update:modelValue', p)" show-if-above>
    <div class="container">
      <q-list separator>
        <q-item>
          <q-item-section>
            <q-item-label class="text-center text-h6 text-weight-regular"
              >Administración</q-item-label
            >
          </q-item-section>
        </q-item>

        <LinkItem
          v-for="(link, index) in navLinks"
          :key="`main-drawer-link-${index}`"
          v-bind="link"
          class="text-body1"
        />
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { ROUTE_NAME } from 'src/router';
import LinkItem, { LinkItemProps } from './LinkItem.vue';

const $props = defineProps<{
  modelValue: boolean;
}>();

const $emit = defineEmits<{
  (e: 'update:modelValue', newValue: boolean): void;
}>();

const {modelValue} = toRefs($props);

const navLinks: Array<LinkItemProps> = [
  { title: 'Perfil', icon: 'mdi-account-outline', to: ROUTE_NAME.HOME },
];
</script>

<style lang="scss" scoped>
.container {
  padding: 0.5rem 0;
}
</style>
