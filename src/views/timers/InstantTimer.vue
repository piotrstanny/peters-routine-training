<template>
<div>
  <div class="timer-container pt-3">

    <div v-if="timerReady" class="row justify-content-center m-0">
      <div class="col-sm-8">
        <div id="timer-section" class="pt-2">
          <p>Remaining: {{ calculateTime(remaining) }}</p>
          <h2>Work</h2>
          <h1
          style="font-size: 4.0em; font-family: Arial"
          id="current-interval">
          {{ intervals[0] }}
          </h1>
          <div class="row justify-content-around m-0">
            <div class="col-4">
              Elapsed:<br>{{ calculateTime(elapsed) }}
            </div>

            <div class="col-4">
            Interval:<br>{{ intervalCounter }}/{{ intervals.length }}
            </div>
          </div>
        </div>

        <div class="row justify-content-between m-0 pt-3">
          <div class="col-4 p-1">
            <button
            type="button"
            class="btn btn-block btn-warning btn-lg"
            @click="startTimer(intervals[0])">
            <i class="fas fa-play text-body"></i></button>
          </div>

          <div class="col-3 p-1 pl-3 pr-0 ml-4">
            <button
            type="button"
            class="btn btn-block btn-danger btn-lg"
            @click="restartTimer()">
            <i class="fas fa-redo-alt text-body"></i></button>
          </div>

          <div class="col-4 p-1 pl-0">
            <button
            type="button"
            class="btn btn-block btn-info btn-lg text-body"
            @click="startTimer(intervals[0])">
            <strong>FINISH</strong></button>
          </div>
        </div>
      </div>
    </div>

    <form v-else class="col-sm-8">
      <div>
        <h3 class="pt-4 text-center">Instant Timer</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-8 pb-1 pt-4 pl-4">
          <button
          type="button"
          class="btn btn-block btn-info"
          @click="setupTimer()">
          <strong>Start Workout</strong></button>
        </div>

        <div class="col-4 pt-4 pl-0">
        <p>Total time:<br>{{ calculateTime(totalInSeconds()) }}</p>
        </div>
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
      timerReady: false,
      intervals: [],
      intervalCounter: 1,
      elapsed: 0,
      remaining: 0,
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
    // end TOTAL TIME CALCULATION

    // TIME CALCULATION
    calculateTime(sec) {
      const totalSeconds = sec;
      let minutes = '00';
      let seconds = '00';
      if (totalSeconds > 0) {
        minutes = Math.floor(totalSeconds / 60);
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
      }
      if (totalSeconds > 0) {
        seconds = totalSeconds - (minutes * 60);
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      }
      return `${minutes}:${seconds}`;
    },
    // end TIME CALCULATION

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

    setupTimer() {
      this.timerReady = true;
      this.createIntervalsArray();
      this.remaining = this.totalInSeconds();
    },

    // AUDIO METHODS

    audioCheck() {
      let audioContext;
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      } catch (error) {
        window.alert('Sorry, but your browser doesn\'t support the Web Audio API!');
      }
      return audioContext;
    },

    shortBeep() {
      const audioCtx = this.audioCheck();
      if (audioCtx !== undefined) {
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'triangle';
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, 300);
      }
    },

    longBeep(milisec) {
      const audioCtx = this.audioCheck();
      if (audioCtx !== undefined) {
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, milisec);
      }
    },
    // end AUDIO METHODS

    startTimer(currentInterval) {
      this.shortBeep();
      let secondsLeft = currentInterval;
      const interval = setInterval(() => {
        if (secondsLeft > 1) {
          secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
        } else if (this.intervalCounter < this.intervals.length) {
          clearInterval(interval);
          secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
          this.intervalCounter += 1;
          this.startTimer(this.intervals[this.intervalCounter - 1]);
        } else {
          clearInterval(interval);
          this.longBeep(400);
          setTimeout(() => {
            this.longBeep(400);
            setTimeout(() => {
              this.longBeep(900);
            }, 500);
          }, 500);
          secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
        }
      }, 1000);
    },

    restartTimer() {
      this.remaining = this.totalInSeconds();
      this.elapsed = 0;
      const firstInterval = this.intervals[0];
      this.intervalCounter = 1;
      document.getElementById('current-interval').innerHTML = firstInterval;
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    text-align: left;
    display: inline-block;
  }

  .text-center {
    text-align: center;
  }

  .timer-container {
    text-align: center;
  }

  #timer-section {
    text-align: center;
    background-color: black;
    font-size: 1.5em;
  }
</style>
