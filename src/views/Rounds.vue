<template>
  <div class="roundsview">
    <h1>Runden</h1>
    <div class="rounds">
      <div class="round" v-for="r in rounds" :key="r.start">
        <div class="winner" :class="r.winner">
          <i class="ti-trophy" @click="hotswap(r)"></i>
          <span>{{ r.winner }}</span>
        </div>
        <div class="points">{{ r.points }}</div>
        <div class="fours">{{ r.drawTimo }} - {{ r.drawPetra }}</div>
        <tc-button
          icon="cross"
          variant="opaque"
          tfbackground="error"
          @click="$store.commit('remove', r.start)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IRound } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Rounds extends Vue {
  get rounds(): IRound[] {
    return this.$store.getters.rounds;
  }

  public hotswap(r: IRound): void {
    r.winner = r.winner === 'timo' ? 'petra' : 'timo';
  }
}
</script>

<style lang="scss" scoped>
.rounds {
  .round {
    padding: 8px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $container;
    border-radius: $border-radius;
    .points {
      font-weight: bolder;
      font-style: italic;
      letter-spacing: -1px;
    }
    .winner {
      margin-left: 10px;
      font-size: 18px;
      &.timo {
        color: $primary;
      }
      &.petra {
        color: $error;
      }
      span {
        text-transform: capitalize;
        font-weight: 500;
        margin-left: 10px;
      }
    }
  }
}
</style>
