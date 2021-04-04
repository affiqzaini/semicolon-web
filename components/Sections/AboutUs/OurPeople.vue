<template>
  <div class="components__ourPeople center-all">
    <div class="mr-4">
      <v-avatar
        class="avatar mr-3 mb-2"
        rounded="pill"
        height="120"
        width="120"
        color="white"
      >
        <v-img contain src="https://source.unsplash.com/300x300/?people" />
      </v-avatar>
      <p class="mb-0 text-center">Affiq Zaini</p>
      <p class="text-caption text-center">Co-founder</p>
    </div>

    <div>
      <v-avatar
        class="avatar mb-2"
        rounded="pill"
        height="120"
        width="120"
        color="white"
      >
        <v-img contain src="https://source.unsplash.com/300x300/?man" />
      </v-avatar>
      <p class="mb-0 text-center">Mu'adz Rosli</p>
      <p class="text-caption text-center">Co-founder</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class OurPeople extends Vue {}
</script>

<style lang="scss" scoped>
.components__ourPeople {
  .avatar {
    border: 5px solid white;
  }
}
</style>
