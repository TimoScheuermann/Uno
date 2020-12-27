<template>
  <tc-hero class="uno-hero" :hasFixedHeader="false" height="400">
    <img
      src="https://images.unsplash.com/Ys-DBJeX0nE.JPG"
      slot="background"
      alt=""
    />
    <tl-grid minWidth="100" gap="20">
      <tl-flow flow="column" class="score" :class="{ start: timoStarts }">
        <div class="name"><span v-if="isTimoWinning">👑</span>Timo</div>
        <UnoAnimatedNumber big :number="scoreTimo" />
      </tl-flow>
      <tl-flow flow="column" class="score" :class="{ start: !timoStarts }">
        <div class="name"><span v-if="isPetraWinning">👑</span>Petra</div>
        <UnoAnimatedNumber big :number="scorePetra" />
      </tl-flow>
    </tl-grid>
    <div class="score-2">
      <tl-flow class="score  four">
        <span>+4</span>
        <UnoAnimatedNumber :number="foursTimo" />
      </tl-flow>
      <tl-flow class="score amount">
        <UnoAnimatedNumber :number="amount" />€
      </tl-flow>
      <tl-flow class="score four">
        <span>+4</span>
        <UnoAnimatedNumber :number="foursPetra" />
      </tl-flow>
    </div>
  </tc-hero>
</template>

<script lang="ts">
import {
  getAmount,
  getFoursPetra,
  getFoursTimo,
  getPointsPetra,
  getPointsTimo
} from '@/utils/functions';
import { Vue, Component } from 'vue-property-decorator';
import UnoAnimatedNumber from './UnoAnimatedNumber.vue';

@Component({
  components: {
    UnoAnimatedNumber
  }
})
export default class UnoHero extends Vue {
  get timoStarts(): boolean {
    return this.$store.getters.rounds.length % 2 === 0;
  }

  get scoreTimo(): number {
    return getPointsTimo();
  }

  get scorePetra(): number {
    return getPointsPetra();
  }

  get isTimoWinning(): boolean {
    return this.scoreTimo < this.scorePetra;
  }

  get isPetraWinning(): boolean {
    return this.scorePetra < this.scoreTimo;
  }

  get amount(): number {
    return getAmount();
  }

  get foursTimo(): number {
    return getFoursTimo();
  }

  get foursPetra(): number {
    return getFoursPetra();
  }
}
</script>
<style lang="scss" scoped>
.uno-hero {
  box-shadow: $shadow;
  .tl-grid {
    width: 90vw;
  }
  .score-2 {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;
    .score {
      padding: 7.5px;
    }
    .four {
      span {
        border-radius: $border-radius;
        background: #111;
        color: #fff;
        &:first-child {
          margin-right: 10px;
        }
        padding: 5px 15px;
      }
    }
    .amount {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .score {
    color: $color_dark;
    background: rgba(#fff, 0.1);
    backdrop-filter: blur(30px);
    border-radius: $border-radius;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    border: 2px solid rgba(255, 255, 255, 0);
    border-style: groove;
    box-sizing: border-box;
    &.start {
      border-color: rgba(255, 255, 255, 1);
    }
    .name {
      font-size: 40px;
      font-weight: 500;
      span {
        margin-right: 5px;
        filter: brightness(110%);
      }
      opacity: 0.75;
    }
    .uno-animated-number[big] {
      font-size: 100px;
      font-weight: bolder;
      font-style: italic;
      letter-spacing: -2px;
    }
  }
}
</style>
