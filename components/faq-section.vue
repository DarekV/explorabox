<template>
  <div class="bg-white py-20">
    <div
      class="flex flex-col items-center max-w-[1440px] mx-auto px-5 md:px-8 xl:px-10"
    >
      <h2 class="text-h2-mobile md:text-h2">
        FAQ
      </h2>
      <div class="mt-12 p-2 flex gap-4 bg-background rounded-[12px]">
        <div
          class="flex items-center px-5 h-11 rounded-[12px]"
          :class="selected === 'functioning' ? 'bg-secondary' : 'bg-white'"
          @click="selected = 'functioning'"
        >
          Fonctionnement
        </div>
        <div
          class="flex items-center px-5 h-11 rounded-[12px]"
          :class="selected === 'reservation' ? 'bg-secondary' : 'bg-white'"
          @click="selected = 'reservation'"
        >
          Réservation
        </div>
        <div
          class="flex items-center px-5 h-11 rounded-[12px]"
          :class="selected === 'transport' ? 'bg-secondary' : 'bg-white'"
          @click="selected = 'transport'"
        >
          Transport
        </div>
      </div>
      <div
        v-show="selected === 'functioning'"
        class="mt-8 relative w-full md:w-1/2 flex flex-col gap-6"
      >
        <div
          v-for="(functioning, index) in functionings"
          :key="index"
        >
          <accordeon-component
            :title="functioning.title"
            :content="functioning.content"
          />
        </div>
      </div>
      <div
        v-show="selected === 'reservation'"
        class="mt-8 relative w-full lg:w-1/2 flex flex-col gap-6"
      >
        <div
          v-for="(reservation, index) in reservations"
          :key="index"
        >
          <accordeon-component
            :title="reservation.title"
            :content="reservation.content"
          />
        </div>
      </div>
      <div
        v-show="selected === 'transport'"
        class="mt-8 relative w-full md:w-1/2 flex flex-col gap-6"
      >
        <div
          v-for="(transport, index) in transports"
          :key="index"
        >
          <accordeon-component
            :title="transport.title"
            :content="transport.content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref<'functioning' | 'reservation' | 'transport'>('functioning')

const functionings = [
  {
    title: 'Comment fonctionne ExploraBox ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Quelles sont les étapes entre la réservation et le jour de l’activité ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Quand et comment la destination est-elle révélée ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Puis-je choisir ou exclure certaines activités ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
]

const reservations = [
  {
    title: 'Puis-je réserver pour une seule personne ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Est-il possible d’offrir une ExploraBox en cadeau ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Peut-on réserver pour un groupe ou une famille ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
]

const transports = [
  {
    title: 'Dois-je utiliser ma propre voiture ou les transports publics ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Les activités sont-elles accessibles en transports en commun ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
  {
    title: 'Quels sont les horaires typiques d’une journée ExploraBox ?',
    content: 'ExploraBox est une plateforme touristique innovante qui propose des expériences surprises personnalisées en Suisse.\n'
      + 'L\'utilisateur·trice choisit 10 jours dans l’année ainsi qu’une thématique générale (bien-être, sensations fortes, artisanat, etc.), sans connaître ni l’activité exacte, ni sa localisation avant le jour de l’événement.\n'
      + 'L’expérience repose sur un dévoilement progressif via une application mobile dédiée. Cette dernière guide l’utilisateur·trice étape par étape, en créant un sentiment de narration et d’anticipation, renforçant ainsi la dimension émotionnelle de l’aventure.',
  },
]
</script>
