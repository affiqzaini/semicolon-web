<template>
  <v-app>
    <header>
      <desktop-app-bar v-if="$vuetify.breakpoint.mdAndUp" />
      <mobile-bottom-nav v-else />
    </header>

    <v-main class="pb-0">
      <body>
        <nuxt />
      </body>
    </v-main>
    <layout-footer />
    <v-footer absolute app v-if="$vuetify.breakpoint.smAndUp" color="#303030">
      <span class="text-caption full-width text-center white--text">
        &copy;
        {{ new Date().getFullYear() + ` Semicolon Malaysia Ent. 003309851-P` }}
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DesktopAppBar from "~/components/Layout/DesktopAppBar.vue";
import LayoutFooter from "~/components/Layout/LayoutFooter.vue";
import MobileAppBar from "~/components/Layout/MobileAppBar.vue";
import MobileBottomNav from "~/components/Layout/MobileBottomNav.vue";

@Component({
  components: {
    MobileAppBar,
    DesktopAppBar,
    LayoutFooter,
    MobileBottomNav
  }
})
export default class LayoutDefault extends Vue {
  get appBar() {
    if (this.$vuetify.breakpoint.smAndDown) return "mobile-app-bar";
    else return "desktop-app-bar";
  }
}
</script>
