<script>
  export default {
  props:{
    card:{
      type: Object,
      required: true
    },
    index:{
      type: Number,
      required: true,
    }
  }
  }
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>

  <div class="block" style="border-radius: 28px"
    :class="{'down_one':(this.index===1||this.index===3), 'down_second':(this.index===2)}"
  >
    <i class="fa-solid" :class="this.card.svg" style="font-size: 40pt"></i>
    <p style="font-size: 24px; text-align: center; font-weight: 400; font-family: Onest, Arial, sans-serif; color: #151515">
      {{this.card.text}}</p>
  </div>
</template>

<style scoped>
  .block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 294px;
    padding: 20px;
    /*width: 293px;*/
    width: 18rem;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.3s ease;
  }
  .fa-solid{
    color: #9AA3BB;
  }
  .block:hover .fa-solid{
    color: #151515;
  }
  .down_one{
    margin-top: 40px;
  }
  .down_second{
    margin-top: 80px;
  }
  .block:hover{
    transform: translateY(-20px);
  }
</style>