<template>
    <section class="story-area left-text center-sm-text pos-relative">
        <div class="abs-tbl bg-2 w-20 z--1 dplay-md-none"></div>
        <div class="abs-tbr bg-3 w-20 z--1 dplay-md-none"></div>
        <div class="container">
            <div class="heading">
                <img
                    class="heading-img"
                    src="/images/heading_logo.png"
                    alt=""
                />
                <h2>¿Quiénes Somos?</h2>
            </div>

            <div class="row" v-if="settings">
                <div
                    class="col-md-6"
                    v-for="(about, key) in settings.site_about"
                    :key="`about-${key}`"
                >
                    <p class="mb-30">
                        {{ about }}
                    </p>
                </div>
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </section>
</template>

<script lang="ts" setup>
import { injectStrict, _appInjectable } from "src/injectables";
import { computed } from "vue";

const $appInjectable = injectStrict(_appInjectable);

const settings = computed(() => $appInjectable.settings);
</script>
