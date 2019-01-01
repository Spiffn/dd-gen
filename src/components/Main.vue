<template>
  <v-container>
    <v-layout>
      <v-flex
        xs12 sm6 offset-sm3 pt-5>
        <v-card
          class="pb-5">
          <v-card-title>
            <p class="text-xs-center mx-a">Welcome, Adventurer!</p>
          </v-card-title>
          <v-layout>
            <v-flex
              xs12>
              <v-btn @click="createGame">Create Game</v-btn>
              <v-dialog width="500" v-model="showDialog">
              <v-btn slot="activator">Join Game</v-btn>
                <v-card>
                  <v-card-title>
                    Join A Game
                  </v-card-title>
                  <v-card-text>
                    Do something Adventurer!
                    <v-text-field
                      v-model="gameId"
                      placeholder="Game id or name"
                      append-outer-icon="send"
                      @click:append-outer="joinGame"
                      ></v-text-field>
                  </v-card-text>

                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                      <v-btn flat @click="showDialog=false">Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showDialog: false,
    gameId: '',
  }),
  methods: {
    createGame() {
      console.log(this.generateId());
    },
    joinGame() {
      this.$router.push({ name: 'game', params: { id: this.gameId } });
    },
    generateId() {
      // TODO: Randomize me later!!!
      return 1;
    },
  },
};
</script>

<style>
</style>
