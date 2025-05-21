<template>
  <div class="relative bg-tertiary text-white mt-10">
    <div
      class="absolute w-full h-full -top-6 bg-tertiary [mask:url('/img/wave.svg')_repeat-x_top] [mask-size:auto_100%] pointer-events-none"
    />
    <div
      class="relative z-10 pt-40 pb-36 max-w-[1440px] mt-10 mx-auto px-5 md:px-8 xl:px-10 grid items-center grid-cols-12 gap-6 md:gap-8 lg:gap-10"
    >
      <div class="col-span-12 h-[450px] md:col-span-5 md:col-start-2 overflow-hidden rounded-[50px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.315868351866!2d7.1479330999999995!3d46.7980835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e692ac061d6c1%3A0x739a09fb999f5d9a!2sBluefactory%20Fribourg-Freiburg%20SA!5e0!3m2!1sen!2sch!4v1747833873328!5m2!1sen!2sch"
          class="h-full w-full"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div class="col-span-12 md:col-span-5">
        <h2>Contacts</h2>
        <p>
          <span class="text-featured-mobile md:text-featured">Adresse</span>
          ExploraBox<br>
          site de blueFACTORY Fribourg Passage du Cardinal 11<br>
          1700 Fribourg<br>
          +41 (0)26 500 00 00<br>
          <br>
          <span class="text-featured-mobile md:text-featured">Mail</span><br>
          hello@explora.box
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
