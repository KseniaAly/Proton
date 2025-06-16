<script>
import Card from "~/components/Card.vue";
import Card2 from "~/components/Card2.vue";
import Card3 from "~/components/Card3.vue";
import Card31 from "~/components/Card31.vue";
import Card4 from "~/components/Card4.vue";

import VueCards from "@/components/VueCards.vue";
export default {
  components: {
    card: Card, Card2, Card3, Card31, Card4,
    VueCards
  },
  data(){
    return{
      cards: [
        {text: '1С: Перевод СУБД на PostgreSQL. Перевод серверов приложений 1С на Linux', svg: 'fa-server'},
        {text: 'Инфраструктура рабочих мест', svg: 'fa-desktop'},
        {text: 'Унифицированные коммуникации', svg: 'fa-comment'},
        {text: 'Централизованное управление конфигурациями и пользователями', svg: 'fa-sliders'},
        {text: 'Миграции инфраструктуры из AWS, GCP, Azure в Яндекс.Облако или SberCloud', svg: 'fa-cloud'}
      ]
    }
  },
  methods:{
    scroll(){
      let options = {
        root: null,
        rootMargin: '5px',
        threshold: 0.5
      }
      let callback = function (entries, observer){
        entries.forEach(entry => {
          if (entry.isIntersecting){
            console.log('find', entry);
            entry.target.classList.add('active');
          }
        })
      }
      let observer = new IntersectionObserver(callback, options)
      let target = document.querySelectorAll('.animation')
      target.forEach(target=>{
        observer.observe(target);
      })
    }
  },
  mounted() {
    this.scroll();
  }
}
</script>

<template>
  <div class="page">
    <div class="section1">
    <header class="app-header">
      <div class="container">
        <div class="logo-placeholder">
          <img src="./img/Vector.png" alt="">
          Протон</div>
        <nav class="nav">
          <a href="#">Блог</a>
          <a href="tel:+78312621876">+7 (831) 262-18-76</a>
          <a href="mailto:sales@proton-group.ru">sales@proton-group.ru</a>
          <button class="btn-outline">Заказать консультацию</button>
        </nav>
      </div>
    </header>


    <section class="section11">
      <div class="content">
        <h1 class="staircase-heading">
          <span class="line-1">Переводим → → → → →</span>
          <span class="line-2">на отечественные решения</span>
          <span class="line-3">компании любых размеров</span>
        </h1>

        <div class="bottom-row">
          <div class="buttons">
            <button class="btn-primary">Заказать консультацию</button>
            <a href="#" class="case-link">Читать кейс</a>
          </div>
          <p class="description">
            В короткие сроки реализуем проекты по переводу всех элементов IT-инфраструктуры на российские и Open-Source технологии, сохраняя эффективность централизованного управления.
          </p>
        </div>
      </div>
    </section>
    </div>

    <div class="section">
      <div class="container_ksu">
        <div style="display: flex; flex-direction: column; align-items: center">
          <h1 class="h1_ksu">Импортозамещение всех элементов
            инфраструктуры</h1>
          <div class="cards">
            <vue-cards v-for="(card, index) in cards" :index="index"  :card="card"/>
          </div>
        </div>
        <div class="animation import-substitution" style="display: flex; flex-direction: column; align-items: center">
          <div class="row">
            <img src="./assets/img/postgresql.svg">
            <img src="./assets/img/debian.svg">
            <img src="./assets/img/basealt.svg">
            <img src="./assets/img/astra-linux.svg">
            <img src="./assets/img/linux.svg">
          </div>
          <div class="row">
            <img src="./assets/img/libreoffice.svg">
            <img src="./assets/img/jitsy.svg">
            <img src="./assets/img/rocket.chat.svg">
          </div>
        </div>
        <p style="margin: 0; font-family: Onest, Arial, sans-serif; font-weight: 400; font-size: 24px;
