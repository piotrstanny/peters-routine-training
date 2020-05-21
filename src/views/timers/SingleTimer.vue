<template>
  <div>
    <h3>{{ $route.params.details }}</h3><br>
    <p>Start with current values or change times</p>
    <form>

      <div class="card bg-secondary m-2">
        <div class="card-header">
          Timer Details
        </div>
        <div class="card-body">

          <div class="form-group m-2 row">
            <label
            for="colFormLabelSm"
            class="col-sm-4 col-form-label col-form-label-sm">
              Name your workout:
            </label>
            <div class="col-sm-6">
              <input
              type="text"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              :placeholder="$route.params.details">
            </div>
          </div>

          <div class="form-group row m-2">
            <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm">
              Prepare/Countdown time (in seconds):
            </label>
            <div class="col-sm-10">
              <input
              type="number"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="10">
            </div>
          </div>

          <div class="form-group row m-2">
            <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm">
              Number of rounds:
            </label>
            <div class="col-sm-10">
              <input
              type="number"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="4">
            </div>
          </div>

          <div class="form-group row m-2">
            <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm">
              Rest between exercises (in seconds):
            </label>
            <div class="col-sm-10">
              <input
              type="number"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="20">
            </div>
          </div>

          <div class="form-group row m-2">
            <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm">
              Rest between rounds (in seconds):
            </label>
            <div class="col-sm-10">
              <input
              type="number"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="90">
            </div>
          </div>

        </div>
      </div>

      <div class="form-group row m-4">
        <label
        for="colFormLabelSm"
        class="col-sm-2 col-form-label col-form-label-sm">
          Work Time:
        </label>
        <div class="col-sm-10">
          <input
          type="number"
          class="form-control form-control-sm"
          id="colFormLabelSm"
          placeholder="Work time in seconds">
        </div>
      </div>
    </form>
    <button type="button" class="btn btn-secondary">Add Next Exercise</button>
  </div>
</template>

<style lang="scss" scoped>
  form {
    text-align: left;
  }
</style>
