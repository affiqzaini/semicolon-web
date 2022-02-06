<template>
  <div class="components__headerAboutUs">
    <div class="header-content primary pt-12">
      <div class="inner-section py-12">
        <p class="text-h3 white--text font-weight-black">
          {{ $t("label.aBriefIntroduction") }}
        </p>

        <p class="text-body-1 white--text about-us-message">
          {{ $t("message.aboutUsMessage") }}
        </p>

        <v-btn
          width="200"
          rounded
          large
          class="mt-12"
          :class="$vuetify.breakpoint.smAndDown ? 'd-flex mx-auto' : null"
          :to="localePath({ name: 'contactUs' })"
        >
          Contact Us
        </v-btn>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
      <path
        fill="#194DA3"
        fill-opacity="1"
        d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
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
export default class HeaderAboutUs extends Vue {}
</script>

<style lang="scss" scoped>
.components__headerAboutUs {
  height: min-content;

  .header-content {
    margin-bottom: -5px;
  }

  .about-us-message {
    max-width: 700px;
    word-wrap: break-word;
  }
}
</style>
