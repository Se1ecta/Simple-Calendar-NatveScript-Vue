<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Label text="Calendar" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>

    <StackLayout class="calendar">
      <CalendarHeader :title="currentMonthName" @switch-month="switchMonth" />
      <CalendarWeek />
      <CalendarMonth
        :month="currentMonth"
        @setted-calendar-dates="settedCalendarDates"
        class="calendar-body"
      />
    </StackLayout>
  </Page>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import CalendarHeader from "./CalendarHeader.vue";
import CalendarWeek from "./CalendarWeek.vue";
import { getMonthYear, switchCurrentMonth, daysOfWeek } from "./calendar";
export default {
  components: {
    CalendarHeader,
    CalendarMonth,
    CalendarWeek,
  },
  data() {
    return {
      currentMonth: new Date(),
      daysOfWeek,
    };
  },
  computed: {
    currentMonthName() {
      return getMonthYear(this.currentMonth);
    },

    // settedCalendarDates(val) {
    //   this.$emit("setted-calendar-dates", val);
    // },
  },
  methods: {
    settedCalendarDates(val) {
      this.$emit("setted-calendar-dates", val);
    },
    switchMonth(switchType) {
      this.currentMonth = switchCurrentMonth(this.currentMonth, switchType);
      console.log(this.currentMonth);
    },
  },
  mounted() {},
  updated() {},
};
</script>

<style scoped lang="scss">
.arrow {
  height: 70;
}
.calendar {
  height: 100%;
  background: rgb(29, 43, 57);
  &-header {
    background-color: #42b983;
    height: 90;
    box-shadow: 0 0 5 0 5px black;
  }
}
</style>
