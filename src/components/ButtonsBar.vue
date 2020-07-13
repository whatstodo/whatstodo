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

  padding-top: 1.3em;
  padding-bottom: 1.3em;

  border-bottom: none;

  a {
    @include button;
  }

  a:not(:last-child) {
    margin-right: $content-padding;
  }
}
</style>
