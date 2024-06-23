<template>
  <div>
    <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 mb-8 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">Lista de Funcionários</h1>

      </div>
    </header>
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '~/components/EmployeeList.vue';

export default {
  components: {
    EmployeeList
  }
};
</script>

<style scoped>
header {
  background: linear-gradient(to right, #4F46E5, #8F94FB);
}

h1 {
  font-size: 3rem;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  h1 {
    font-size: 5rem;
  }
}
</style>
