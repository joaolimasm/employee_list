<template>
  <div class="container mx-auto px-4 py-2">

    <div class="flexbox ">
      <div class="search">
        <div>
          <input
            v-model="search"
            type="text"
            placeholder="Pesquise por cargo ou nome"
            class="mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full max-w-md shadow-sm"
          />
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300 rounded-lg">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2 text-left text-lg font-semibold text-gray-800">
              Nome
            </th>
            <th class="px-4 py-2 text-left text-lg font-semibold text-gray-800">
              Cargo
            </th>
            <th class="px-4 py-2 text-left text-lg font-semibold text-gray-800">
              Detalhes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="employee in displayedEmployees"
            :key="employee.id"
            class="bg-gray-200 border-b"
          >
            <td class="px-4 py-3 text-lg text-gray-700">{{ employee.name }}</td>
            <td class="px-4 py-3 text-lg text-gray-700">
              {{ employee.position }}
            </td>
            <td class="px-4 py-3 text-lg text-gray-700">
              <router-link :to="'/employees/' + employee.id">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Ver detalhes
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav class="flex justify-center mt-4">
      <ul class="pagination">
        <li
          v-for="page in totalPages"
          :key="page"
          class="pagination-item"
          :class="{ 'pagination-item-active': currentPage === page }"
          @click="setCurrentPage(page)"
        >
          {{ page }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      currentPage: 1,
      employeesPerPage: 7,
    };
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    filteredEmployees() {
      return this.employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(this.search.toLowerCase()) ||
          employee.position.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredEmployees.length / this.employeesPerPage);
    },
    displayedEmployees() {
      const start = (this.currentPage - 1) * this.employeesPerPage;
      const end = start + this.employeesPerPage;
      return this.filteredEmployees.slice(start, end);
    },
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
table {
  font-family: "Arial", sans-serif;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-top: 2rem;
}

th,
td {
  padding: 1.25rem 1rem;
  text-align: left;
}

th {
  background-color: #f3f4f6;
}

tr:hover {
  background-color: #f9fafb;
}

.border {
  border: 1px solid #d2d6dc;
  border-collapse: collapse;
}

.flexbox {
  background: linear-gradient(155deg, #4F46E5, #8F94FB);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.search {
  margin: 20px;
}

.search > div {
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 1px #0091c2);

}

.search > div:after {
  content: "";
  background: white;
  width: 4px;
  height: 20px;
  position: absolute;
  top: 19px;
  right: -5px;
  transform: rotate(135deg);
}

.search > div > input {
  color: white;
  font-size: 16px;
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: solid 3px white;
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;

}

.search > div > input::placeholder {
  color: #efefef;
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.search > div > input:focus::placeholder {
  opacity: 1;
}

.search > div > input:focus,
.search > div > input:not(:placeholder-shown) {
  width: 250px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.overflow-hidden {
  overflow: hidden;
}

tbody tr.border-b {
  border: 1px solid #d2d6dc;
  width: 100%;
}

tbody tr:last-child {
  border-bottom-width: 0;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 1rem
}

.pagination-item {
  margin-right: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #4f46e5;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.pagination-item:hover {
  background-color: #f3f4f6;
}

.pagination-item-active {
  font-weight: bold;
  color: #fff;
  background-color: #4f46e5;
}
</style>
