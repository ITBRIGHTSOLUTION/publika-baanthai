<template>
  <div class="menu-bar sticky top-0 z-50"> 
    <nav class="bg-gray relative z-50">
      <div class="container flex flex-wrap items-center justify-between mx-auto py-1 px-3 lg:px-2 xl:px-3">
        <nuxt-link @click="closeMenu()" to="/" class="flex items-center md:w-auto">
          <img src="../assets/images/BT3-logo.webp" class="md:h-20 h-12 xl:mr-3" alt="Baan Thai Logo" />
        </nuxt-link>

        <div class="flex items-center justify-center">
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
          

        <div class="w-full lg:flex lg:w-auto uppercase items-center text-center menu" id="navbar-default" v-show="isMenuOpen" ref="menu">
          <ul class="font-bold flex flex-col p-4 lg:p-0 xl:mr-5 mt-4 rounded-lg lg:flex-row lg:space-x-4 xl:space-x-4 lg:mt-0">
            <!-- <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="uppercase px-6 py-2" to="https://catering.baanthaipublika.com" exact-active-class="active">Catering Service</nuxt-link>
            </li> -->
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="px-8 py-2" to="/jommakan2026" target="_blank" exact-active-class="active">JOM MAKAN</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" class="px-8 py-2" to="https://drive.google.com/file/d/17IdlgDNTpTfrbjZJ-pAV3yyvGwiXO6Ql/view?usp=drive_link" target="_blank" exact-active-class="active">MENU</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" to="https://weborder.zeoniq.com/?parameters=MDE2NjV8aHR0cHM6Ly93ZWJvcmRlcmFwaTEwMC56ZW9uaXEuY29tL3w0MzgwMS0xNDA1MXx8MDAzfDAzLVNETS1DMXx8MHx8fDB8fHx8fHx8MXxPTw%3D%3D&p2=" target="_blank" class="px-8 py-2">ONLINE ORDER</nuxt-link>
            </li>
            <li class="my-2 lg:my-0">
              <nuxt-link @click="closeMenu()" to="https://wa.link/sfeypg" target="_blank" class="bg-primary text-white mx-6 px-6 py-2 rounded-full">HUBUNGI KAMI</nuxt-link>
            </li>
          </ul>
          <!-- <div>
            <nuxt-link to="https://drive.google.com/file/d/1SarQEYhfWAqUNkFflbBNz_UEoluLDwmO/view?usp=drive_link" target="_blank" class="px-8 py-2">JOM BUKA MENU</nuxt-link>
          </div> -->
          <!-- <div>
            <nuxt-link class="uppercase" to="https://catering.baanthaipublika.com">Catering Service</nuxt-link>
          </div>
          <div>
            <nuxt-link to="https://drive.google.com/file/d/17IdlgDNTpTfrbjZJ-pAV3yyvGwiXO6Ql/view?usp=drive_link" target="_blank" class="px-8 py-2">MENU</nuxt-link>
          </div>
          <div>
            <nuxt-link to="#Galeri" class="px-8 py-2">GALERI</nuxt-link>
          </div>
          <div>
            <nuxt-link to="https://wa.link/sfeypg" target="_blank" class="bg-primary text-white mx-6 px-6 py-2 rounded-full">HUBUNGI KAMI</nuxt-link>
          </div> -->
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isMenuOpen: false,
    };
  },

  mounted() {
    // initCollapses();
  },

  methods: {

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        // Add a click event listener to the document when the menu is open
        document.addEventListener('click', this.closeMenuOnClickOutside);
      } else {
        // Remove the click event listener when the menu is closed
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    closeMenuOnClickOutside(clickEvent) {
      const header = this.$el; // Reference to the header element
      const menu = this.$refs.menu; // Reference to the menu element
      // Check if the click occurred outside the header and the menu
      if (!header.contains(clickEvent.target) && !menu.contains(clickEvent.target)) {
        this.isMenuOpen = false;
        // Remove the click event listener
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    // Close the menu when a navigation link is clicked
    closeMenu(type = null) {
      this.isMenuOpen = false;
      if (type) {
        useTrackEvent(type, {
          method: 'Website'
        })
      }
    },


  },
};
</script>