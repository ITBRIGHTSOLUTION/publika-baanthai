<template>
  <div class="relative">
    <a href="https://wa.link/sfeypg" target="_blank">
      <swiper
        slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/images/BT3-main.webp" class="relative" alt="">
          <div class="bg-main">
            <div class="relative">
              <div class="lg:text-3xl xl:text-5xl text-main">
                MALAYSIA BOLEH ! <br>
                <div class="flex my-1 md:my-2 lg:my-5">
                  <span class="mr-3">
                    <img src="../assets/images/world-flag.webp" alt="" class="w-[15px] md:w-[35px] xl:w-[50px]">
                  </span>
                  <span>🏆</span><br>
                </div>
                "BAAN THAI" <br>
                RESTORAN YANG <br>
                MEMENANGI <br>
                PERTANDINGAN <br>
                MASAK <br>
                ANTARABANGSA DI <br>
                BANGKOK !
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <img src="../assets/images/Website-Slider_Ramadan.webp" alt="" class="w-full">
        </swiper-slide> -->
      </swiper>
    </a>
    
  </div>

  

  <section class="bg-marblr py-16 md:pt-24 md:pb-24">
    <div class="container max-w-7xl mx-auto md:grid md:grid-cols-2 flex flex-col-reverse lg:flex-row px-0 md:px-5 lg:px-0 items-center">
      <div class="mx-8 md:mx-8 lg:mx-12 xl:mx-20 mt-5 lg:mt-0">
        <div class="text-sm lg:text-base xl:text-xl text-intro">
          Selamat datang ke Baan Thai @ Publika. Kami berusaha untuk membawa
          hakikat sebenar masakan Thai. Setiap hidangan adalah menggunakan
          bahan-bahan autentik yang diperoleh dari Thailand.  Kami juga amat
          bangga untuk berkongsi bahawa kami telah meraih tempat ketiga
          dalam pertandingan World Kahprao Day di Bangkok. Mari datang ke
          Baan Thai untuk makanan Thai yang meraikan warisan kaya masakan
          Thailand.
        </div>
        <div class="font-bold mt-5 lg:mt-12 text-center lg:text-left md:mx-5 text-sm">
          <a
            class="bg-primary text-white px-5 lg:px-12 py-1 mr-3 md:mr-5 rounded-full"
            href="https://www.google.com/maps/dir//A1-G2,+08,+Jln+Dutamas+1,+Solaris+Dutamas,+50480+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur/@3.1708455,101.5822906,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc4962758b03e1:0x18ef224696a780d7!2m2!1d101.6646926!2d3.1708488?entry=ttu"
          >Google Map</a>
          <a
            class="bg-gray text-dark px-5 lg:px-12 py-1 rounded-full"
            href="https://www.waze.com/live-map/directions?to=ll.3.170865%2C101.664712"
          >Waze</a>
        </div>
      </div>
      <div class="mx-5 md:mx-5 lg:mx-12 xl:mx-20">
        <img src="../assets/images/BT3 2.webp" alt="">
      </div>
    </div>
  </section>

  <section>
    <iframe class="h-[200px] md:h-[350px] lg:h-[500px] xl:h-[750px]" width="100%" height="750" src="https://www.youtube.com/embed/xOA19SXI0zE?si=KaDX878orlc0Mo9p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>

  <section id="Galeri" class="bg-marblr py-16 md:pt-24 md:pb-24">
    <h1 class="uppercase text-2xl lg:text-5xl text-black font-black text-center mb-5 lg:mb-12">GALERI</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 container max-w-7xl mx-auto px-0 md:px-16 lg:px-0 text-center text-sm font-medium">
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-tomyamputih.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Sup Tom Yam Putih- Makanan Laut</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-pandanchicken.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Ayam Goreng Pandan</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-salad.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Papaya Salad</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-nasigoreng.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Nasi Goreng Nenas</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/DagingThaiBasil.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Daging Thai Basil</div>
      </div>

      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-ikan.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Ikan Bakar Garam</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-tomyammerah.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Sup Tom Yam Merah- Makanan Laut</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-ikanlimau.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Ikan Stim dengan Sos Limau Pedas</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-kekudang.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Kek Udang Goreng</div>
      </div>
      <div class="mx-1 md:mx-3 mb-4 md:mb-8">
        <img src="../assets/images/BT3-kangkunggoreng.webp" alt="" class="p-2 xl:p-0">
        <div class="px-4 pt-2">Kangkung Goreng</div>
      </div>
      
    </div>
  </section>
</template>


<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';


  const modules = [Autoplay, Pagination, Navigation];

  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Autoplay, Pagination, Navigation],

  //     };
      
  //   },
  // };
</script>
