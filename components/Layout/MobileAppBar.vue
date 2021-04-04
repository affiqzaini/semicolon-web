<template>
  <div class="components__mobileAppBar">
    <v-app-bar dense flat color="primary">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#def6fe" absolute temporary>
      <v-list nav dense rounded>
        <img src="/logo/logo-web.png" class="logo" />
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-list-item v-for="(item, index) in navMenu" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class MobileAppBar extends Vue {
  drawer: Boolean = false;

  get navMenu() {
    return [
      { name: "home", title: this.$t("label.home") },
      { name: "about-us", title: this.$t("label.aboutUs") },
      { name: "our-services", title: this.$t("label.ourServices") },
      { name: "contact-us", title: this.$t("label.contactUs") }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__mobileAppBar {
  .logo {
    width: 60%;
    height: auto;
    object-fit: contain;
    padding-left: 4px;
  }
}
</style>