text-align: center; margin-top: 40px; color: #5A606E">
          Внедряем отечественное и свободное программное обеспечение
        </p>
      </div>
    </div>

    <div class="section5">
      <h1 class="hs5">Наша команда инженеров, 1С-разработчиков и бизнес-аналитиков выполнит полный спектр работ по переходу на PostgreSQL под ключ:</h1>
      <card><span class="sp5">1 этап →</span> Аудит продуктивной инфраструктуры и производительности 1С</card>
      <card><span class="sp5">2 этап →</span> Подготовка инфраструктурного ландшафта</card>
      <card><span class="sp5">3 этап →</span> Адаптация программных продуктов 1С для использования с PostgreSQL</card>
      <card><span class="sp5">4 этап →</span> Установка и настройка PostgreSQL</card>
      <card><span class="sp5">5 этап →</span> Пилотный запуск, полноценная миграция</card>
      <card><span class="sp5">6 этап →</span> Техподдержка</card>
    </div>

    <div class="section6">
      <h1 class="hs5">С 2018 г. реализуем проекты по переводу инфраструктуры
        с MicrosoftSQL на PostgreSQL</h1>
      <div class="s6flex">
        <card2>
          <p>1С на Linux и PostgreSQL. Кейс внедрения для 2,5 тыс. пользователей</p>
          <img src="./img/img.png" alt="">
        </card2>

        <card2>
          <p>Перевод рабочих станций на Linux в федеральном автохолдинге</p>
          <img src="./img/img2.png" alt="">
        </card2>
      </div>
    </div>

    <div class="section7">
      <h1 class="hs5">Направления деятельности «Протон»</h1>
      <div class="s7flex">
      <card3>
        <template #left>
        <h1 class="hs7">IT-инфраструктура</h1>
        <img src="./img/illustration1.png" alt="">
        </template>
        <template #right>
        <card31>Построение IT-инфраструктуры и сопровождение серверных мощностей</card31>
          <card31>Внедрение и сопровождение отечественных и Open-Source решений</card31>
        </template>
      </card3>

      <card3>
        <template #left>
          <h1 class="hs7">Бизнес-аудит</h1>
          <img src="./img/illustration2.png" alt="">
        </template>
        <template #right>
          <card31>Диагностика и оптимизация бизнес-процессов предприятия, внедрение решений для автоматизации процессов бизнеса</card31>
          <card31>Разработка собственных решений для контроля, оптимизации и автоматизации процессов бизнеса (GANDIVA)</card31>
          <card31>Услуги по построению общих центров обслуживания (ОЦО) для среднего и крупного бизнеса</card31>
        </template>
      </card3>

      <card3>
        <template #left>
          <h1 class="hs7">1С:Франчайзи</h1>
          <img src="./img/illustration3.png" alt="">
        </template>
        <template #right>
          <card31>Квалифицированная разработка, адаптация и модификация продуктов на платформе 1С:Предприятие</card31>
          <card31>Техническая поддержка решений на платформе 1С:Предприятие</card31>
        </template>
      </card3>

      <card3>
        <template #left>
          <h1 class="hs7">Телематика</h1>
          <img src="./img/illustration3.png" alt="">
        </template>
        <template #right>
          <card31>Разработка собственных решений для мониторинга и управления автопарком (Протон Телематика)</card31>
        </template>
      </card3>
    </div>
    </div>

    <div class="section">
      <div class="container_ksu">
        <div class="line" style="margin-bottom: 80px"></div>
        <div class="animation quote" style="display: flex; align-items: center">
          <div class="column">
            <div style="margin-bottom: 48px">
              <img src="./assets/img/Vector.svg">
              <p style="font-size: 28px; font-weight: 400; font-family: Onest, Arial, sans-serif; color: #151515;
