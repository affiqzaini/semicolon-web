<template>
  <div class="pages__aboutUs">
    <page-title :title="$t('pageTitle.aboutUs')" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle,
  },
})
export default class PageAboutUs extends Vue {}
</script>

<style lang="scss" scoped>
</style>