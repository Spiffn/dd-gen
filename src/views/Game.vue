<template>
  <v-container>
    {{game.name}}
  </v-container>
</template>

<script>
const GameStore = require('@/data/games.json');

export default {
  data() {
    return {
      game: this.getGame(),
    };
  },
  methods: {
    getGame() {
      const filtered = GameStore.gamesList.filter(game => game.id === this.$route.params.id);
      return filtered ? filtered[0] : null;
    },
  },
};
</script>
