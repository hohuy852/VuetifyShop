<template>
  <div class="text-center">
    <v-snackbar :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "My timeout is set to 2000.",
    timeout: 2000,
  }),
};
</script>

<style>
</style>