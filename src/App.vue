<template>
  <div>
    <b-nav>
      <b-nav-item>クレジットカード入力フォームのデモ</b-nav-item>
    </b-nav>
    <b-container class="root-app">
      <FormContainer />
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormContainer from "./containers/FormContainer.vue";

export default Vue.extend({
  name: "App",
  components: {
    FormContainer
  }
});
</script>

<style scoped lang="scss">
.root-app {
  width: 600px;
}
</style>
