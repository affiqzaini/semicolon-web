<template>
  <div class="pages__contactUs">
    <contact-form />
    <social-share />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ContactForm from "~/components/Pages/ContactUs/ContactForm.vue";
import SocialShare from "~/components/Pages/ContactUs/SocialShare.vue";
import { PageView } from "vue-gtag";

@Component({
  head() {
    return {
      title: this.$t("pageTitle.contactUs") as string
    };
  },
  components: {
    ContactForm,
    SocialShare
  }
})
export default class PageContactUs extends Vue {
  mounted() {
    this.$gtag.pageview(this.$route as PageView);
  }
}
</script>
