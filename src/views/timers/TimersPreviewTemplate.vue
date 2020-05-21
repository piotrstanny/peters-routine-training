<template>
  <div class="card bg-dark mb-2">
    <div class="card-body p-3">
      <div class="justify-content-between d-flex">
        <h5 class="card-title">
          <slot name="title">Quick Setup Timer</slot>
        </h5>
        <small>
          Total time:
          <slot name="time">Unknown</slot>
        </small>
      </div>
      <p class="card-text">
        <slot name="description">
          Simply set durations and run intervals, without naming your exercises.
        </slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-body {
  color: #f3f3f3;

  &:hover {
    background-color:#47505a;
  }
  &:focus, &:active {
    background-color:#444c55;
    color: #b3b3b3;
    outline: none;
    -webkit-box-shadow: inset 1px 1px 8px rgb(46, 46, 46);
    -moz-box-shadow:    inset 1px 1px 8px rgb(46, 46, 46);
    box-shadow:         inset 1px 1px 8px rgb(46, 46, 46);
  }
}
</style>