margin: 0; margin-top: 24px">
                Мы не внедряем коробочные версии, чтобы получить бонус от Франчайзи, а предлагаем индивидуальное решение под задачи бизнеса с учетом IT-ландшафта нашего клиента, даже если это нам невыгодно в краткосрочной перспективе.</p>
            </div>
            <div>
              <h2 style="font-family: Onest, Arial, sans-serif; font-weight: 400;
        font-size: 36px; color: #151515; margin: 0; margin-bottom: 24px">Статьи</h2>
              <div style="display: flex; align-items: center">
                <div class="column">
                  <a style="margin-bottom: 20px">Как эффективно контролировать и координировать работу бэк-офиса ↗</a>
                  <a>Как приживить бережливый офис в России ↗</a>
                </div>
                <div class="column" style="margin-left: 24px">
                  <a style="margin-bottom: 20px">Как сократить затраты на сотрудников офиса ↗</a>
                  <a>Как наведение порядка в отделе IT выросло в универсальную управленческую систему ↗</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column person" style="margin-left: 132px">
            <div style="overflow: hidden; width: 396px; height: 354px; border-radius: 40px;
        background-color: #FFD9D9">
              <img src="./assets/img/Malov.png" style="width: 487px; margin-top: -57px; filter: grayscale(100%);">
            </div>
            <h3 style="font-family: Onest, Arial, sans-serif;
        font-weight: 400; font-size: 36px; margin: 0; margin-top: 24px; color: #151515">Антон Малов</h3>
            <p style="margin: 0; color: #5A606E; font-family: Onest, Arial, sans-serif;
        font-size: 24px; font-weight: 400">Директор ООО «Протон»</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section9">
      <div class="s9flex">
        <card4>
          <template #image>
            <img src="./img/Kurmanov.png" alt="Фото 2" />
          </template>
          <template #name>
            Денис Курманов
          </template>
          <template #bio>
            Начальник технического блока,
            компания «Протон»
          </template>
          <template #keys>Кейсы 3</template>
          <template #stat>Статьи 4</template>
        </card4>

        <card4>
          <template #image>
            <img src="./img/Tapilin.png" alt="Фото 2" />
          </template>
          <template #name>
            Алексей Тапилин
          </template>
          <template #bio>
            Руководитель проектов,
            компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 3</template>
        </card4>

        <card4>
          <template #image>
            <img src="./img/Tulina.png" alt="Фото 2" />
          </template>
          <template #name>
            Надежда Тюлина
          </template>
          <template #bio>
            Руководитель проектов и бизнес-аналитик, компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 1</template>
        </card4>

        <card4>
          <template #image>
            <img src="./img/Davidov.png" alt="Фото 2" />
          </template>
          <template #name>
            Руслан Давыдов
          </template>
          <template #bio>
            Руководитель проектов,
            компания «Протон»
          </template>
          <template #keys>Кейсы 0</template>
          <template #stat>Статьи 3</template>
        </card4>

        <div class="card_form">
          <h1 style="font-size: 40px; margin-bottom: 20px; font-family: Onest, Arial, sans-serif;
           font-weight: 400; color: #151515">Остались вопросы?</h1>
          <h2 style="color: #5A606E; font-size: 1.5rem; margin-bottom: 40px; font-weight: 400">
            Наши эксперты оперативно предоставят консультацию и найдут оптимальное решение</h2>
          <div style="display: flex; justify-content: left; width: 100%">
            <button class="button_ksu" style="font-size: 18px; margin-bottom: 0;
            width: 85%">Заказать консультацию</button>
          </div>
        </div>
      </div>

    </div>

    <div class="section">
      <div class="container_ksu">
        <div class="line" style="margin-bottom: 60px"></div>
        <div class="footer" style="display: flex; justify-content: space-between; align-items: start">
          <div class="column">
            <img src="./assets/img/proton-logo.svg" style="width: 140px;">
          </div>
          <div class="column links">
            <a>Блог</a>
            <a>Согласие на обработку данных</a>
            <a>Политика конфиденциальности</a>
          </div>
          <div class="column links tel">
            <div style="margin-bottom: 32px">
              <a>+7 (831) 262-18-76</a>
            </div>
            <div style="margin-bottom: 16px">
              <a style="padding: 16px 28px">sales@proton-group.ru</a>
            </div>
            <p style="font-weight: 500; font-family: Onest, Arial, sans-serif;
          font-size: 20px; color: #151515; padding: 16px 28px; margin: 0">
              г. Нижний Новгород, ул. Родионова, д. 203, оф. 405</p>
            <p style="font-weight: 500; font-family: Onest, Arial, sans-serif;
          font-size: 20px; color: #151515; padding: 16px 28px; margin: 0">
              г. Москва, пр-д Электродный, д. 8а, оф. 19</p>
          </div>
          <div class="column tel" style="display: flex; flex-direction: column; align-items: end">
            <button class="button_ksu">Заказать консультацию</button>
            <div style="display: flex; align-items: center; justify-content: right">
              <a style="padding: 16px"><img src="assets/img/vk.svg"></a>
              <a style="padding: 16px"><img src="assets/img/youtube.svg"></a>
              <a style="padding: 16px"><img src="assets/img/telegram.svg"></a>
              <a style="padding: 16px"><img src="assets/img/gandiva.svg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
