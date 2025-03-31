<script setup>
const route = useRoute()

useHead({
    titleTemplate: title => title ? `${title} - Дмитрий Лисовский` : "Fullstack Developer Dmitry Lisovsky",
    htmlAttrs: {
        lang: "fr"
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Дмитрий Лисовский" },
        { name: "copyright", content: "Дмитрий Лисовский" },
        { name: "keywords", content: "Дмитрий Лисовский,Dmitry Lisovsky,Myrtex,Миртех,development,web,yaonkey" },
        { name: "description", content: `Fullstack-разработчик ${useGetAge()}, ${getExp()} профессионального опыта в веб-разработке` },
    ],
    link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: `https://yaonkey.github.io${route.fullPath !== "/" ? route.fullPath : ""}` },
    ],
})

useSeoMeta({
    ogType: "website",
    twitterCard: "summary_large_image",
})

function getExp() {
    const date = new Date()
    const currentYear = date.getFullYear()
    const startYear = 2022

    const exp = currentYear - startYear

    return `${exp + 1} ans`
}
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#93c5fd" />
        <NuxtPage />
    </NuxtLayout>
</template>
