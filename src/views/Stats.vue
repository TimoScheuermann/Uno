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
        <tc-th>Punkte</tc-th>
        <tc-td>{{ pointsTimo }}</tc-td>
        <tc-td>{{ pointsPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="b">
        <tc-th><i class="ti-trophy"></i>%</tc-th>
        <tc-td>{{ winPercTimo }}</tc-td>
        <tc-td>{{ winPercPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="c">
        <tc-th>Teuerste Runde</tc-th>
        <tc-td>{{ mostExpTimo }}</tc-td>
        <tc-td>{{ mostExpPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="d">
        <tc-th>Günstigste Runde</tc-th>
        <tc-td>{{ cheapestTimo }}</tc-td>
        <tc-td>{{ cheapestPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="e">
        <tc-th>+4er</tc-th>
        <tc-td>{{ foursTimo }}</tc-td>
        <tc-td>{{ foursPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="f">
        <tc-th>+4er pro Runde</tc-th>
        <tc-td>{{ foursPRTimo }}</tc-td>
        <tc-td>{{ foursPRPetra }}</tc-td>
      </tc-tr>
      <tc-tr key="g">
        <tc-th>Meisten +4er in einer Runde</tc-th>
        <tc-td>{{ mostFoursTimo }}</tc-td>
        <tc-td>{{ mostFoursPetra }}</tc-td>
      </tc-tr>
    </tc-table>
  </div>
</template>

<script lang="ts">
import {
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
  getWinChanceTimo
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
}
</script>

<style lang="scss" scoped></style>
