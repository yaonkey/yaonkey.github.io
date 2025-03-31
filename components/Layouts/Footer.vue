<template>
    <footer
        v-if="$route.fullPath.slice(0, 8) !== '/projet/'"
        class="py-5 text-center text-xs"
    >
        <p>
            &copy; 2020 -
            <span v-text="new Date().getFullYear()" />
            yaonkey. Все права защищены.
        </p>
    </footer>
</template>
