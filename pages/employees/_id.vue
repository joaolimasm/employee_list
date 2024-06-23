<template>
  <div>
    <EmployeeDetails :employee="employee" />
  </div>
</template>

<script>
import EmployeeDetails from '~/components/EmployeeDetails.vue';

export default {
  components: {
    EmployeeDetails
  },
  computed: {
    employee() {
      return this.$store.getters.getEmployeeById(this.$route.params.id);
    }
  }
};
</script>
