<template>
  <FlexboxLayout
    flexDirection="column"
    justifyContent="center"
    class="date-wrapper"
    flexWrap="wrap"
    alignItems="center"
    alignContent="center"
    :class="{active: active, outside: outside }"
  >
    <Label
      horizontalAlignment="center"
      :text="title"
      color="white"
    />
  </FlexboxLayout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
    },
    outside: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.date-wrapper {
  width: 14.28%;
  height: 50;
  justify-content: center;
  align-items: center;

  Label {
    font-size: 14;
    color: white;
  }
}

.active {
  border-radius: 50%;
  background:#42b983;
}
.outside {
  opacity: 0.3;
}
</style>