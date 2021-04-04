<template>
  <div class="pages__index">
    <hero-container />
    <about-us-container />
    <list-process />
    <list-services />
    <slider-logo />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AboutUsContainer from "~/components/Sections/AboutUs/AboutUsContainer.vue";
import FeaturedServiceItem from "~/components/Sections/FeaturedService/FeaturedServiceItem.vue";
import HeroContainer from "~/components/Sections/Hero/HeroContainer.vue";
import ListProcess from "~/components/Sections/Services/ListProcess.vue";
import ListServices from "~/components/Sections/Services/ListServices.vue";
import SliderLogo from "~/components/Sections/TechList/SliderLogo.vue";

@Component({
  components: {
    HeroContainer,
    AboutUsContainer,
    FeaturedServiceItem,
    SliderLogo,
    ListProcess,
    ListServices
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {}
</script>
