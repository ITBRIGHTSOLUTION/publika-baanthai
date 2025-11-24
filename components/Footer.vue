<template>
  <div id="Hubung" class="bg-gray text-darkgray grow z-50 footer">
    <section class="container mx-auto text-xs lg:text-base">
      <div class="md:grid md:grid-cols-3 items-center mt-16 mb-5 mx-5 mr:mr-7 border-opacity-10">
        <div class="mx-auto text-center">
          <nuxt-link  to="/">
            <img src="../assets/images/BT3-logo.webp" alt="" class="max-w-[250px] w-full lg:w-auto mx-auto mb-3" />
          </nuxt-link>
        </div>
        <section>
          <div class="my-3">
            <div class="text-primary font-bold">Baan Thai 3 Restaurant Sdn. Bhd.</div>
            <div class="text-sm">(1522207-W)</div>
          </div>

          <div class="my-3">
            <div class="text-primary font-bold">Call Us</div>
            <a href="tel:+60186649135" class="hover:text-primary transition-colors">018-664 9135</a>
          </div>

          <div class="my-3">
            <div class="text-primary font-bold">Location</div>
            <div>A1-G2-08, Jln Dutamas 1, Solaris Dutamas, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</div>
          </div>
        </section>

        <div class="flex md:justify-end mt-8 lg:mt-0">
          <a href="https://api.whatsapp.com/send?phone=60186649135" target="_blank">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-[45px] text-primary" />
          </a>
          <a href="https://www.instagram.com/baanthai_publika/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" class="w-[45px] text-primary" />
          </a>
          <a href="https://www.facebook.com/baanthaipublika" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="w-[35px] text-primary" />
          </a>
          <a href="https://www.tiktok.com/@baanthai_publika" target="_blank">
            <font-awesome-icon :icon="['fab', 'tiktok']" class="w-[45px] text-primary" />
          </a>
        </div>
      </div>
    </section>
    
    <div class="text-center mt-12 mb-5 mx-auto text-xs md:text-sm lg:text-base">&copy; 2024 All rights reserved by Baan Thai @ Publika</div>
  </div>

</template>