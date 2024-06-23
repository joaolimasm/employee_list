<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="employee.photo" :alt="employee.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ employee.name }}</div>
        <p class="text-gray-700 text-base">{{ employee.position }}</p>
        <p class="text-gray-700 text-base">{{ employee.description }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="hashtag in hashtags" :key="hashtag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ hashtag }}</span>
      </div>
      <div class="px-6 py-4 flex justify-center">
        <button class="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="goToHomePage">
          Voltar a página inicial
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  computed: {
    hashtags() {
      return this.employee.hashtags || [];
    }
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    }
  }
};
</script>


