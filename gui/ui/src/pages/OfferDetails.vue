<script setup lang="ts">
import { ROUTE_NAME } from "src/router";
import { IOffer } from "src/services";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import TitleSection from "src/components/sections/TitleSection.vue";
/**
 * -----------------------------------------
 *	Config
 * -----------------------------------------
 */

const $route = useRoute();
const $router = useRouter();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const offer = ref<IOffer>();
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */

onBeforeMount(() => {
    if (!$route.params.id) $router.push(ROUTE_NAME.MENU);
    else {
        offer.value = {
            active: true,
            category_id: 1,
            description:
                "<p>orem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus doloribus saepe pariatur deserunt officia placeat maiores ad sit esse libero modi corrupti repellat, nulla commodi culpa impedit fugiat. Rem.</p><p>orem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus doloribus saepe pariatur deserunt officia placeat maiores ad sit esse libero modi corrupti repellat, nulla commodi culpa impedit fugiat. Rem.</p>",
            id: 1,
            price: 250,
            small_description:
                "officia placeat maiores ad sit esse libero modi corrupti repellat, nulla commodi culpa impedit fugiat. Rem",
            special: false,
            title: "OfferTitle",
            category: {
                description: "lorem",
                id: 1,
                title: "CategoryTitle",
            },
            image: "/images/about-1.jpg",
        };
    }
});
</script>

<template>
    <title-section :subtitle="offer.title" />

    <section class="container">
        <div class="row">
            <div class="col-12 col-sm-6">
                <img :src="offer.image" :alt="offer.title" class="w-100" />
            </div>
            <div class="col-12 col-sm-6 text-xl text-justify pa-2">
                <div class="text-center h4">Descripción</div>
                <div v-html="offer.description"></div>
            </div>
        </div>
    </section>
</template>
