<template>
  <div>
    <b-nav>
      <b-nav-item>クレジットカード入力フォーム</b-nav-item>
    </b-nav>
    <b-container>
      <Project />
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "./containers/Project.vue";

export default Vue.extend({
  name: "App",
  components: {
    Project
  }
});
</script>
