<template>
    <div class="sided-90x mb-30">
        <div class="s-left">
            <img
                class="br-3"
                :src="$props.data.image"
                :alt="$props.data.title"
            />
        </div>
        <!--s-left-->
        <div class="s-right">
            <h5 class="mb-10">
                <b>{{ $props.data.title }}</b>
                <b class="color-primary float-right"
                    >${{ Number($props.data.price).toFixed(2) }}</b
                >
            </h5>
            <p class="pr-70">
                {{ $props.data.description }}
            </p>
        </div>
        <!--s-right-->
    </div>
    <!-- sided-90x -->
</template>

<script setup lang="ts">
import { IOffer } from "src/services/offers";
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const $props = defineProps<{
    data: IOffer;
}>();
</script>
