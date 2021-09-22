<template>
  <div class="components__socialShare">
    <ShareNetwork
      network="facebook"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import VueSocialSharing from "vue-social-sharing";

Vue.use(VueSocialSharing);

@Component({})
export default class SocialShare extends Vue {}
</script>

<style lang="scss" scoped>
</style>