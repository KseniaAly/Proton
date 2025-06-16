<script setup>
import CardPeople from "~/components/ann/Card-people.vue";
</script>

<template>
  <div class="section9">
    <div class="containerr">
      <div class="s9flex">
        <card-people>
          <template #image>
            <img src="/img/Kurmanov.png" alt="Денис Курманов" />
          </template>
          <template #name>Денис Курманов</template>
          <template #bio>
            Начальник технического блока, компания «Протон»
          </template>
          <template #keys>Кейсы 3</template>
          <template #stat>Статьи 4</template>
          <template #cases>
            <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proton-group.ru/pdf/protonGroup/%D0%9A%D0%95%D0%99%D0%A1_%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%B2_%D0%98%D0%BD%D1%84%D1%80%D0%B0%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0.pdf" class="content-link">Построение инфраструктуры на производственном предприятии («Фабрика композитов») ↗</a>
            <a href="" class="content-link">Кейс переноса 1С международной сети пиццерий ДодоПицца в Yandex.Cloud ↗</a>
            <a href="#" class="content-link">Кейс по Перевод 1500+ рабочих станций на OpenSource-решения в федеральном автохолдинге ↗</a>
          </template>
          <template #articles>
            <a href="#" class="content-link">Как перевести на Linux крупный бизнес ↗</a>
            <a href="#" class="content-link">Вечером Windows — утром Linux ↗</a>
            <a href="#" class="content-link">Как перейти на свободное ПО без сбоев в работе и рисков для компании? ↗</a>
            <a href="#" class="content-link">Статья о 1С на Linux и PostgreSQL. Кейс внедрения для 2,5 тыс. пользователей ↗</a>
          </template>
        </card-people>
        <card-people>
          <template #image>
            <img src="/img/Tapilin.png" alt="Алексей Тапилин" />
          </template>
          <template #name>Алексей Тапилин</template>
          <template #bio>
            Руководитель проектов, компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 3</template>
          <template #cases>
            <a href="#" class="content-link">OpenSource-решение для коммуникаций Jitsi Meet ↗</a>
          </template>
          <template #articles>
            <a href="#" class="content-link">Организация контакт-центров на свободном ПО. Кейс ГК «Агат» ↗</a>
            <a href="#" class="content-link">1С+Jitsi Meet = новый канал коммуникаций ↗</a>
            <a href="#" class="content-link">В CRM 1С добавлен видеосервис ↗</a>
          </template>
        </card-people>
        <card-people>
          <template #image>
            <img src="/img/Tulina.png" alt="Надежда Тюлина" />
          </template>
          <template #name>Надежда Тюлина</template>
          <template #bio>
            Руководитель проектов и бизнес-аналитик, компания «Протон»
          </template>
          <template #keys>Кейсы 1</template>
          <template #stat>Статьи 1</template>
          <template #cases>
            <a href="#" class="content-link">Внедрение ERP-системы на производственном предприятии «Фабрика композитов» ↗</a>
          </template>
          <template #articles>
            <a href="#" class="content-link">"ДАЙДО МЕТАЛЛ РУСЬ". Переход с 1С УПП на современные ERP-системы ↗</a>
          </template>
        </card-people>
        <card-people>
          <template #image>
            <img src="/img/Davidov.png" alt="Руслан Давыдов" />
          </template>
          <template #name>Руслан Давыдов</template>
          <template #bio>
            Руководитель проектов, компания «Протон»
          </template>
          <template #keys>Кейсы 0</template>
          <template #stat>Статьи 3</template>
          <template #cases>
            <div class="empty-content">Пока нет кейсов</div>
          </template>
          <template #articles>
            <a href="#" class="content-link">Как мы расширили возможности 1С! Кейс Саратовского молочного комбината ↗</a>
            <a href="#" class="content-link">4 шага к улучшению бизнес-процессов в компании ↗</a>
            <a href="#" class="content-link">Переход на процессное управление. Кейс сети аптек «Максавит» ↗</a>
          </template>
        </card-people>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
*{
  font-size: 1.1rem;
  font-family: 'Onest';
  margin: 0;
  padding: 0;
}

.section9{
  display: grid;
  justify-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 50px;
  padding-top: 50px;
}

.containerr{
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

.content-link {
  display: block;
  padding: 8px 0;
  color: #344ade;
  text-decoration: none;
  transition: color 0.3s ease;

}

.content-link:nth-child(1) {
  margin-top: 60px;
}

.empty-content {
  margin-top: 60px;
}

.content-link:hover {
  color: #35353a;
}
.s9flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>