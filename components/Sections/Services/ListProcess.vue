<template>
  <div id="dev-process" class="components__listProcess full-width bg--gradient">
    <v-container class="list-process-container">
      <p
        class="mb-5 mb-sm-10 text-h5 text-sm-h4 font-weight-bold text-center primary--text"
      >
        {{ $t("label.devProcess") }}
      </p>

      <div class="slider-container minimal-scroller">
        <v-card
          v-for="(item, index) in processList"
          :key="index"
          flat
          tile
          min-width="300"
          max-width="400"
          class="pa-5 pa-md-8 mr-3 d-flex flex-column"
        >
          <div class="d-inline-flex align-end">
            <p
              class="text-h4 mb-0 text-md-h3 font-weight-black primary--text mr-2"
            >
              {{ item.itemNo }}
            </p>
            <p class="mb-0 font-weight-bold">
              {{ item.title }}
            </p>
          </div>

          <v-list>
            <v-list-item v-for="(point, index) in item.points" :key="index">
              <v-list-item-icon>
                <v-icon color="warning" size="small">
                  mdi-checkbox-blank-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content class="pa-0">
                <p class="mb-0 text-subtitle-2">{{ point }}</p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ListProcess extends Vue {
  get processList() {
    return [
      {
        itemNo: "01",
        title: this.$t("label.gatheringInformation"),
        points: [
          this.$t("label.projectObjective"),
          this.$t("label.mainGoals"),
          this.$t("label.currentIssues")
        ]
      },
      {
        itemNo: "02",
        title: this.$t("label.projectPlanning"),
        points: [
          this.$t("label.createSitemapSketch"),
          this.$t("label.createWireframeAndMockup"),
          this.$t("label.chooseTechStack"),
          this.$t("label.finalizeScope"),
          this.$t("label.determineTimeline")
        ]
      },
      {
        itemNo: "03",
        title: this.$t("label.design"),
        points: [
          this.$t("label.pageLayouts"),
          this.$t("label.review"),
          this.$t("label.approvalCycle")
        ]
      },
      {
        itemNo: "04",
        title: this.$t("label.contentAssembly"),
        points: [
          this.$t("label.createNewContent"),
          this.$t("label.migrateExistingContent")
        ]
      },
      {
        itemNo: "05",
        title: this.$t("label.development"),
        points: [
          this.$t("label.developAndDeploy"),
          this.$t("label.seoForWebsites")
        ]
      },
      {
        itemNo: "06",
        title: this.$t("label.testingAndLaunch"),
        points: [
          this.$t("label.internalTesting"),
          this.$t("label.userAcceptanceTest"),
          this.$t("label.crossBrowserCompatibility"),
          this.$t("label.productLaunch")
        ]
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listProcess {
  .list-process-container {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding: 100px 24px;
    }
  }
  .slider-container {
    overflow-y: auto;
    display: inline-flex;
    scroll-behavior: smooth;

    @media #{map-get($display-breakpoints, 'sm-only')} {
      width: 90vw;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      width: 90vw;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      width: 1200px;
    }

    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 90vw;
    }
  }
}
</style>
