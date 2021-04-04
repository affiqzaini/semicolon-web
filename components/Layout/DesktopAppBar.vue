<template>
  <v-app-bar
    class="components__desktopAppBar mx-auto center-all px-12 py-4"
    flat
    color="white"
    fixed
  >
    <div class="d-inline-flex align-center justify-space-between full-width">
      <div
        class="appbar-logo cursor-pointer"
        @click.prevent="goToElement('hero-container')"
      >
        <v-img src="/logo/logo-web.png" height="auto" width="150px" contain>
        </v-img>
      </div>

      <div class="mt-2">
        <v-btn
          text
          tile
          depressed
          color="primary"
          :key="index"
          v-for="(item, index) in navMenu"
          @click.prevent="goToElement(item.to)"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <div class="mt-2">
        <v-btn
          outlined
          depressed
          small
          color="primary"
          @click.prevent="goToElement('contact-footer')"
        >
          {{ $t("label.contactUs") }}
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class DesktopAppBar extends Vue {
  get navMenu() {
    return [
      {
        name: "home",
        title: this.$t("label.home"),
        to: "hero-container"
      },
      {
        name: "about-us",
        title: this.$t("label.aboutUs"),
        to: "about-us"
      },
      {
        name: "our-process",
        title: this.$t("label.ourProcess"),
        to: "dev-process"
      },
      {
        name: "our-services",
        title: this.$t("label.ourServices"),
        to: "our-services"
      }
    ];
  }

  goToElement(elem: string) {
    const el = document.getElementById(elem) as HTMLElement;
    this.$vuetify.goTo(el);
  }
}
</script>

<style lang="scss" scoped>
.components__desktopAppBar {
  height: 100px !important;
  max-width: 1900px;
}
</style>
