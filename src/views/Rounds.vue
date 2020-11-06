<template>
  <div class="roundsview">
    <h1>Runden</h1>
    <div class="rounds">
      <div class="round" v-for="r in rounds" :key="r.start">
        <div class="winner">
          <i class="ti-trophy"></i>
          <span :class="r.winner">{{ r.winner }}</span>
        </div>
        <div class="points">{{ r.points }}</div>
        <tc-button
          icon="cross"
          tfbackground="error"
          @click="$store.commit('remove', r.start)"
        ></tc-button>
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
}
</script>

<style lang="scss" scoped>
.rounds {
  .round {
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $container;
    border-radius: $border-radius;
    .points {
      font-weight: bold;
    }
    .winner {
      i {
        color: gold;
      }
      span {
        &.timo {
          color: $primary;
        }
        &.petra {
          color: $error;
        }
        text-transform: capitalize;
        margin-left: 5px;
      }
    }
  }
}
</style>
