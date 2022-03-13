<template>
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
        @tap="previousMonth"
        fontSize="18"
      />
    </FlexboxLayout>
    <StackLayout orientation="horizontal">
      <Label :text="title" fontSize="28" color="white" marginRight="5"></Label>
      <!-- <Label :text="year" fontSize="28" color="white"></Label> -->
    </StackLayout>
    <StackLayout class="arrow-container">
      <Image
        src.decode="font://&#xf105;"
        class="fa"
        stretch="none"
        color="white"
        @tap="nextMonth"
        fontSize="18"
      />
    </StackLayout>
  </FlexboxLayout>
</template>

<script>
import { SWITCH_TITLES } from "./calendar";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    // year: {
    //   type: String,
    //   required: true,
    // },
  },
  methods: {
    previousMonth() {
      this.$emit("switch-month", SWITCH_TITLES.PREVIOUS);
      this.$forceUpdate()
    },

    nextMonth() {
      this.$emit("switch-month", SWITCH_TITLES.NEXT);
      this.$forceUpdate()
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-container {
  justify-content: center;
  align-items: center;

  Image {
    font-weight: 400;
    font-size: 20;
  }
}
</style>