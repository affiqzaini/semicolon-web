<template>
  <v-app-bar
    class="components__desktopAppBar"
    flat
    width="100vw"
    color="white"
    height="65px"
    app
    fixed
  >
    <v-img
      src="/logo/semicolon-logo.svg"
      height="40px"
      position="left center"
      width="auto"
      contain
      class="ml-3"
      alt="logo"
    />
    <v-spacer> </v-spacer>
    <v-bottom-sheet v-model="navSheet">
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <v-icon color="black">mdi-menu</v-icon>
        </div>
      </template>

      <v-sheet class="rounded-t-xl" min-height="50vh">
        <v-list nav>
          <v-list-item
            class="text-center"
            v-for="(item, index) in navMenu"
            :key="index"
            active-class="primary--text"
            :to="item.to"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";

@Component({})
export default class MobileBottomNav extends Vue {
  navSheet: boolean = false;

  @Watch("route")
  onRouteChanged() {
    this.navSheet = false;
  }

  get route() {
    return this.$route.fullPath;
  }

  get navMenu() {
    return [
      {
        name: "home",
        title: this.$t("label.home"),
        to: this.localePath({ name: "index" })
      },
      {
        name: "about-us",
        title: this.$t("label.aboutUs"),
        to: this.localePath({ name: "aboutUs" })
      },
      {
        name: "our-services",
        title: this.$t("label.ourServices"),
        to: this.localePath({ name: "services" })
      },
      {
        name: "contact-us",
        title: this.$t("label.contactUs"),
        to: this.localePath({ name: "contactUs" })
      }
    ];
  }

  goToElement(elem: string) {
    const el = document.getElementById(elem) as HTMLElement;
    this.$vuetify.goTo(el);
    this.navSheet = false;
  }
}
</script>

<style lang="scss" scoped>
.components__mobileBottomNav {
  .nav-sheet {
    .nav-sheet-header {
      position: relative;
      top: 0;
      height: 45px;
      width: 100%;
      background-color: #194da3;
      border-radius: 25px 12x 25px 12px;
    }
  }
}
</style>
