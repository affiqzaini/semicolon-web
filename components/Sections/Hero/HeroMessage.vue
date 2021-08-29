<template>
  <div class="components__heroMessage">
    <v-img
      v-if="$vuetify.breakpoint.xsOnly"
      src="/logo/semicolon_dark.svg"
      class="d-flex mx-auto mb-8"
      width="70%"
      height="auto"
      contain
    />
    <div class="center-between full-width">
      <div>
        <div class="primary--text">
          <p class="font-weight-black mb-0 text-h5 text-md-h3">
            {{ $t("label.connecting") }}
          </p>

          <p class="font-weight-bold mb-0 text-md-h4">
            {{ $t("message.yourBusinessToTheWorld") }}
          </p>

          <p class="secondary--text text-body-2 mb-10" style="max-width: 400px">
            {{ $t("message.weOfferVariousItSolutions") }}
          </p>
        </div>

        <v-btn
          @click.prevent="scrollDown"
          class="mr-auto"
          :small="$vuetify.breakpoint.xsOnly"
          rounded
          depressed
          color="primary"
          append
        >
          {{ $t("label.moreAboutUs") }}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </div>

      <img
        v-if="$vuetify.breakpoint.smAndUp"
        src="/vector-2.svg"
        height="250px"
        style="object-fit: contain"
        width="auto"
      />
    </div>
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
  margin-bottom: 36px;

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    width: 80%;
    background-size: 300px;
  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 70px 0;
    width: 1000px;
    background-size: 550px;
  }

  @media #{map-get($display-breakpoints, 'xs-only')} {
    max-width: 300px;
    margin-top: 25px;
    margin-bottom: 30px !important;
    background-image: none !important;
  }
}
</style>
