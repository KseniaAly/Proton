<script setup>
  import BlockThird from "~/blocks/ksy/BlockThird.vue";
  import BlockEighth from "~/blocks/ksy/BlockEighth.vue";
  import BlockEleventh from "~/blocks/ksy/BlockEleventh.vue";
</script>

<template>
  <div class="page">
    <block-third/>
    <block-eighth/>
    <block-eleventh/>
  </div>
</template>

<style scoped>
.page {
  background: linear-gradient(to bottom, #B2DAFF, #F2F5FD);
  min-height: 100vh;
  background-attachment: fixed;
}
</style>
