<template>
  <StackLayout>
    <FlexboxLayout v-for="(weekOfMonth, key) in calendarData" :key="key">
      <CalendarDay
        v-for="(day, kd) in weekOfMonth"
        :key="kd"
        :title="day.title"
        :active="day.active"
        :outside="day.outside"
      />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import {
  generateMonthWithFullWeek,
  chunkArray,
  numberDaysInWeek,
  equalDays,
  includeDateInMonth,
} from "./calendar";

export default {
  components: {
    CalendarDay,
  },
  props: {
    month: {
      type: [Date],
      required: true,
    },
  },
  data() {
    return {
      month: new Date(),
      currentDate: new Date(),
    };
  },
  computed: {
    calendarData() {
      const resultData = this.monthsData.map((item) => {
        console.log(`Item: ${item.getDate()}`);
        console.log(`Month: ${equalDays(item, this.currentDate)}`);
        const dayData = {
          date: item,
          title: item.getDate(),
          active: equalDays(item, this.currentDate),
          outside: !includeDateInMonth(item, this.month),
        };
        return dayData;
      });
      return chunkArray(resultData, numberDaysInWeek);
    },
    monthsData() {
      const monthWithFullWeek = generateMonthWithFullWeek(this.month);

      // Передать родителю установленные дни
      this.$emit("setted-calendar-dates", monthWithFullWeek);
      return monthWithFullWeek;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>