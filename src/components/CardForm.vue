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
import { addYears } from "date-fns";

export type CardFormData = {
  cardNumber: string;
  cardName: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
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
    function padZeroMonth(number: number): string {
      return ("00" + number).slice(-2);
    }

    return {
      cardFormData: { ...this.value },
      months: [...Array(12)].map((_, i) => padZeroMonth(i + 1)),
      years: [...Array(8)].map((_, i) =>
        addYears(new Date(), i)
          .getFullYear()
          .toString()
      )
    };
  },
  methods: {
    handleSubmit() {
      return;
    },
    emitValue() {
      this.$emit("input", this.cardFormData);
    }
  }
});
</script>

<style scoped lang="scss"></style>
