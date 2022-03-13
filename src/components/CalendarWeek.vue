<template>
  <FlexboxLayout justifyContent="space-around" padding="5 0">
    <StackLayout v-for="(d, key) in daysOfWeek" :key="key">
      <Label :text="d" color="white"></Label>
    </StackLayout>
  </FlexboxLayout>
</template>

<script>
import { daysOfWeek } from "./calendar";
export default {
  data() {
    return {
      daysOfWeek,
    };
  },
};
</script>

<style>
</style>