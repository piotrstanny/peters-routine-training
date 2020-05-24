<template>
<div>
  <div>
  <h3 class="pt-4">Instant Timer</h3>
  </div>

  <div class="timer-container">
    <form class="col-sm-8">

      <div class="row justify-content-center">
        <div class="col-8 p-4">
          <button
          type="button"
          class="btn btn-block btn-info"
          @click="startTimer()">
          Start Workout</button>
        </div>

        <div class="col-3 pl-0 pt-4 pr-4">
          <button
          type="button"
          class="btn btn-block btn-danger"
          @click="resetTimer()">
          Reset</button>
        </div>
      </div>

      <div id="timer-section">
          <!-- <p>Time remaining: <span id="timer-running">{{ timer.countdown }}</span>
          </p> -->
          <p>Total time: {{ totalMinutes() }} min {{ totalSeconds() }} sec</p>
          <p>Intervals: <span v-for="(i, index) in intervals" :key="index">{{ i }}, </span>
            <button
            @click="createIntervalsArray()"
            type="button"
            class="btn btn-sm btn-info">Add</button>
          </p>
        </div>

      <div class="card bg-dark m-1 mt-2">
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
              Number of exercises per round:
            </label>
            <input
            v-model="timer.noOfExercises"
            type="number"
            class="form-control form-control-sm"
            id="colFormLabelSm">
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

    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      timer: {
        countdown: 5,
        noOfExercises: 5,
        exerciseDuration: 45,
        restBetweenEx: 20,
        noOfRounds: 4,
        restBetweenRounds: 90,
      },
      intervals: [],
    };
  },

  methods: {
    totalInSeconds() {
      const tRef = this.timer;
      let prepare = tRef.countdown;
      if (tRef.countdown === '') {
        prepare = 0;
      }
      const totalSec = prepare * 1
      + tRef.exerciseDuration * tRef.noOfExercises * tRef.noOfRounds
      + tRef.restBetweenEx * (tRef.noOfExercises - 1) * tRef.noOfRounds
      + tRef.restBetweenRounds * (tRef.noOfRounds - 1);
      return totalSec;
    },

    totalMinutes() {
      const minutes = Math.floor(this.totalInSeconds() / 60);
      return minutes;
    },

    totalSeconds() {
      const seconds = this.totalInSeconds() - (this.totalMinutes() * 60);
      return seconds;
    },

    createIntervalsArray() {
      const tRef = this.timer;
      if (tRef.countdown > 0) {
        this.intervals.push(tRef.countdown);
      }
      let rdCounter = tRef.noOfRounds;
      while (rdCounter > 0) {
        let exCounter = tRef.noOfExercises;
        let restCounter = exCounter - 1;
        while (exCounter > 0) {
          this.intervals.push(tRef.exerciseDuration);
          if (restCounter > 0) {
            this.intervals.push(tRef.restBetweenEx);
            restCounter -= 1;
          }
          exCounter -= 1;
        }
        if (rdCounter > 1) {
          this.intervals.push(tRef.restBetweenRounds);
        }
        rdCounter -= 1;
      }
    },

    startTimer() {
      let audioContext;
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      } catch (error) {
        window.alert('Sorry, but your browser doesn\'t support the Web Audio API!');
      }
      if (audioContext !== undefined) {
        const oscillator = audioContext.createOscillator();
        oscillator.connect(audioContext.destination);
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, 200);
      }
      let secondsLeft = this.timer.countdown - 1;
      const interval = setInterval(() => {
        if (secondsLeft <= 0) {
          clearInterval(interval);
          try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
          } catch (error) {
            window.alert('Sorry, but your browser doesn\'t support the Web Audio API!');
          }
          if (audioContext !== undefined) {
            const oscillator = audioContext.createOscillator();
            oscillator.connect(audioContext.destination);
            oscillator.start();
            setTimeout(() => {
              oscillator.stop();
            }, 800);
          }
        }
        document.getElementById('timer-running').innerHTML = secondsLeft;
        secondsLeft -= 1;
      }, 1000);
    },

    resetTimer() {
      document.getElementById('timer-running').innerHTML = this.timer.countdown;
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    text-align: left;
    display: inline-block;
  }

  .timer-container {
    text-align: center;
  }

  #timer-section {
    text-align: center;
    background-color: black;
    // height: 50px;
    line-height: 50px;
    font-size: 1.5em;
  }
</style>
