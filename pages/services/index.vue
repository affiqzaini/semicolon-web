<template>
  <div class="pages__services">
    <header-services />
    <list-services />
    <list-process />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import HeaderServices from "~/components/Pages/OurServices/HeaderServices.vue";
import ListProcess from "~/components/Sections/Services/ListProcess.vue";
import ListServices from "~/components/Sections/Services/ListServices.vue";

@Component({
  components: {
    HeaderServices,
    ListProcess,
    ListServices
  },
  head() {
    return {
      title: this.$t("pageTitle.ourServices") as string
    };
  }
})
export default class PageServices extends Vue {}
</script>
