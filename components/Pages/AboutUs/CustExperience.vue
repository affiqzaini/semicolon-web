<template>
  <div class="components__custExperience inner-section py-12">
    <v-img
      src="/vector-4.svg"
      height="auto"
      max-width="700px"
      class="mx-auto"
      contain
      alt="aboutUs Image"
    />
    <p class="text-body-1 font-weight-bold text-uppercase secondary--text mb-0">
      {{ $t("label.customerExperience") }}
    </p>

    <p class="text-h3 font-weight-black">
      {{ $t("label.yourExperienceIsOurPriority") }}
    </p>

    <div class="content-text text-body-1">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class CustExperience extends Vue {
  text: String =
    "Your experience is what drives us. This is what differentiates us from our competitors. " +
    "For us a client is not just a mere customer, but a dear friend. Being our friend means " +
    "that we will go out of our way to help you achieve your goals. As a startup ourselves, " +
    "we fully understand your hardships in running a business and we are here to help by any means possible.";
}
</script>

<style lang="scss" scoped>
.components__custExperience {
  .content-text {
    max-width: 700px;
    word-wrap: break-word;
    display: flex;
    margin-top: 24px;
  }
}
</style>
