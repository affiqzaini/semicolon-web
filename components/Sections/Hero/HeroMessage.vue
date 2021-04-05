<template>
  <div class="components__heroMessage">
    <div class="primary--text">
      <p
        :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5'"
        class="font-weight-black mb-0"
      >
        {{ $t("label.connecting") }}
      </p>

      <p
        :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : null"
        class="font-weight-bold mb-0"
      >
        {{ $t("message.yourBusinessToTheWorld") }}
      </p>
      <p class="secondary--text text-body-2 mb-10" style="max-width: 400px">
        {{ $t("message.weOfferVariousItSolutions") }}
      </p>
    </div>
    <v-btn
      @click.prevent="scrollDown"
      class="mr-auto"
      rounded
      depressed
      color="primary"
      append
    >
      {{ $t("label.moreAboutUs") }}
      <v-icon class="ml-2">mdi-chevron-down</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class HeroMessage extends Vue {
  scrollDown() {
    const elem = document.getElementById("about-us") as HTMLElement;
    this.$vuetify.goTo(elem);
  }
}
</script>

<style lang="scss" scoped>
.components__heroMessage {
  background-image: url("/vector-2.svg");
  background-repeat: no-repeat;
  background-position: right center;

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 700px;
    height: 400px;
    background-size: 300px;
  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1000px;
    height: 700px;
    background-size: 550px;
  }

  @media #{map-get($display-breakpoints, 'xs-only')} {
    max-width: 300px;
    margin-top: 100px;
    margin-bottom: 30px !important;
    background-image: none !important;
  }
}
</style>
