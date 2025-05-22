<template>
  <div class="px-5 md:px-8">
    <p class="mb-6 text-featured-mobile md:text-featured">
      Personnalisation
    </p>
    <div class="w-full h-[1px] rounded-full bg-background-dark" />
    <div class="flex flex-col mt-10 gap-10">
      <div class="flex flex-col gap-6">
        <p>Personnalisation du voyage</p>
      </div>
      <input-component
        class="md:max-w-1/2"
        :rows="3"
        title="Indiquez nous les activités déjà réalisées ou que vous voulez exclure."
        placeholder="Je ne veux pas faire de la grimpe ou des sports de montagne"
      />
      <input-component
        class="md:max-w-1/2"
        :rows="3"
        title="Précisez les restrictions ou problèmes de santé à prendre en compte."
        placeholder="J'ai peur de l'altitude, ..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
