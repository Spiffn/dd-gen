<template>
  <v-card>
    <v-card-title>
      Name Generator
    </v-card-title>
    <v-layout px-3>
      <v-flex xs6>
        Name: {{ generatedName }}
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="selectedSex"
          :items="sex"
          label="Generation Algorithm">
        </v-select>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="selectedSex === ''" @click="generateNames">Generate</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const Names = require('@/data/names.json');

export default {
  data() {
    return {
      generatedName: '',
      selectedSex: 'male',
      sex: ['male', 'female', 'random'],
      names: Names,
    };
  },
  methods: {
    generateNames() {
      this.generatedName = {
        male: this.getRandomMale,
        female: this.getRandomFemale,
        random: this.getRandomName,
      }[this.selectedSex]();
    },
    getRandomName() {
      return {
        0: this.getRandomMale,
        1: this.getRandomFemale,
      }[this.getRandomInt(2)]();
    },
    getRandomMale() {
      return this.names.male[this.getRandomInt(this.names.male.length)];
    },
    getRandomFemale() {
      return this.names.female[this.getRandomInt(this.names.female.length)];
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
  },
};
</script>

<style scoped>

</style>
