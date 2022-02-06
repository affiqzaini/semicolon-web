<template>
  <div class="pages__aboutUs pb-0">
    <header-about-us />
    <cust-experience />
    <about-us />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AboutUs from "~/components/Pages/AboutUs/AboutUs.vue";
import HeaderAboutUs from "~/components/Pages/AboutUs/HeaderAboutUs.vue";
import { PageView } from "vue-gtag";
import CustExperience from "~/components/Pages/AboutUs/CustExperience.vue";

@Component({
  components: {
    AboutUs,
    CustExperience,
    HeaderAboutUs
  },
  head() {
    return {
      title: "About Us"
    };
  }
})
export default class PageAboutUs extends Vue {
  mounted() {
    this.$gtag.pageview(this.$route as PageView);
  }
}
</script>

<style lang="scss" scoped></style>