/*Стили Ани*/
*{
  font-size: 1.1rem;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
}
.page {
  background: linear-gradient(to bottom, #B2DAFF, #F2F5FD);
  min-height: 100vh;
}
.section1{
  border-bottom: 2px solid gray;
}
.section5, .section6, .section9{
  display: grid;
  justify-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 50px;
  padding-top: 50px;
}
.section7{
  display: grid;
  justify-items: center;
}
.app-header {
  background: #ffffff;
  padding: 16px 0;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  width: 95%;
  justify-self: center;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hs5{
  width: 70%;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 2.5rem;
}
.sp5{
  color: gray;
  font-size: 1.3rem;
}
.section5 p:nth-child(7){
  border: none;
}
.s6flex{
  display: flex;
  justify-content: center;
}
.s7flex, .s9flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.s7flex img{
  width: 200px;
}
.logo-placeholder {
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.s6flex p{
  font-size: 1.3rem;
}
.s6flex img{
  width: 55%
}
.hs7{
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav a{
  text-decoration: none;
  color: #2e3192;
  font-weight: bold;
}

.nav button{
  height: 50px;
  color: #2e3192;
  font-weight: bold;
}

.btn-outline {
  background: #f4f7ff;
  border-radius: 12px;
  padding: 8px 16px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-outline:hover {
  background: #e4eaff;
}


.section11 {
  padding: 60px 24px;
}

.content {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.staircase-heading {
  font-size: 5rem;
  line-height: 1.3;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.staircase-heading .line-1 {
  display: flex;
  justify-content: start;
  font-size: 4rem;
  font-weight: 300;
}

.staircase-heading .line-2 {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: 300;
}

.staircase-heading .line-3 {
  display: flex;
  justify-content: end;
  font-size: 4rem;
  font-weight: 300;
}

.arrows {
  font-weight: 100;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.buttons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.buttons button{
  background: #2e3192;
  border-radius: 15px;
}

.btn-primary {
  background: #1a1b50;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 24px;
  font-weight: 500;
  cursor: pointer;
}

.case-link {
  color: #1a1b50;
  text-decoration: none;
  font-weight: 500;
}

.description {
  max-width: 600px;
  color: #1a1b50;
}

@media screen and (max-width: 941px){
  .s6flex{
    display: grid;
    justify-items: center;
  }
}

/*Стили Ксюши*/
.section{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_ksu{
  width: 90%;
}
.cards{
  display: flex;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
}
.h1_ksu{
  color: #151515;
  text-align: center;
  font-weight: 400;
  font-family: Onest, Arial, sans-serif;
  font-size: 48px;
  width: 1030px;
}
.row{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
}
.line{
  background-color: #151515;
  height: 1px;
  margin-top: 100px;
}
.column{
  display: flex;
  flex-direction: column;
}
.column a{
  color: #2E3192;
  font-weight: 500;
  font-family: Onest, Arial, sans-serif;
  font-size: 20px;
  text-align: left;
}
.column a:hover{
  color: #151515;
  cursor: pointer;
}
.links a{
  padding: 16px 28px;
}
.tel a:hover{
  background-color: #FFFFFF;
  width: 100%;
  color: #2E3192;
  border-radius: 20px;
}
.button_ksu{
  border-radius: 20px;
  padding: 16px 28px;
  background-color: #2E3192;
  font-weight: 500;
  color: white;
  font-size: 20px;
  font-family: Onest, Arial, sans-serif;
  width: 100%;
  margin-bottom: 24px;
}
.footer .column{
  width: 372px;
}
.button_ksu:hover{
  background-color: #151515;
}

.animation.import-substitution img{
  transform: translateX(-20%);
  transition: all 2s;
  opacity: 0;
}
.animation.import-substitution.active img{
  transform: translateX(0);
  opacity: 1;
}
.animation.quote .person{
  transform: translateX(100%);
  transition: all 0.7s;
}
.animation.quote.active .person{
  transform: translateX(0);
}

.card_form{
  width: 20rem;
  margin: 10px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  padding: 15px 25px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card_form:hover{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-20px);
}

:deep(){
  .block{
  background-color: white;
}
}
</style>
