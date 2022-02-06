<template>
  <div id="our-services" class="components__listServices primary">
    <div class="inner-section">
      <p
        class="
          mb-10
          text-h4
          font-weight-bold
          white--text
          text-center
          text-uppercase
        "
      >
        What we do
      </p>

      <v-row class="ma-0">
        <v-col cols="12" md="4" v-for="(item, index) in services" :key="index">
          <v-card
            color="transparent"
            tile
            flat
            width="100%"
            class="mb-4 white--text"
          >
            <v-card-title class="mb-0 text-h6 accent--text text-sm-h5">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              <v-list color="transparent">
                <v-list-item
                  class="white--text "
                  v-for="(desc, index) in item.description"
                  :key="index"
                >
                  <v-icon small color="white" class="mr-2">mdi-circle</v-icon>
                  {{ desc }}
                </v-list-item>
              </v-list>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ListServices extends Vue {
  get services() {
    return [
      {
        title: "Web Development",
        description: [
          "Frontend Development",
          "Backend Development",
          "System Integrations",
          "Cloud Managed Services"
        ]
      },
      {
        title: this.$t("label.ecommerce"),
        description: [
          "Online Store Setup",
          "Data Migration",
          "Application Integrations",
          "Account Monitoring"
        ]
      },
      {
        title: "Digital Marketing",
        description: [
          "Advertisement Setup",
          "Strategy Optimization",
          "Campaign Monitoring",
          "Content Research & Planning"
        ]
      },
      {
        title: "Design",
        description: [
          "Design Research",
          "Design Concepts",
          "Prototypes",
          "UI/UX Design",
          "UI/UX Production"
        ]
      },
      {
        title: "Tech Strategy",
        description: [
          "Product Development Process",
          "Product Research and Proposals",
          "Growth Hacking",
          "Project Management",
          "Training and Support"
        ]
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listServices {
  display: flex;
  justify-content: center;
  align-items: center;

  .service-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media #{map-get($display-breakpoints, 'sm-only')} {
      width: 90vw;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      width: 90vw;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      padding: 100px 0px;
      width: 1200px;
    }

    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 0px 24px;
      width: 100vw;
      margin-top: 50px;
      margin-bottom: 30px !important;
    }
  }
}
</style>
