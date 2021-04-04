<template>
  <div class="components__listServicesHero center-all flex-wrap">
    <template v-for="(item, index) in services">
      <v-card
        rounded="lg"
        :key="index"
        class="pa-5 mb-3 mx-2 text-center center-all"
        width="300"
        height="180"
        color="white"
      >
        <div class="full-height d-flex justify-start align-start flex-column">
          <v-icon color="accent" class="mb-4" large>{{ item.icon }}</v-icon>
          <p class="mb-0 text-left text-h6">
            {{ item.title }}
          </p>
          <p class="mb-0 text-left text-caption">
            {{ item.description }}
          </p>
        </div>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ListServicesHero extends Vue {
  get services() {
    return [
      {
        title: "Web Services",
        description: "Static websites and full web applications development.",
        icon: "mdi-web"
      },
      {
        title: "E-Commerce",
        description:
          "Consultation, setup, and migration services for your online business.",
        icon: "mdi-cash-multiple"
      },
      {
        title: "Cloud Solutions",
        description:
          "Affordable cloud solutions for small to medium business needs.",
        icon: "mdi-cloud-outline"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listServicesHero {
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    margin-bottom: 120px !important;
  }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    margin-bottom: 50px !important;
  }
}
</style>
