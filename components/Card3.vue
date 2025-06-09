<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="card-left">
      <slot name="left"></slot>
    </div>
    <div class="card-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  display: flex;
  padding: 24px;
  max-width: 30rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin: 10px;
}

.card-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding-right: 24px;
}

.card-left h2 {
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
}

.card-left img {
  max-width: 150px;
}

.card-right {
  flex: 2;
  display: grid;
  justify-content: space-around;
  padding-left: 24px;
  align-content: start;
}


@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .card-left {
    border-right: none;
    border-bottom: 1px solid #eee;
    padding-right: 0;
    padding-bottom: 16px;
  }

  .card-right {
    padding-left: 0;
    padding-top: 16px;
  }
}
</style>