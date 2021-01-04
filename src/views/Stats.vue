<template>
  <div class="stats">
    <h1>Statistik</h1>
    <tc-table>
      <template slot="head">
        <tc-th></tc-th>
        <tc-th>Timo</tc-th>
        <tc-th>Petra</tc-th>
      </template>
      <tc-tr key="a">
        <tc-td class="desc">Punkte</tc-td>
        <tc-td>{{ pointsTimo }}</tc-td>
        <tc-td>{{ pointsPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="aa">
        <tc-td class="desc">Punktzahl Ø</tc-td>
        <tc-td>{{ avgLossTimo }}</tc-td>
        <tc-td>{{ avgLossPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="b">
        <tc-td class="desc"><i class="ti-trophy"></i>%</tc-td>
        <tc-td>{{ winPercTimo }}</tc-td>
        <tc-td>{{ winPercPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="c">
        <tc-td class="desc">Teuerste Runde</tc-td>
        <tc-td>{{ mostExpTimo }}</tc-td>
        <tc-td>{{ mostExpPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="d">
        <tc-td class="desc">Günstigste Runde</tc-td>
        <tc-td>{{ cheapestTimo }}</tc-td>
        <tc-td>{{ cheapestPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="spacera">
        <td colspan="3" class="spacer" />
      </tc-tr>
      <tc-tr key="wsb">
        <tc-td class="desc">Beste Siegesserie</tc-td>
        <tc-td>{{ bestWSeriesTimo }}</tc-td>
        <tc-td>{{ bestWSeriesPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="wsc">
        <tc-td class="desc">Aktuelle Siegesserie</tc-td>
        <tc-td>{{ wSeriesTimo }}</tc-td>
        <tc-td>{{ wSeriesPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="spacerb">
        <td colspan="3" class="spacer" />
      </tc-tr>
      <tc-tr key="e">
        <tc-td class="desc">+4er</tc-td>
        <tc-td>{{ foursTimo }}</tc-td>
        <tc-td>{{ foursPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="f">
        <tc-td class="desc">+4er pro Runde</tc-td>
        <tc-td>{{ foursPRTimo }}</tc-td>
        <tc-td>{{ foursPRPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="g">
        <tc-td class="desc">Meisten +4er in einer Runde</tc-td>
        <tc-td>{{ mostFoursTimo }}</tc-td>
        <tc-td>{{ mostFoursPetra }}</tc-td>
      </tc-tr>
    </tc-table>
  </div>
</template>

<script lang="ts">
import {
  getAverageLossAmountPetra,
  getAverageLossAmountTimo,
  getBestWinningSeriesPetra,
  getBestWinningSeriesTimo,
  getFoursPerRoundPetra,
  getFoursPerRoundTimo,
  getFoursPetra,
  getFoursTimo,
  getMostCheapestRoundPetra,
  getMostCheapestRoundTimo,
  getMostExpensiveRoundPetra,
  getMostExpensiveRoundTimo,
  getMostFoursInRoundPetra,
  getMostFoursInRoundTimo,
  getPointsPetra,
  getPointsTimo,
  getWinChancePetra,
  getWinChanceTimo,
  getWinningSeriesPetra,
  getWinningSeriesTimo
} from '@/utils/functions';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Stats extends Vue {
  get pointsTimo(): number {
    return getPointsTimo();
  }
  get pointsPetra(): number {
    return getPointsPetra();
  }
  get winPercTimo(): string {
    return getWinChanceTimo() + '%';
  }
  get winPercPetra(): string {
    return getWinChancePetra() + '%';
  }
  get mostExpTimo(): number | string {
    return getMostExpensiveRoundTimo();
  }
  get mostExpPetra(): number | string {
    return getMostExpensiveRoundPetra();
  }
  get cheapestTimo(): number | string {
    return getMostCheapestRoundTimo();
  }
  get cheapestPetra(): number | string {
    return getMostCheapestRoundPetra();
  }
  get foursTimo(): number {
    return getFoursTimo();
  }
  get foursPetra(): number {
    return getFoursPetra();
  }
  get foursPRTimo(): number {
    return getFoursPerRoundTimo();
  }
  get foursPRPetra(): number {
    return getFoursPerRoundPetra();
  }
  get mostFoursTimo(): number {
    return getMostFoursInRoundTimo();
  }
  get mostFoursPetra(): number {
    return getMostFoursInRoundPetra();
  }
  get bestWSeriesTimo(): number {
    return getBestWinningSeriesTimo();
  }
  get bestWSeriesPetra(): number {
    return getBestWinningSeriesPetra();
  }
  get wSeriesTimo(): number {
    return getWinningSeriesTimo();
  }
  get wSeriesPetra(): number {
    return getWinningSeriesPetra();
  }
  get avgLossTimo(): number | string {
    return getAverageLossAmountTimo() || '-/-';
  }
  get avgLossPetra(): number | string {
    return getAverageLossAmountPetra() || '-/-';
  }
}
</script>

<style lang="scss" scoped>
.spacer {
  background: $background;
  height: 10px;
}
.desc {
  font-weight: bold;
  line-height: 28px;
}
</style>
