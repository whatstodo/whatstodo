<template>
  <div class="buttons-bar">
    <div class="buttons-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="buttons-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons-bar {
  display: flex;
  justify-content: space-between;

  @include content-item;
  @include font-size-small;

  a {
    @include button;
  }

  a:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
