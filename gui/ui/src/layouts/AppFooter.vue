<template>
    <footer class="pb-50 pt-70 pos-relative" v-if="settings">
        <div class="pos-top triangle-bottom"></div>
        <div class="container-fluid">
            <router-link to=""
                ><img src="/images/heading_logo.png" alt="Logo"
            /></router-link>

            <div class="pt-30" v-if="settings.address">
                <p class="underline-secondary"><b>Dirección:</b></p>
                <p>{{ settings.address }}</p>
            </div>

            <div class="pt-30" v-if="tel">
                <p class="underline-secondary mb-10"><b>Teléfono:</b></p>
                <a :href="tel.link"> {{ tel.label }}</a>
            </div>

            <div class="pt-30" v-if="email">
                <p class="underline-secondary mb-10"><b>Email:</b></p>
                <a :href="email.link"> {{ email.label }}</a>
            </div>

            <ul class="icon mt-30" v-if="settings.social.length">
                <li
                    v-for="social in settings.social"
                    :key="`social-${social.key}`"
                >
                    <a :href="social.link"><i :class="social.icon"></i></a>
                </li>
                <li>
                    <a href="#"><i class="ion-android"></i></a>
                </li>
            </ul>

            <p class="color-light font-9 mt-50 mt-sm-30">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;
                {{
                    new Date().getFullYear() > 2022
                        ? `2022-${new Date().getFullYear()}`
                        : `2022`
                }}
                Todos los Derechos Reservados
            </p>
            <p>
                Hecho con <i class="ion-heart" aria-hidden="true"></i> por
                <a href="https://github.com/AdriCQ">AdriCQ</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
        </div>
        <!-- container -->
    </footer>
</template>

<script lang="ts" setup>
import { injectStrict, _appInjectable } from "src/injectables";
import { ISettingsSocial } from "src/services";
import { computed } from "vue";

const $appSettings = injectStrict(_appInjectable);
const settings = computed(() => $appSettings.settings);

const email = computed<ISettingsSocial | null>(() => {
    let t = null;
    settings.value.social.forEach((social) => {
        if (social.key === "email") t = social;
    });
    return t;
});

const tel = computed<ISettingsSocial | null>(() => {
    let t = null;
    settings.value.social.forEach((social) => {
        if (social.key === "tel") t = social;
    });
    return t;
});
</script>
