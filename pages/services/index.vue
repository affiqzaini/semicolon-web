<template>
  <div class="pages__services">
    <list-process />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ListProcess from "~/components/Sections/Services/ListProcess.vue";

@Component({
  components: {
    ListProcess
  }
})
export default class PageServices extends Vue {}
</script>
