<template>
<div>
  <div>
  <h3 class="pt-4">Instant Timer</h3>
  </div>

  <div class="timer-details">
    <form class="col-sm-8">

      <div class="card bg-dark m-1">
        <div class="card-header font-weight-bold">
          Timer Details
        </div>
        <div class="card-body p-3">

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Prepare/Countdown time (in seconds):
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            value="10">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Number of exercises:
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="e.g. 6 exercises per round"
            autofocus>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Duration of exercise (in seconds):
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            value="45">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Rest between exercises (in seconds):
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            value="45">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Number of rounds:
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            value="4">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Rest between rounds (in seconds):
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            value="90">
          </div>

        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-8 p-4">
          <button type="button" class="btn btn-block btn-info ">Start Workout</button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<style lang="scss" scoped>
  form {
    text-align: left;
    display: inline-block;
  }

  .timer-details {
    text-align: center;
  }
</style>
