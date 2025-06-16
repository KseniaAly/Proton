<script setup>
import {ref} from "vue";

defineProps({
  open:{
    type: Boolean,
    required:true
  }
})

const name = ref('');
const company = ref('');
const number = ref('');
const email = ref('');
const message = ref('');
const text = ref('');
const wrong = ref(false);

const emit = defineEmits(['close'])

function close(){
  emit('close', false)
}

function send(){
  let regEmail = /[a-zA-Z0-9]+@{1}((yandex.ru)|(gmail.com)|(mail.ru))$/;
  if (name.value!=='' && company.value!=='' && number.value!=='' && email.value!==''){
    wrong.value = false;
    if (regEmail.test(email.value)){
      wrong.value = false;
      emit('close', false)
      name.value = '';
      company.value = '';
      number.value = '';
      email.value = '';
      message.value = '';
    } else {
      text.value = 'Пожалуйста заполните поле email правильно'
      wrong.value = true;

    }
  } else {
    text.value = 'Пожалуйста заполните все обязательные(*) поля'
    wrong.value = true;
  }
}
</script>

<template>
  <div class="dialog" v-if="open" @click="close">
    <form class="content" @click.stop>
      <h1>Заказать консультацию</h1>
      <div class="input">
        <label class="modal_label">Имя<span>*</span></label>
        <input type="text" v-model="name.value">
      </div>
      <div class="input">
        <label class="modal_label">Компания<span>*</span></label>
        <input type="text" v-model="company.value">
      </div>
      <div class="input">
        <label class="modal_label">Телефон<span>*</span></label>
        <input type="tel" v-model="number.value" placeholder="+7 (">
      </div>
      <div class="input">
        <label class="modal_label">E-mail<span>*</span></label>
        <input type="email" v-model="email.value">
      </div>
      <div class="input">
        <label class="modal_label">Сообщение</label>
        <input type="text" v-model="message.value">
      </div>
      <div style="display: flex">
        <p style="color: #151515; font-size: 16px; font-family: Onest, Arial, sans-serif">
          Нажимая на кнопку, вы даете согласие на
          <a style="color: #2E3192">обработку персональных данных</a>
          и соглашаетесь с
          <a style="color: #2E3192">политикой конфиденциальности</a>
        </p>
        <button @click="send" type="button">Заказать</button>
      </div>
      <div class="wrong" v-if="wrong">
        <p>{{text}}</p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wrong{
  background-color: #DE3131;
  color: white;
  border-radius: 16px;
}
.wrong p{
  font-size: 16px;
  padding: 14px 16px;
}

  .modal_label{
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #151515;
  }
  .modal_label span{
    color: #9aa3bb;
    font-size: 18px;
    margin-left: 5px;
  }

  .input{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .input label{
    font-size: 22px;
    color: #151515;
    font-family: Onest, Arial, sans-serif;
  }
  .input input{
    border-radius: 20px;
    padding: 12px 14px;
    height: 40px;
    font-size: 24px;
    border: 1px solid #f2f5fd;
    background-color: #f2f5fd;
    width: 70%;
  }

  h1{
    margin: 0;
    margin-bottom: 30px;
    color: #151515;
    font-family: Onest, Arial, sans-serif;
    font-size: 34px;
    font-weight: 400;
  }

  .dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  .content{
    background-color: #fff;
    border-radius: 28px;
    box-shadow: 0 0 28px rgba(154, 163, 187, .2);
    max-width: 768px;
    padding: 50px;
    width: 768px;
  }

  button{
    border-radius: 20px;
    padding: 12px 24px;
    background-color: #2E3192;
    font-weight: 500;
    color: white;
    font-size: 20px;
    font-family: Onest, Arial, sans-serif;
    width: 50%;
    margin-bottom: 20px;
  }
  button:hover{
    background-color: #151515;
  }
</style>