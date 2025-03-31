<script setup>
const seoTitle = "Fullstack-разработчик - Дмитрий Лисовский"
const seoDescription = "Дмитрий Лисовский - Fullstack-разработчик - Портфолио и Проекты."

useSeoMeta({
    title: "Fullstack разработчик",
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    ogDescription: seoDescription,
    twitterDescription: seoDescription
})
</script>

<template>
    <div>
        <HomepageWelcome />
        <HomepageAbout />
        <HomepageProjetcs />
        <HomepageContactMe />
    </div>
</template>
