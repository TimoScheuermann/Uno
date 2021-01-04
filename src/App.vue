<template>
  <div class="app">
    <UnoHero />

    <div content>
      <router-view />
    </div>

    <tc-tabbar>
      <tc-tabbar-item icon="trophy" title="Ergebnis" routeName="home" />
      <tc-tabbar-item icon="list" title="Runden" routeName="rounds" />
      <tc-tabbar-item icon="chart-bar" title="Statistik" routeName="stats" />
    </tc-tabbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UnoHero from './components/UnoHero.vue';

@Component({
  components: {
    UnoHero
  }
})
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

.app,
body {
  min-height: 100vh;
}

h1 {
  text-align: center;
}

[content] {
  padding: 20px 5vw calc(20px + env(safe-area-inset-bottom));
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
</style>
