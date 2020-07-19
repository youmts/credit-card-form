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
    <b-form-group label="Expiration Date" label-for="expiration-date">
      <b-form-datepicker
        id="expiration-date"
        required
        v-model="cardFormData.expirationDate"
        @input="emitValue()"
      ></b-form-datepicker>
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

export type CardFormData = {
  cardNumber: string;
  cardName: string;
  expirationDate: Date;
  cvv: string;
};

type State = {
  cardFormData: CardFormData;
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
      cardFormData: { ...this.value }
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
