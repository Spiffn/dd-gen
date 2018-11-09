<template>
  <v-card>
    <v-card-title>
      Stats Generation
    </v-card-title>
    <v-layout px-3>
      <v-flex xs12>
        <v-select
          v-model="selectedAlgorithm"
          :items="generationAlgorithms"
          label="Generation Algorithm">
        </v-select>
      </v-flex>
    </v-layout>
    <v-layout px-3>
      <v-flex xs12>
        <v-switch
          label="Restrict Negatives"
          v-model="restrictNegatives"
        ></v-switch>
      </v-flex>
    </v-layout>
    <v-layout px-3>
      <v-flex xs12>
        <v-layout>Str: {{ stats.str }}</v-layout>
        <v-layout>Int: {{ stats.int }}</v-layout>
        <v-layout>Wis: {{ stats.wis }}</v-layout>
        <v-layout>Dex: {{ stats.dex }}</v-layout>
        <v-layout>Con: {{ stats.con }}</v-layout>
        <v-layout>Cha: {{ stats.cha }}</v-layout>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="selectedAlgorithm === ''" @click="generateStats">Generate</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      restrictNegatives: false,
      selectedAlgorithm: '',
      stats: {
        str: 0,
        int: 0,
        wis: 0,
        dex: 0,
        con: 0,
        cha: 0,
      },
      generationAlgorithms: [
        {
          text: '3D6 - Add All',
          value: '3D6',
        },
        {
          text: '4D6 - Drop Lowest',
          value: '4D6',
        },
      ],
    };
  },
  methods: {
    generateStats() {
      const generator = {
        '3D6': this.gen3D6,
        '4D6': this.gen4D6,
      };
      const algorithm = generator[this.selectedAlgorithm];
      if (algorithm) {
        algorithm();
      }
    },
    gen3D6() {
      Object.keys(this.stats).forEach((key) => {
        this.stats[key] = this.randD6() + this.randD6() + this.randD6();
      });
    },
    gen4D6() {
      Object.keys(this.stats).forEach((key) => {
        const genVals = [
          this.randD6(),
          this.randD6(),
          this.randD6(),
          this.randD6(),
        ];
        genVals.sort();
        this.stats[key] = genVals[1] + genVals[2] + genVals[3];
      });
    },
    randD6() {
      return this.randInt(1, 6);
    },
    randInt(start, end) {
      return Math.floor(Math.random() * (end - start + 1) + start);
    },
  },
};
</script>

<style scoped>

</style>
