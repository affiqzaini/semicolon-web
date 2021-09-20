<template>
  <div
    id="hero-container"
    class="components__heroContainer center-all flex-column bg--gradient"
  >
    <hero-message />
    <v-img
      src="/vector-2.svg"
      width="80%"
      max-width="80%"
      class="mb-10"
      alt="hero-image"
      v-if="$vuetify.breakpoint.xsOnly"
    />
    <list-services-hero />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import HeroMessage from "./HeroMessage.vue";
import ListServicesHero from "./ListServicesHero.vue";

@Component({
  components: {
    HeroMessage,
    ListServicesHero,
  },
})
export default class HeroContainer extends Vue {
  get vectorSize() {
    if (this.$vuetify.breakpoint.smAndDown) return 150;
    else return 700;
  }
}
</script>

<style lang="scss" scoped>
.components__heroContainer {
  width: 100vw;
  min-height: 600px !important;
}
</style>
