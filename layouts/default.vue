<template>
  <v-app>
    <header>
      <desktop-app-bar v-if="$vuetify.breakpoint.smAndUp" />
    </header>

    <v-main>
      <body>
        <nuxt />
      </body>
      <contact-footer />
    </v-main>
    <v-footer absolute app v-if="$vuetify.breakpoint.smAndUp">
      <span class="text-caption full-width text-right black--text">
        &copy; {{ new Date().getFullYear() + ` Semicolon Malaysia` }}
      </span>
    </v-footer>
    <mobile-bottom-nav v-else />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ContactFooter from "~/components/Layout/ContactFooter.vue";
import DesktopAppBar from "~/components/Layout/DesktopAppBar.vue";
import MobileAppBar from "~/components/Layout/MobileAppBar.vue";
import MobileBottomNav from "~/components/Layout/MobileBottomNav.vue";

@Component({
  components: {
    MobileAppBar,
    DesktopAppBar,
    ContactFooter,
    MobileBottomNav,
  },
})
export default class LayoutDefault extends Vue {
  get appBar() {
    if (this.$vuetify.breakpoint.smAndDown) return "mobile-app-bar";
    else return "desktop-app-bar";
  }
}
</script>
