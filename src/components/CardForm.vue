<template>
  <b-form @submit.prevent="handleSubmit">
    <b-form-group label="Card Number" label-for="card-number">
      <b-form-input
        id="card-number"
        required
        v-model="cardFormData.cardNumber"
        @input="emitValue()"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Card Name" label-for="card-name">
      <b-form-input
        id="card-name"
        required
        v-model="cardFormData.cardName"
        @input="emitValue()"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Expiration Month" label-for="expiration-month">
      <b-form-select
        id="expiration-month"
        required
        :options="months"
        v-model="cardFormData.expirationMonth"
        @input="emitValue()"
      ></b-form-select>
    </b-form-group>
    <b-form-group label="Expiration Year" label-for="expiration-year">
      <b-form-select
        id="expiration-year"
        required
        :options="years"
        v-model="cardFormData.expirationYear"
        @input="emitValue()"
      ></b-form-select>
    </b-form-group>
    <b-form-group label="CVV" label-for="cvv">
      <b-form-input
        id="cvv"
        required
        v-model="cardFormData.cvv"
        @input="emitValue()"
      ></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { availableMonths, availableYears } from "../lib/date";
// NOTE: 本当は import validator としたいが、下の不具合があるようなので
// SEE: https://github.com/braintree/card-validator/issues/82
import { number as validateNumber } from "card-validator";

export type CardFormData = {
  cardNumber: string;
  cardName: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  niceType: string;
};

type State = {
  cardFormData: CardFormData;
  months: string[];
  years: string[];
};

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<CardFormData>,
      required: true
    }
  },
  data(): State {
    return {
      cardFormData: { ...this.value },
      months: availableYears,
      years: availableYears
    };
  },
  methods: {
    handleSubmit() {
      return;
    },
    emitValue() {
      this.cardFormData.niceType =
        validateNumber(this.cardFormData.cardNumber)?.card?.niceType || "";

      this.$emit("input", this.cardFormData);
    }
  }
});
</script>

<style scoped lang="scss"></style>
