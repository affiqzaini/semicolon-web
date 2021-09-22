<template>
  <div class="components__contactForm center-all flex-column py-10">
    <h1 class="text-h4 font-weight-black text-center mb-5">
      {{ $t("pageTitle.contactUs") }}
    </h1>

    <div class="contact-form">
      <v-text-field
        dense
        hide-details
        :label="$t('label.name')"
        class="mb-2"
        filled
        v-model="formModel.name"
      />

      <v-text-field
        dense
        hide-details
        filled
        type="email"
        :label="$t('label.email')"
        class="mb-2"
        v-model="formModel.reply_to"
      />

      <v-text-field
        dense
        class="mb-4"
        filled
        hide-details
        :label="$t('label.phoneOptional')"
        v-model="formModel.phone_no"
      />

      <v-textarea
        class="mb-5"
        hide-details
        filled
        :placeholder="$t('message.tellUsWhatYouHaveInMind')"
        v-model="formModel.message"
      />

      <v-btn
        depressed
        color="primary"
        width="120"
        class="d-flex mx-auto"
        rounded
        :loading="loading"
        @click.prevent="sendEmail"
      >
        {{ $t("label.send") }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import emailjs, { init } from "emailjs-com";

@Component({})
export default class ContactForm extends Vue {
  loading: Boolean = false;
  formModel: any = {
    to_name: "Semicolon Malaysia",
    from_name: null,
    reply_to: null,
    phone_no: null,
    message: null,
  };

  client: any = null;

  mounted() {
    this.initializeEmailjs();
  }

  initializeEmailjs() {
    this.client = init("user_twvKyIAiA893pF5T16Lt8");
  }

  get validForm() {
    if (
      this.formModel.from_name == null ||
      this.formModel.reply_to == null ||
      this.formModel.message == null
    )
      return false;
    else return true;
  }

  async sendEmail() {
    const serviceId = this.$config.emailjs_service_id;
    const templateId = this.$config.emailjs_template_id;

    if (!this.validForm)
      return this.$toasted.error(this.$t("message.plsFillInTheForm") as string);

    try {
      this.loading = true;

      await emailjs.send(serviceId, templateId, this.formModel);
      this.$toasted.success(
        this.$t("message.weHaveReceivedYourEmail") as string
      );
      this.formModel = {
        from_name: "",
        reply_to: "",
        phone_no: "",
        message: "",
      };
    } catch (error) {
      this.$toasted.error(this.$t("message.plsTryAgainLater") as string);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.components__contactForm {
  .contact-form {
    width: 500px;
  }
}
</style>
