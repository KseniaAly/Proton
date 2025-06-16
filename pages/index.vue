<script setup>
  import BlockThird from "~/blocks/ksy/BlockThird.vue";
  import BlockEighth from "~/blocks/ksy/BlockEighth.vue";
  import BlockEleventh from "~/blocks/ksy/BlockEleventh.vue";
  import blockTwo from "~/blocks/mp/blockTwo.vue"
  import blockFour from "~/blocks/mp/blockFour.vue"
  import blockTen from "~/blocks/mp/blockTen.vue"
</script>

<template>
  <div class="page">
    <block-two></block-two>
    <block-third/>
    <block-four></block-four>
    <block-eighth/>
    <block-ten></block-ten>
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
