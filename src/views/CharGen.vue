<template>
  <div>
    <v-layout pt-5 mx-3>
      <v-flex xs12 md6 offset-md3>
        <StatsGenerator />
      </v-flex>
    </v-layout>
    <v-layout pt-3 mx-3>
      <v-flex xs12 md6 offset-md3>
        <NameGenerator />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import StatsGenerator from '@/components/generator/StatsGenerator.vue';
import NameGenerator from '@/components/generator/NameGenerator.vue';

export default {
  components: {
    StatsGenerator,
    NameGenerator,
  },
};
</script>

<style>

</style>
