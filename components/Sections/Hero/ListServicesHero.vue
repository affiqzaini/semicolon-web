<template>
  <div class="components__listServicesHero center-all flex-wrap">
    <template v-for="(item, index) in services">
      <v-card
        rounded="lg"
        :key="index"
        class="mb-3 mx-2 text-center center-all"
        width="300"
        height="200"
        color="#eeeeee"
      >
        <v-card-title>
          <v-icon left color="accent" large>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-card-title>

        <v-card-text>
          {{ item.description }}
        </v-card-text>
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
        title: "Website Development",
        description:
          "Whatever you need in you business website, from static corporate website to a fully customized web applications, we are able to do it for you.",
        icon: "mdi-web"
      },
      {
        title: "E-Commerce",
        description:
          "Planning to move your business to the world wide web? We provide consultations, store setup, and migration services for your online store.",
        icon: "mdi-cash-multiple"
      },
      {
        title: "Cloud Solutions",
        description:
          "Let's not worry about storage management anymore. Our cloud storage solution is world-class and affordable for small and medium businesses.",
        icon: "mdi-cloud-outline"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listServicesHero {
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    margin-bottom: 100px !important;
  }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    margin-bottom: 50px !important;
  }
}
</style>
