<template>
  <b-card>
    <b-card-text>
      {{ cardNumber }}
    </b-card-text>
    <b-card-text>
      {{ cardName }}
    </b-card-text>
    <b-card-text>
      {{ expirationDate }}
    </b-card-text>
    <b-card-text>
      {{ cvv }}
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    cardNumber: {
      type: String,
      required: true
    },
    cardName: {
      type: String,
      required: true
    },
    expirationDate: {
      type: Date,
      required: true
    },
    cvv: {
      type: String,
      required: true
    }
  }
});
</script>
