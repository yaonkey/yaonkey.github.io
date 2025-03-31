<script setup>
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid"

const cvUrl = "https://career.habr.com/yaonkey/print.pdf"
const seoTitle = "Мое резюме | Дмитрий Лисовский"
const seoDescription = "Резюме Дмитрия Лисовского - Fullstack-разработчика"

useSeoMeta({
    title: "Мое резюме",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDescription,
    ogDescription: seoDescription,
    twitterDescription: seoDescription,
})
</script>

<template>
    <div class="container mx-auto px-5">
        <h1 class="mt-28 text-center text-5xl sm:text-left md:mt-36">Резюме</h1>
        <div class="my-16 grid gap-10 xl:grid-cols-2 xl:gap-y-32">
            <div class="flex items-center justify-center">
                <p class="text-4xl font-bold">Обо мне</p>
            </div>
            <div class="space-y-5">
                <p>
                    В настоящее время являюсь
                    <span class="font-bold">Fullstack-разработчик</span>
                    в компании
                    <a class="hypertext" href="https://myrtex.ru/" rel="noopener" target="_blank">
                        Myrtex
                    </a>
                </p>
                <p>
                    Окончил
                    <a class="hypertext" href="https://www.mirea.ru/education/college/about-college/" rel="noopener"
                        target="_blank">
                        Колледж программирования и информационных технологий
                    </a>
                </p>
                <p>Занимаюсь программированием с 11-ти лет, начав путь с создания модов на Minecraft. Так увлекся кодом,
                    что изучал множество различных технологий, потрогал разные сферы, а остановился на веб-разработке.
                    Во время обучения в колледже почти все работы выполнял на Python, а первым коммерческим языком стал
                    PHP. Также достаточно давно для небольших проектов люблю использовать NodeJS, использую его для
                    совершенно различных целей, включая дипломный проект во время учебы.</p>
                <div class="mt-2 flex justify-center">
                    <a class="button flex w-fit items-center" :href="cvUrl" target="_blank">
                        <DocumentArrowDownIcon class="mr-1 h-6 w-6" />
                        <span>Скачать мое резюме</span>
                    </a>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <p class="mt-20 text-4xl font-bold md:mt-0">Опыт</p>
            </div>
            <div class="section">
                <div class="card">
                    <p class="title">
                        Myrtex
                        <span class="font-normal">| Fullstack-разработчик</span>
                    </p>
                    <span class="date">Август 2024 - настоящее время</span>
                    <div class="infos">
                        <p class="desc">Разработка интернет-ресурса, позволяющего пользователям создавать международные
                            конкурсы, принимать и обрабатывать заявки на конкурсы. </p>
                    </div>
                    <span class="skill">SQL</span>
                    <span class="skill">Docker</span>
                    <span class="skill">PHP</span>
                    <span class="skill">Linux</span>
                    <span class="skill">NodeJS</span>
                    <span class="skill">Javascript</span>
                    <span class="skill">Webpack</span>
                    <span class="skill">SCSS</span>
                    <span class="skill">Laravel</span>
                    <span class="skill">Phalcon</span>
                </div>

                <div class="card">
                    <p class="title">
                        Пивточка
                        <span class="font-normal">| Fullstack-разработчик</span>
                    </p>
                    <span class="date">Июнь 2023 - Июнь 2024</span>
                    <div class="infos">
                        <p class="desc">Разработка новых модулей в CRM, написанной на PHP 8 с использованием ModX.
                            Некоторые компоненты использовали Symfony. От самого движка ModX почти ничего не осталось,
                            так как хотелось структурировать код под свои нужды — родным остался только шаблонизатор и
                            xPDO.</p>
                    </div>
                    <span class="skill">PostgreSQL</span>
                    <span class="skill">MySQL</span>
                    <span class="skill">PHP</span>
                    <span class="skill">Linux</span>
                    <span class="skill">NodeJS</span>
                    <span class="skill">Javascript</span>
                    <span class="skill">Redis</span>
                    <span class="skill">CI/CD</span>
                    <span class="skill">Rest</span>
                    <span class="skill">Laravel</span>
                </div>

                <div class="card">
                    <p class="title">
                        BiblioVK
                        <span class="font-normal">| Fullstack-разработчик</span>
                    </p>
                    <span class="date">Апрель 2022 - Декабрь 2023</span>
                    <div class="infos">
                        <p class="desc">Разработка плеера для аудиокниг, автоматизация добавления аудиокниг с
                            метаинформацией на сайты рефералов, наставничество, создание лендингов для проектов
                            компании, доработка CRM.</p>
                    </div>
                    <span class="skill">MySQL</span>
                    <span class="skill">PHP</span>
                    <span class="skill">Linux</span>
                    <span class="skill">Elasticsearch</span>
                    <span class="skill">Javascript</span>
                    <span class="skill">Memcache</span>
                    <span class="skill">NuxtJS</span>
                    <span class="skill">Docker</span>
                    <span class="skill">NodeJS</span>
                </div>

                <div class="card">
                    <p class="title">
                        AmoCRM
                        <span class="font-normal">| Backend-разработчик</span>
                    </p>
                    <span class="date">Январь 2022 - Март 2022</span>
                    <div class="infos">
                        <p class="desc">Разработка интеграционных модулей, интеграция с различными сервисами,
                            тестирование, работа по scrum, исправление багов.</p>
                    </div>
                    <span class="skill">PHP</span>
                    <span class="skill">MySQL</span>
                    <span class="skill">Laravel</span>
                    <span class="skill">Javascript</span>
                    <span class="skill">Redis</span>
                    <span class="skill">Symfony</span>
                    <span class="skill">Docker</span>
                    <span class="skill">NodeJS</span>
                </div>

                <div class="card">
                    <p class="title">
                        EasyIT
                        <span class="font-normal">| Backend-разработчик</span>
                    </p>
                    <span class="date">Июль 2021 - Октябрь 2021</span>
                    <div class="infos">
                        <p class="desc">Разработка и поддержка интернет-магазинов с использованием различных движков.
                            Разработка парсеров для занесения информации из других сайтов.</p>
                    </div>
                    <span class="skill">PHP</span>
                    <span class="skill">MySQL</span>
                    <span class="skill">CSS</span>
                    <span class="skill">Javascript</span>
                    <span class="skill">Wordpress</span>
                    <span class="skill">Webasyst</span>
                    <span class="skill">NodeJS</span>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <p class="mt-20 text-4xl font-bold md:mt-0">Дипломы</p>
            </div>
            <div class="section">
                <div class="card">
                    <p class="title">
                        Прохождение практики на заводе Сапфир
                        <span class="font-normal">| Стажировка</span>
                    </p>
                    <span class="date">Апрель 2021 - Май 2021</span>
                    <div class="infos">
                        <p class="desc">Разработка систем и компонентов для дешифрования входящих данных, получаемых со
                            спутника</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">
                        Колледж приборостроения и информационных технологий при РТУ МИРЭА
                        <span class="font-normal">| Техник-программист</span>
                    </p>
                    <span class="date">Сентябрь 2017 - Июль 2021</span>
                    <div class="infos">
                        <p class="desc">Обучение программированию на различных языках программирования. Активное
                            использование веб-технологий. Менеджмент.</p>
                    </div>
                </div>

                <div class="card">
                    <p class="title">Курсы веб-разработки</p>
                    <span class="date">Октябрь 2014 - Июль 2017</span>
                    <div class="infos">
                        <p class="desc">Использование различных технологий для создания сайтов. Использование связки
                            HTML+CSS+JS. 3D моделирование.</p>
                        <p class="add">С отличием</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
