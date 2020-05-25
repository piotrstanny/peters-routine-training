<template>
<div>
  <div>
  <h3 class="pt-4">Instant Timer</h3>
  </div>

  <div class="timer-container">

    <div v-if="timerReady" class="row justify-content-center">
      <div class="col-sm-8">
        <div id="timer-section" class="p-2">
          <p>Remaining time: </p>
          <p>Number of intervals: {{ intervals.length }}</p>
          <h1><span id="timer-running">0</span> sec</h1>
        </div>
      </div>
    </div>

    <form v-else class="col-sm-8">

      <div class="row justify-content-center">
        <div class="col-8 pb-1 pt-4 pl-4">
          <button
          type="button"
          class="btn btn-block btn-info"
          @click="setupTimer()">
          <!-- @click="startTimer(intervals[0])" -->
          Start Workout</button>
        </div>

        <div class="col-4 pt-4 pl-0">
        <p>Total time:<br>{{ totalMinutes() }} min {{ totalSeconds() }} sec</p>
        </div>

        <!-- <div class="col-3 pl-0 pt-4 pr-4">
          <button
          type="button"
          class="btn btn-block btn-danger"
          @click="resetTimer()">
          Reset</button>
        </div> -->
      </div>

      <div class="card bg-dark m-1 mt-2">
        <div class="card-header font-weight-bold">
          Timer Details
        </div>
        <div class="card-body pt-1">

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
      timerReady: false,
    };
  },

  methods: {
    // TOTAL TIME CALCULATION
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
    // end TOTAL TIME CALCULATION

    setupTimer() {
      this.timerReady = true;
      this.createIntervalsArray();
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
            if (tRef.restBetweenEx > 0) {
              this.intervals.push(tRef.restBetweenEx);
            }
            restCounter -= 1;
          }
          exCounter -= 1;
        }
        if (rdCounter > 1) {
          if (tRef.restBetweenRounds > 0) {
            this.intervals.push(tRef.restBetweenRounds);
          }
        }
        rdCounter -= 1;
      }
    },

    startTimer(currentInterval) {
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
        }, 300);
      }
      let secondsLeft = currentInterval;
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
            }, 300);
          }
          // Starting function again by recurrency
          this.intervals.shift();
          if (this.intervals.length > 0) {
            this.startTimer(this.intervals[0]);
          }
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

  .timer-container {
    text-align: center;
  }

  #timer-section {
    text-align: center;
    background-color: black;
    line-height: 50px;
    font-size: 1.5em;
  }
</style>
