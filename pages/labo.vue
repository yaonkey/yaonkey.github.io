<script setup>
const seoTitle = "Лаборатория | Дмитрий Лисовский"
const seoDescription = "Лаборатория Дмитрий Лисовский - Fullstack-разработчик"

useSeoMeta({
    title: "Лаборатория",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDescription,
    ogDescription: seoDescription,
    twitterDescription: seoDescription,
})
</script>

<template>
    <div class="flex h-screen flex-col items-center justify-center text-center text-2xl md:text-5xl">
        <NuxtLink
            rel="noopener"
            target="_blank"
            href="https://github.com/yaonkey/blooengine"
            class="text-speed-up text-speed-down text"
        >
            Движок для создания сайтов
        </NuxtLink>
        <NuxtLink
            rel="noopener"
            target="_blank"
            href="https://github.com/yaonkey/random-recipes"
            class="text-speed-up text-2"
        >
            Небольшой сервис для генерации рецептов
        </NuxtLink>
    </div>
</template>

<style scoped>
a {
    transition: all 300ms;
    padding: 1rem;
    list-style: none;
    text-decoration: none;
    display: inline-block;
    position: relative;
    z-index: 0;
}

a:hover {
    transform: scale(1.3);
    text-decoration: none;
    color: white;
}

.text-speed-down {
    text-align: center;
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    letter-spacing: 1px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: shine 3s linear infinite;
    animation: shine 3s linear infinite;
}

.text-speed-up {
    text-align: center;
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    letter-spacing: 1px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: shine 3.5s linear infinite;
    animation: shine 3.5s linear infinite;
}

.text {
    background-image: linear-gradient(to right, #77f, #33d0ff, #25ffbb, #33d0ff, #77f);
}

.text-2 {
    background-image: linear-gradient(to right, rgb(217, 139, 228), rgb(198, 129, 255), #c125ff, rgb(198, 129, 255), rgb(217, 139, 228));
}

.text-3 {
    background-image: linear-gradient(to right, rgb(167, 248, 181), #30db47, #178b2a, #30db47, rgb(167, 248, 181));
}

.text-4 {
    background-image: linear-gradient(to right, rgb(235, 255, 119), #ffb833, #ff6325, #ffb833, rgb(235, 255, 119));
}

.text-5 {
    background-image: linear-gradient(to right, rgb(146, 68, 68), #ff4444, #ff0000, #ff4444, rgb(146, 68, 68));
}

@-webkit-keyframes shine {
    to {
        background-position: 200% center;
    }
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}
</style>
