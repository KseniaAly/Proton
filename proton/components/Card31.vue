<script setup lang="ts">

</script>

<template>
  <div class="feature">
    <p><slot></slot></p>
    <span class="plus">+</span>
  </div>
</template>

<style scoped>
.feature {
  background-color: #f5f8ff;
  border-radius: 12px;
  padding: 0 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 1.4;
}

.feature:last-child {
  margin-bottom: 0;
}

.plus {
  font-size: 24px;
  color: #5c7be6;
  font-weight: bold;
}
</style>