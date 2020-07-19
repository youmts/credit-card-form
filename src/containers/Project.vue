<template>
  <div>
    <CardShow v-bind="cardFormData" />
    <CardForm v-model="cardFormData" />
  </div>
</template>

<script lang="ts">
import CardForm, { CardFormData } from "../components/CardForm.vue";
import CardShow from "../components/CardShow.vue";
import Vue from "vue";

type State = {
  cardFormData: CardFormData;
};

export default Vue.extend({
  components: {
    CardForm,
    CardShow
  },
  data: function(): State {
    return {
      cardFormData: {
        cardNumber: "",
        cardName: "",
        expirationMonth: "01",
        expirationYear: "2020",
        cvv: ""
      }
    };
  }
});
</script>

<style scoped lang="scss"></style>
