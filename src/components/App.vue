<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Label text="Calendar" fontSize="24" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
    <StackLayout class="calendar">
      <FlexboxLayout
        alignItems="center"
        justifyContent="space-between"
        class="calendar-header"
        padding="0 10"
      >
        <FlexboxLayout class="arrow-container">
          <Image
            src.decode="font://&#xf104;"
            class="fa"
            stretch="none"
            color="white"
            @tap="goPreviousMonth"
          />
        </FlexboxLayout>
        <StackLayout orientation="horizontal">
          <Label
            :text="currentMonthName"
            fontSize="28"
            color="white"
            marginRight="5"
          ></Label>
          <Label :text="currentYear" fontSize="28" color="white"></Label>
        </StackLayout>
        <StackLayout class="arrow-container">
          <Image
            src.decode="font://&#xf105;"
            class="fa"
            stretch="none"
            color="white"
            @tap="goNextMonth"
          />
        </StackLayout>
      </FlexboxLayout>
      <StackLayout class="calendar-body">
        <FlexboxLayout orientation="horizontal" class="day-week">
          <StackLayout
            v-for="(day, index) in daysOfWeek"
            :key="index"
            class="day-week-container"
          >
            <Label :text="day" class="day-week-title"></Label>
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout class="date-container">
          <FlexboxLayout
            class="date-wrapper"
            v-for="day in previousLastDays"
            :key="'A' + day"
          >
            <StackLayout>
              <Label :text="day" opacity="0.4"></Label>
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            v-for="day in lastDayOfMonth"
            :key="'B' + day"
            :class="isToday(day) ? 'today' : 'date-wrapper'"
          >
            <StackLayout>
              <Label :text="day"></Label>
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            class="date-wrapper"
            v-for="day in nextFirstDays"
            :key="'C' + day"
          >
            <StackLayout>
              <Label :text="day" opacity="0.4"></Label>
            </StackLayout>
          </FlexboxLayout>
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      daysOfWeek: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"],
      currentDay: new Date().getDay(),
      currentMonthNumber: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    currentMonthName() {
      return this.months[this.currentMonthNumber];
    },
    lastDayOfMonth() {
      return new Date(
        this.currentYear,
        this.currentMonthNumber + 1,
        0
      ).getDate();
    },

    previousLastDay() {
      return new Date(this.currentYear, this.currentMonthNumber, 0).getDate();
    },
    firstIndex() {
      return new Date(this.currentYear, this.currentMonthNumber, 1).getDay();
    },
    lastIndex() {
      return new Date(
        this.currentYear,
        this.currentMonthNumber + 1,
        0
      ).getDay();
    },

    nextDayIndex() {
      return 7 - this.lastIndex - 1;
    },
    nextFirstDays() {
      const days = [];
      for (let i = 1; i <= this.nextDayIndex; i++) {
        days.push(i);
      }
      return days;
    },
    previousLastDays() {
      const days = [];
      for (let i = this.firstIndex; i > 0; i--) {
        days.push(this.previousLastDay - i + 1);
      }
      return days;
    },
  },
  methods: {
    goNextMonth() {
      if (this.currentMonthNumber == 11) {
        this.currentYear++;
        this.currentMonthNumber = 0;
      }
      this.currentMonthNumber++;
    },
    goPreviousMonth() {
      if (this.currentMonthNumber == 0) {
        this.currentYear--;
        this.currentMonthNumber = 11;
      }
      this.currentMonthNumber--;
    },
    isToday(day) {
      return (
        (new Date().getDate() === day) &&
       ( new Date().getMonth() === this.currentMonthNumber)
      );
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
.arrow {
  height: 70;
}
.calendar {
  &-header {
    background-color: #42b983;
    height: 90;
    box-shadow: 0 0 5 0 5px black;
    .arrow-container {
      justify-content: center;
      align-items: center;

      Image {
        font-weight: 400;
        font-size: 20;
      }
    }
  }
  &-body {
    height: 100%;
    padding: 5 10;
    background: rgb(29, 43, 57);
    .day-week {
      display: flex;
      justify-content: space-between;
      &-container {
        width: 100%;
        text-align: center;
        .day-week-title {
          font-size: 14;
          color: white;
        }
      }
    }
    .date-container {
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 10;
      .today {
        width: 14.28%;
        height: 50;
        justify-content: center;
        align-items: center;
        background: #42b983;
        color: white;
      }
      .date-wrapper {
        width: 14.28%;
        height: 50;
        justify-content: center;
        align-items: center;
        Label {
          font-size: 14;
          color: white;
        }
        Label .current {
          font-size: 14;
          color: orange;
          background: orange;
        }
      }
    }
  }
}
</style>
