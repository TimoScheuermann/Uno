<template>
  <div class="app">
    <tc-hero height="400">
      <img
        src="https://images.unsplash.com/photo-1504279807002-09854ccc9b6c"
        slot="background"
        alt=""
      />
      <tl-grid minWidth="20">
        <div
          class="player"
          :class="{ winning: $store.getters.timo < $store.getters.petra }"
        >
          <div class="name">
            Timo
            <i
              class="ti-bell"
              v-if="$store.getters.rounds.length % 2 === 0"
            ></i>
          </div>
          <div class="score">{{ $store.getters.timo }}</div>
        </div>
        <div
          class="player"
          :class="{ winning: $store.getters.timo > $store.getters.petra }"
        >
          <div class="name">
            Petra
            <i
              class="ti-bell"
              v-if="$store.getters.rounds.length % 2 === 1"
            ></i>
          </div>
          <div class="score">{{ $store.getters.petra }}</div>
        </div>
      </tl-grid>
      <div class="difference">
        {{ Math.abs($store.getters.timo - $store.getters.petra) / 100 }}€
      </div>
    </tc-hero>

    <tl-grid class="navigation" minWidth="20">
      <tc-navbar-item icon="trophy" name="Ergebnis" routeName="home" />
      <tc-navbar-item icon="list" name="Runden" routeName="rounds" />
      <tc-navbar-item icon="chart-bar" name="Statistik" routeName="stats" />
    </tl-grid>
    <div content>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background: $background;
  color: $color;
  margin: 0;
}
[content] {
  padding: 20px 5vw calc(20px + env(safe-area-inset-bottom));
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
.tc-hero {
  img {
    filter: brightness(80%);
  }
  .difference {
    text-align: center;
    color: #fff;
    font-weight: bold;
    opacity: 0.75;
    font-size: 20px;
    margin-top: 20px;
  }
  .tl-grid {
    color: #fff;
    width: 80vw;
    .player {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.winning .score {
        color: gold;
      }
      .name {
        font-size: 40px;
        font-weight: 500;
      }
      .score {
        font-size: 100px;
        font-weight: 900;
      }
    }
  }
}
.navigation {
  background: $paragraph;
  .tc-navbar-item {
    text-align: center;
  }
}
</style>
