<template>
  <div class="relative bg-white">
    <div
      class="absolute w-full h-full -bottom-6 rotate-180 bg-white [mask:url('/img/wave.svg')_repeat-x_top] [mask-size:auto_100%] pointer-events-none"
    />
    <div class="relative z-10 py-36 flex flex-col gap-20 ">
      <h2 class="text-h2-mobile md:text-h2 text-center">
        Avis de nos clients
      </h2>
      <marquee-component>
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex items-start"
        >
          <card-review-component
            :image="card.image"
            :name="card.name"
            :age="card.age"
            :location="card.location"
            :quote="card.quote"
            :review="card.review"
          />
        </div>
      </marquee-component>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    image: 'price-photo.png',
    name: 'Camille D.',
    age: '35 ans',
    location: 'Lausanne',
    quote: '“Je n’ai jamais aussi peu planifié… et autant profité.”',
    review:
      'L’équipe a su viser juste. Chaque activité était différente, mais toujours dans mes goûts. C’est rare de se sentir aussi bien compris.',
  },
  {
    image: 'price-photo.png',
    name: 'Nathan R.',
    age: '28 ans',
    location: 'Genève',
    quote: '“Un atelier d’artisanat auquel je n’aurais jamais pensé m’inscrire… et pourtant.”',
    review:
      'J’ai découvert une passion insoupçonnée. Ça m’a reconnecté à quelque chose de plus simple.',
  },
]
</script>
