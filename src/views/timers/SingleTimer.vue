<template>
  <div>
    <h3 class="pt-4">{{ $route.params.details }}</h3>
    <p>{{ timers[0].description }}</p>

    <div class="row justify-content-center">
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
              Name your workout:
            </label>
            <input
            type="text"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            :placeholder="$route.params.details">
          </div>

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
            :placeholder="timers[0].prepare">
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
            :placeholder="timers[0].noRounds">
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
            :placeholder="timers[0].exerciseRest">
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
            :placeholder="timers[0].roundRest">
          </div>
        </div>
      </div>

      <h4 class="mt-3 ml-3">Exercises:</h4>

      <div
      class="card bg-dark m-1 mb-3"
      v-for="(exercise, index) in timers[0].exercises"
      :key="exercise.id">
        <div class="card-header font-weight-bold">
          Exercise {{ index + 1 }}
        </div>
        <div class="card-body p-3">

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Name:
            </label>
            <input
            type="text"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            :placeholder="exercise.name">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Duration (in seconds):
            </label>
            <input
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            :placeholder="exercise.duration">
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

<script>
export default {
  props: ['timers'],
};
</script>

<style lang="scss" scoped>
  form {
    text-align: left;
  }
</style>
