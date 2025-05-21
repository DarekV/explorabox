<template>
  <div
    class="w-full flex flex-col py-2 px-5 rounded-[12px] bg-background"
    @click="toggleContent"
  >
    <div
      class="flex flex-row items-center justify-between gap-4"
    >
      <p class="text-featured-mobile md:text-featured">
        {{ title }}
      </p>
      <div class="flex items-center justify-center  rounded-full min-w-11 min-h-11 bg-white">
        <Icon
          name="eb:chevron"
          class="transition-all duration-300"
          :class="{ 'transform rotate-180': isVisible, 'transform rotate-0': !isVisible }"
        />
      </div>
    </div>
    <p
      class="transition-all duration-500 overflow-hidden"
      :class="{ 'max-h-[500px] pt-4': isVisible, 'max-h-[0px]': !isVisible }"
    >
      {{ content }}
    </p>
  </div>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const toggleContent = () => {
  isVisible.value = !isVisible.value
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>
