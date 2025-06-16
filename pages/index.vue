<script setup>
  import BlockThird from "~/blocks/ksy/BlockThird.vue";
  import BlockEighth from "~/blocks/ksy/BlockEighth.vue";
  import BlockEleventh from "~/blocks/ksy/BlockEleventh.vue";
  import BlockOne from "../blocks/ann/BlockOne.vue";
  import BlockFive from "../blocks/ann/BlockFive.vue";
  import BlockSix from "../blocks/ann/BlockSix.vue";
  import BlockSeven from "../blocks/ann/BlockSeven.vue";
  import BlockNine from "../blocks/ann/BlockNine.vue";
</script>

<template>
  <div class="page">
    <block-one></block-one>
    <block-third/>
    <block-five></block-five>
    <block-six></block-six>
    <block-seven></block-seven>
    <block-eighth/>
    <block-nine></block-nine>
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
