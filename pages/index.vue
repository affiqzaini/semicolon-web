<template>
  <div class="pages__index">
    <hero-section />
    <services-summary />
    <slider-logo />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import HeroSection from "~/components/Pages/Home/HeroSection.vue";
import ServicesSummary from "~/components/Pages/Home/ServicesSummary.vue";
import SliderLogo from "~/components/Sections/TechList/SliderLogo.vue";
import { PageView } from "vue-gtag";

@Component({
  components: {
    HeroSection,
    ServicesSummary,
    SliderLogo
  },
  head() {
    return {
      title: this.$t("pageTitle.home") as string
    };
  }
})
export default class PageIndex extends Vue {
  mounted() {
    this.$gtag.pageview(this.$route as PageView);
  }
}
</script>
