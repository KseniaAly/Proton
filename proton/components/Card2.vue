<script setup lang="ts">

</script>

<template>
<div>
  <slot></slot>
</div>
</template>

<style scoped>
div{
  background: white;
  display: flex;
  border-radius: 15px;
  padding: 20px;
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.3s;
}
div:hover{
  transform: translateY(-10px);
  transition: 0.3s;
  color: #2a2b6c;
  cursor: pointer;
}

@media screen and (max-width: 941px){
  div{
    width: 80%;
    margin-bottom: 15px;
  }
}
</style>