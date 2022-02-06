<template>
  <div class="components__heroSection">
    <page-title :title="$t('pageTitle.home')" class="d-none" />

    <div class="inner-section">
      <v-img
        src="/hero-vector.svg"
        contain
        max-width="700px"
        height="auto"
        alt="hero-img"
        position="center"
        class="mx-auto mb-10"
      />
      <div class="primary--text text-center center-all flex-column">
        <h1 class="connect font-weight-black mb-3 text-h4 text-md-h3">
          Home of Digitalization
        </h1>

        <p
          class="secondary--text text-body-1 mb-5 mb-md-10"
          style="max-width: 700px"
        >
          Everything starts on the internet nowadays, and we are here to help
          you make the boldest footprint in the global marketplace.
        </p>
        <v-btn
          :to="localePath({ name: 'aboutUs' })"
          class="mx-auto"
          :small="$vuetify.breakpoint.xsOnly"
          rounded
          width="250"
          outlined
          large
          depressed
          color="#FF5245"
        >
          {{ $t("label.moreAboutUs") }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class HeroSection extends Vue {}
</script>

<style lang="scss" scoped>
.components__heroSection {
  .connect {
    animation: showup 10s;
    animation-fill-mode: forwards;

    @keyframes showup {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
