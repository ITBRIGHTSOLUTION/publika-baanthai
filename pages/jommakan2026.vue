<template>
  <div class="bg-[#f6e6ac]">
    <div class="jom-makan-page min-h-screen max-w-[1000px] mx-auto overflow-x-hidden relative">
      <!-- Decorative Top Left Element -->
      <div class="absolute left-14 sm:left-20 top-10 sm:top-16 z-40 w-16 md:w-32 lg:w-35 -ml-12 -mt-12 pointer-events-none opacity-80">
        <img src="../assets/images/jom-makan/JOMMAKAN-13.webp" alt="Top Left Decoration" class="w-full" />
      </div>

      <!-- Floating Side Element -->
      <div class="absolute left-0 top-[30%] sm:top-[33%] z-40 w-20 md:w-32 lg:w-48 -ml-10 pointer-events-none">
        <img src="../assets/images/jom-makan/JOMMAKAN-06.webp" alt="Floating Decoration" class="w-full" />
      </div>

      <div class="container mx-auto flex flex-col items-center">
        <!-- Top Decoration -->
        <div class="w-full flex justify-center max-w-[80%] mr-0 ml-auto">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL02.webp" alt="Decoration" class="w-full" />
        </div>

        <!-- Main Title -->
        <div class="-mt-10 sm:-mt-15 mb-4 px-8 max-w-[800px]">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL-01.webp" alt="Jom Makan Title" class="w-full" />
        </div>

        <!-- Food Showcase -->
        <div class="mb-8 w-full px-8">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL03.webp" alt="Food Showcase" class="w-full" />
        </div>

        <!-- Intro Text -->
        <div class="mb-6 sm:mb-12 w-full max-w-[800px] px-4">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL04.webp" alt="Set hidangan Thai gaya sharing" class="w-full" />
        </div>

        <!-- Set A -->
        <div class="w-full flex justify-center">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL05.webp" alt="Set A RM169++" class="w-full max-w-[900px]" />
        </div>

        <!-- Set B -->
        <div class="-mt-4 sm:-mt-14 mb-2 w-full flex justify-center">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL06.webp" alt="Set B RM319++" class="w-full max-w-[900px]" />
        </div>

        <!-- Additional Options -->
        <div class="-mt-4 sm:-mt-10 mb-6 sm:mb-12 w-full flex justify-center">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL07.webp" alt="Pilihan Tambahan" class="w-full max-w-[900px]" />
        </div>

        <!-- Authentic Title Decoration -->
        <div class="mb-4">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL08.webp" alt="Masakan Thai Asli" class="w-full max-w-[600px]" />
        </div>

        <!-- Featured Dishes Grid -->
        <div class="-mt-4 sm:-mt-14 w-full flex justify-center">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL09.webp" alt="Featured Dishes" class="w-full max-w-[950px]" />
        </div>

        <!-- Bottom Section (Notes, CTA, Maps) -->
        <div class="relative w-full">
          <img src="../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL10.webp" alt="Nota Tempahan & Booking" class="w-full" />
          
          <!-- Overlay for Clickable areas -->
          <div class="absolute bottom-[40%] right-[16%] w-[28%] h-[15%]">
              <a href="https://wa.link/sfeypg" target="_blank" class="block w-full h-full" title="Tempah Sekarang"></a>
          </div>

          <div class="absolute bottom-[21%] right-[33%] w-[12%] h-[6%]">
              <a href="https://maps.app.goo.gl/i8vM7gdzahPUBtbj9" target="_blank" class="block w-full h-full" title="Google Maps"></a>
          </div>

          <div class="absolute bottom-[21%] right-[15%] w-[12%] h-[6%]">
              <a href="https://waze.com/ul?q=A1-G2-08%2C%20Jln%20Dutamas%201%2C%20Solaris%20Dutamas%2C%2050480%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur" target="_blank" class="block w-full h-full" title="Waze"></a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="w-full py-5 text-center text-[#333333] font-['Montserrat'] text-sm sm:text-base">
        © 2026 All rights reserved by Baan Thai Malaysia
      </footer>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "no-header-footer",
});

export default {
  head() {
    return {
      title: 'Jom Makan - Baan Thai',
    };
  },
};
</script>

<style scoped>
.jom-makan-page {
  background-image: url('../assets/images/jom-makan/JOM-MAKAN-WEB-PAGE-FULL11.webp');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #f7e8b5; /* Fallback color */
}
</style>
