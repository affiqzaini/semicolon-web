<template>
  <div id="contact-footer" class="components__contactFooter px-4 px-sm-10">
    <v-row class="ma-0 form-container" align="center" justify="center">
      <v-col cols="12" sm="6" md="3">
        <p class=" text-h4 font-weight-black">{{ $t("label.justSayHello") }}</p>
        <v-text-field
          tile
          hide-details
          dark
          :label="$t('label.name')"
          class="mb-2"
        />
        <v-text-field
          hide-details
          dark
          type="email"
          :label="$t('label.email')"
          class="mb-2"
        />
        <v-text-field
          class="mb-4"
          tile
          hide-details
          dark
          :label="$t('label.phoneOptional')"
        />
        <v-textarea
          class="mb-2"
          hide-details
          dark
          outlined
          :placeholder="$t('message.tellUsWhatYouHaveInMind')"
        />
        <v-btn depressed color="primary" width="120" rounded>{{
          $t("label.send")
        }}</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="/logo/logo-on-light.png"
          width="200"
          max-height="50"
          contain
          class="mb-3 d-flex mr-auto"
        />
        <v-card
          flat
          tile
          color="transparent"
          class="white--text pa-2 pa-sm-4 d-flex flex-column"
        >
          <div class="d-inline-flex align-center mb-2">
            <v-icon color="#def6fe" class="mr-2">mdi-email</v-icon>
            <span class="text-body-2">hello@semicolon-my.com</span>
          </div>
          <div class="d-inline-flex align-center">
            <v-icon color="#def6fe" class="mr-2">mdi-phone</v-icon>
            <span class="text-body-2">+60 11 - 1128 3226</span>
          </div>
          <v-img class="d-flex ml-auto" src="/vector-5.svg" width="350" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ContactFooter extends Vue {}
</script>

<style lang="scss" scoped>
.components__contactFooter {
  padding-top: 36px !important;
  width: 100vw;
  background-color: #303030;
  .form-container {
    min-height: 300px;
    color: white;
  }
}
</style>
