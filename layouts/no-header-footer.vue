<template>
  <Head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- flowbite -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">

    <Title>Baan Thai</Title>
    <Link rel="icon" type="image/ico" href="/favicon.ico"/>
  </Head>
  <div class="flex flex-col min-h-full">
    <slot />
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp();
if (nuxtApp.$fb) {
  nuxtApp.$fb.enable();
}
</script>
