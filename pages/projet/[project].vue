<script setup>
const route = useRoute()

const { data: project } = await useAsyncData(() => queryContent("projet").where({ _path: route.fullPath }).findOne())

useSeoMeta({
    title: project.value.title,
    ogTitle: project.value.title,
    twitterTitle: project.value.title,
    description: project.value.description,
    ogDescription: project.value.description,
    twitterDescription: project.value.description,
})
</script>

<template>
    <div id="project-markdown">
        <ContentDoc />
    </div>
</template>
