<template>
  <b-form @submit.stop.prevent="handleSubmit">
    <b-form-group label="Card Number" label-for="card-number">
      <b-form-input
        id="card-number"
        maxlength="16"
        v-model="$v.form.cardNumber.$model"
        :state="validateState('cardNumber')"
        @input="emitValue()"
        :formatter="formatNumber"
      ></b-form-input>
      <b-form-invalid-feedback
        >This is a required field and must be a 16
        characters.</b-form-invalid-feedback
      >
    </b-form-group>
    <b-form-group label="Card Name" label-for="card-name">
      <b-form-input
        id="card-name"
        maxlength="20"
        v-model="$v.form.cardName.$model"
        :state="validateState('cardName')"
        @input="emitValue()"
      ></b-form-input>
      <b-form-invalid-feedback
        >This is a required field and at least 3
        characters.</b-form-invalid-feedback
      >
    </b-form-group>
    <b-form-row>
      <b-col cols="8">
        <label>Expiration Date</label>
      </b-col>
      <b-col cols="4">
        <label>CVV</label>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col cols="4">
        <b-form-select
          id="expiration-month"
          v-model="$v.form.expirationMonth.$model"
          :state="validateState('expirationMonth')"
          :options="months"
          @input="emitValue()"
        >
          <template #first>
            <BFormSelectOption value="">Month</BFormSelectOption>
          </template>
        </b-form-select>
        <b-form-invalid-feedback
          >This is a required field.</b-form-invalid-feedback
        >
      </b-col>
      <b-col cols="4">
        <b-form-select
          id="expiration-year"
          v-model="$v.form.expirationYear.$model"
          :state="validateState('expirationYear')"
          :options="years"
          @input="emitValue()"
        >
          <template #first>
            <BFormSelectOption value="">Year</BFormSelectOption>
          </template>
        </b-form-select>
        <b-form-invalid-feedback
          >This is a required field.</b-form-invalid-feedback
        >
      </b-col>
      <b-col cols="4">
        <b-form-input
          id="cvv"
          v-model="$v.form.cvv.$model"
          :state="validateState('cvv')"
          maxlength="4"
          @input="emitValue()"
          :formatter="formatNumber"
        ></b-form-input>
        <b-form-invalid-feedback
          >This must be 3 or 4 characters.</b-form-invalid-feedback
        >
      </b-col>
      <b-button variant="primary" type="submit" class="mt-4">Submit</b-button>
    </b-form-row>
  </b-form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { availableMonths, availableYears } from "../lib/date";
// NOTE: 本当は import validator としたいが、下の不具合があるようなので
// SEE: https://github.com/braintree/card-validator/issues/82
import { number as validateNumber } from "card-validator";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export type CardFormData = {
  cardNumber: string;
  cardName: string;
  expirationMonth?: string;
  expirationYear?: string;
  cvv: string;
  niceType?: string;
};

type State = {
  form: CardFormData;
  months: string[];
  years: string[];
};

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    form: {
      cardNumber: {
        required,
        minLength: minLength(16),
        maxLength: maxLength(16)
      },
      cardName: {
        required,
        minLength: minLength(3)
      },
      expirationMonth: {
        required
      },
      expirationYear: {
        required
      },
      cvv: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(4)
      }
    }
  },
  props: {
    value: {
      type: Object as PropType<CardFormData>,
      required: true
    }
  },
  data(): State {
    return {
      form: { ...this.value },
      months: availableMonths,
      years: availableYears
    };
  },
  methods: {
    validateState(name: string) {
      const field = this.$v.form[name];

      if (!field) {
        throw "no name in $v.form";
      }

      const { $dirty, $error } = field;
      return $dirty ? !$error : null;
    },
    handleSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("ok");
      return;
    },
    emitValue() {
      this.form.niceType = validateNumber(this.form.cardNumber)?.card?.niceType;

      this.$emit("input", this.form);
    },
    formatNumber(value: string) {
      return value.replace(/\D/g, "");
    }
  }
});
</script>

<style scoped lang="scss"></style>
