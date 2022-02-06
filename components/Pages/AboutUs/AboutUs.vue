<template>
  <div class="components__aboutUs inner-section pb-12">
    <p class="text-h4 font-weight-black primary--text mb-10">Why Choose Us?</p>

    <v-row>
      <v-col cols="12" md="4" v-for="(item, index) in description" :key="index">
        <div class="d-inline-flex align-end mb-3">
          <v-icon large color="accent" class="mr-2">
            mdi-checkbox-marked-circle-outline
          </v-icon>
          <p class="text-h6 mb-0">{{ item.title }}</p>
        </div>

        <p style="max-width: 400px" class="text-subtitle-2 secondary--text">
          {{ item.description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class AboutUs extends Vue {
  get description() {
    return [
      {
        title: "Affordable",
        description:
          "If you are a small or medium sized business, you are at the right place. Our main focus is to assist SME's in business digitalization process and we guarantee that our pricing packages will be highly reasonable for you."
      },
      {
        title: "Professional",
        description:
          "We are a team of professional developers. With your requirements and our technical capabilities, we strive to provide a seamless transition to an enlightening new experience of digitalization for you and your organization."
      },
      {
        title: "Flexible",
        description:
          "We are known to say yes to crazy ideas. We never set a limit to where our services will end. Being a client of ours means that you can share your ideas and we will find a way to make it happen, even if it is outside of our scope of service."
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__aboutUs {
  margin-bottom: 100px;

  .about-us-message {
    max-width: 960px;
    word-break: normal;
  }
}
</style>
