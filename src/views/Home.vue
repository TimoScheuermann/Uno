<template>
  <div class="home">
    <tl-flow horizontal="space-between">
      <h1>Runde {{ $store.getters.rounds.length + 1 }}</h1>
      <h2>{{ drawTimo }} - {{ drawPetra }}</h2>
      <h1>{{ points }}</h1>
    </tl-flow>
    <div class="numpad">
      <div
        class="numb"
        v-for="(k, i) in Array(9)"
        :key="i"
        @click="points += i + 1"
      >
        {{ i + 1 }}
      </div>
      <div class="numb" @click="points = ''"><i class="ti-cross"></i></div>
      <div class="numb" @click="points += 0">0</div>
      <div
        class="numb"
        @click="points = points.substring(0, points.length - 1)"
      >
        <i class="ti-arrow-left"></i>
      </div>
    </div>
    <div class="draw">
      <div class="four" @click="addDrawTimo(1)">+1</div>
      <div class="four" @click="addDrawTimo(-1)">-1</div>
      <div class="four" @click="addDrawPetra(1)">+1</div>
      <div class="four" @click="addDrawPetra(-1)">-1</div>
    </div>
    <div class="players">
      <div class="player" @click="win('petra')">Timo</div>
      <div class="player" @click="win('timo')">Petra</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public points = '';
  public drawTimo = 0;
  public drawPetra = 0;

  public win(winner: string) {
    if (this.points.length > 0) {
      this.$store.commit('add', {
        winner: winner,
        points: +this.points,
        drawTimo: this.drawTimo,
        drawPetra: this.drawPetra
      });
      this.points = '';
      this.drawTimo = 0;
      this.drawPetra = 0;
    }
  }

  public addDrawTimo(amount: number) {
    this.drawTimo = this.normalize(this.drawTimo + amount);
  }

  public addDrawPetra(amount: number) {
    this.drawPetra = this.normalize(this.drawPetra + amount);
  }

  private normalize(number: number): number {
    return Math.max(Math.min(number, 4), 0);
  }
}
</script>

<style lang="scss" scoped>
.tl-flow {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    margin: 0;
    margin-top: 20px;
    font-style: italic;
  }
  margin-bottom: 20px;
}
.numb,
.player,
.four {
  border-radius: $border-radius;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(95%);
  }
}
.numpad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  .numb {
    background: $container;
    i {
      color: $error;
    }
  }
}
.players {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  margin-top: 5px;
  .player {
    color: #fff;
    background: $error;
    &:first-child {
      background: $primary;
    }
  }
}
.draw {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin: 10px 0;
  .four {
    padding: 10px 20px;
    color: #fff;
    background: #111;
    &:nth-child(EVEN) {
      background: #aaa;
    }
  }
}
</style>
