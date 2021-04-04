<template>
  <v-app>
    <header>
      <component :is="appBar" />
    </header>

    <v-main>
      <body>
        <nuxt />
      </body>
      <contact-footer />
    </v-main>
    <v-footer absolute app>
      <span class="text-subtitle-2 full-width text-right black--text">
        &copy; {{ new Date().getFullYear() + ` Semicolon Malaysia` }}
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ContactFooter from "~/components/Layout/ContactFooter.vue";
import DesktopAppBar from "~/components/Layout/DesktopAppBar.vue";
import MobileAppBar from "~/components/Layout/MobileAppBar.vue";

@Component({
  components: {
    MobileAppBar,
    DesktopAppBar,
    ContactFooter
  }
})
export default class LayoutDefault extends Vue {
  get appBar() {
    if (this.$vuetify.breakpoint.smAndDown) return "mobile-app-bar";
    else return "desktop-app-bar";
  }
}
</script>
