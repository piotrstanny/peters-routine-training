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
            v-model="timer.countdown"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Number of exercises:
            </label>
            <input
            v-model="timer.noOfExercises"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="e.g. 6 exercises per round"
            autofocus>
            <p>{{ timer.noOfExercises }}</p>
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Duration of exercise (in seconds):
            </label>
            <input
            v-model="timer.exerciseDuration"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Rest between exercises (in seconds):
            </label>
            <input
            v-model="timer.restBetweenEx"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Number of rounds:
            </label>
            <input
            v-model="timer.noOfRounds"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
          </div>

          <div class="form-group">
            <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm">
              Rest between rounds (in seconds):
            </label>
            <input
            v-model="timer.restBetweenRounds"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
          </div>

        </div>
      </div>

        <div id="timer-section">
          <p>Time remaining: <span id="timer-running">{{ timer.countdown }}</span>
          </p>
        </div>

      <div class="row justify-content-center">
        <div class="col-8 p-4">
          <button
          type="button"
          class="btn btn-block btn-info"
          @click="startTimer()">
          Start Workout</button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      timer: {
        countdown: 10,
        noOfExercises: '',
        exerciseDuration: 45,
        restBetweenEx: 20,
        noOfRounds: 4,
        restBetweenRounds: 90,
      },
    };
  },
  methods: {
    startTimer() {
      let secondsLeft = this.timer.countdown - 1;
      const interval = setInterval(() => {
        if (secondsLeft <= 0) {
          clearInterval(interval);
        }
        document.getElementById('timer-running').innerHTML = secondsLeft;
        secondsLeft -= 1;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    text-align: left;
    display: inline-block;
  }

  .timer-details {
    text-align: center;
  }

  #timer-section {
    text-align: center;
    background-color: black;
    height: 50px;
    line-height: 50px;
    font-size: 1.5em;
  }
</style>
