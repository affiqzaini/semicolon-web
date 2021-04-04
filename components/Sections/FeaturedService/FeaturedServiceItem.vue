<template>
  <div class="components__featuredServiceItem full-width">
    <v-img src="https://source.unsplash.com/weekly" aspect-ratio="6"> </v-img>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class FeaturedServiceItem extends Vue {}
</script>
