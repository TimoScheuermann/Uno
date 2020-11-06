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
        <tc-td>{{ $store.getters.timo }}</tc-td>
        <tc-td>{{ $store.getters.petra }}</tc-td>
      </tc-tr>
      <tc-tr key="b">
        <tc-th><i class="ti-trophy"></i>%</tc-th>
        <tc-td>{{ getWinperc('timo') }}</tc-td>
        <tc-td>{{ getWinperc('petra') }}</tc-td>
      </tc-tr>
      <tc-tr key="c">
        <tc-th>Teuerste Runde</tc-th>
        <tc-td>{{ getMostExpen('timo') }}</tc-td>
        <tc-td>{{ getMostExpen('petra') }}</tc-td>
      </tc-tr>
      <tc-tr key="d">
        <tc-th>Günstigste Runde</tc-th>
        <tc-td>{{ getMostCheap('timo') }}</tc-td>
        <tc-td>{{ getMostCheap('petra') }}</tc-td>
      </tc-tr>
    </tc-table>
  </div>
</template>

<script lang="ts">
import { IRound } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Stats extends Vue {
  get rounds(): IRound[] {
    return this.$store.getters.rounds;
  }

  getWinperc(name: string) {
    return (
      Math.round(
        (this.rounds.filter(x => x.winner === name).length /
          this.rounds.length) *
          10000
      ) /
        100 +
      '%'
    );
  }

  getMostExpen(name: string): number {
    return this.rounds
      .filter(x => x.winner !== name)
      .sort((a, b) => b.points - a.points)[0].points;
  }
  getMostCheap(name: string): number {
    return this.rounds
      .filter(x => x.winner !== name)
      .sort((a, b) => a.points - b.points)[0].points;
  }
}
</script>

<style lang="scss" scoped></style>
