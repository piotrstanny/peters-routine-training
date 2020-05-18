<template>
  <div class="card bg-dark mb-2">
    <div class="card-body p-3">
      <div class="justify-content-between d-flex">
        <h5 class="card-title">
          <slot name="title"></slot>
        </h5>
        <small>
          Total time:
          <slot name="time"></slot>
        </small>
      </div>
      <p class="card-text">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
