<template>
  <div class="pages__portfolio">
    <page-title :title="$t('label.portfolio')" />
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
export default class PagePortfolio extends Vue {}
</script>