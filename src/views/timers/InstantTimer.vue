<template>
<div>
  <div class="timer-container pt-5">

    <div v-if="timerReady" class="row justify-content-center m-0">
      <div class="col-sm-8">
        <div id="timer-section" class="pt-3">
          <p>Remaining: {{ calculateTime(remaining) }}</p>
          <div
          class="row justify-content-center m-0"
          :style="{'background-color': activeColor}">
            <h2 class="m-0 p-0" style="color: black; line-height: 1.5">{{ intervalText }}</h2>
          </div>

          <div class="row justify-content-between m-0">
            <div
            class="col-3 align-self-center"
            style="cursor: pointer"
            @click="previousInterval()">
              <i class="fas fa-step-forward fa-lg fa-flip-horizontal"></i>
            </div>
            <div class="col-4">
              <h1
              style="font-size: 4.0em; font-family: Arial"
              id="current-interval">
              {{ secondsLeft }}
              </h1>
            </div>
            <div
            class="col-3 align-self-center"
            style="cursor: pointer"
            @click="nextInterval()">
              <i class="fas fa-step-forward fa-lg"></i>
            </div>
          </div>

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
            <button v-if="paused"
            type="button"
            class="btn btn-block btn-warning btn-lg"
            @click="playButton()">
            <i class="fas fa-play text-black"></i></button>

            <button v-else
            type="button"
            class="btn btn-block btn-warning btn-lg"
            @click="pauseButton()">
            <i class="fas fa-pause text-black"></i></button>
          </div>

          <div class="col-3 p-1 pl-3 pr-0 ml-4">
            <button
            type="button"
            class="btn btn-block btn-danger btn-lg"
            @click="restartTimer()"
            :disabled="isBtnDisabled">
            <i class="fas fa-redo-alt text-black"></i></button>
          </div>

          <div class="col-4 p-1 pl-0">
            <router-link
            :to="{name: 'ThankYou'}"
            tag="button"
            type="button"
            class="btn btn-block btn-info btn-lg text-black"

            :disabled="isBtnDisabled">
            <strong>FINISH</strong></router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="timerFinished" style="padding-top: 30vh">
      <h4>Thank you for using my Training App.</h4>
      <p>Stay strong and have a great day!</p>
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
        exerciseDuration: 30,
        restBetweenEx: 20,
        noOfRounds: 4,
        restBetweenRounds: 90,
      },
      timerReady: false,
      activeColor: 'black',
      intervalText: '',
      timerFinished: false,
      intervals: [],
      interval: '',
      intervalCounter: 1,
      secondsLeft: 0,
      elapsed: 0,
      remaining: 0,
      paused: true,
      isBtnDisabled: true,
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
      this.secondsLeft = this.intervals[this.intervalCounter - 1];
      this.activeInterval();
    },

    activeInterval() {
      const currInterval = this.intervals[this.intervalCounter - 1];
      if (currInterval === this.timer.countdown) {
        this.activeColor = '#c0e289';
        this.intervalText = 'Prepare';
      } else if (currInterval === this.timer.exerciseDuration) {
        this.activeColor = '#ea4f4f';
        this.intervalText = 'Work';
      } else if (currInterval === this.timer.restBetweenEx) {
        this.activeColor = '#fbf5a8';
        this.intervalText = 'Rest';
      } else {
        this.activeColor = '#c2f0fc';
        this.intervalText = 'Round done! Rest';
      }
    },

    finalIntText() {
      this.activeColor = '#649d66';
      this.intervalText = 'Well Done!!';
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
        }, 200);
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

    // BUTTONS ACTIONS
    startTimer(currentInterval) {
      this.secondsLeft = currentInterval;
      this.activeInterval();
      this.interval = setInterval(() => {
        if (this.secondsLeft > 1) {
          this.secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = this.secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
        } else if (this.intervalCounter < this.intervals.length) {
          clearInterval(this.interval);
          this.longBeep(700);
          this.secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = this.secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
          this.intervalCounter += 1;
          this.startTimer(this.intervals[this.intervalCounter - 1]);
        } else {
          clearInterval(this.interval);
          this.longBeep(400);
          setTimeout(() => {
            this.longBeep(400);
            setTimeout(() => {
              this.longBeep(900);
            }, 500);
          }, 500);
          this.secondsLeft -= 1;
          document.getElementById('current-interval').innerHTML = this.secondsLeft;
          this.remaining -= 1;
          this.elapsed += 1;
          this.isBtnDisabled = false;
          this.finalIntText();
        }
      }, 1000);
    },

    playButton() {
      this.paused = false;
      this.isBtnDisabled = true;
      this.shortBeep();
      this.startTimer(this.secondsLeft);
    },

    pauseButton() {
      this.paused = true;
      this.isBtnDisabled = false;
      this.shortBeep();
      clearInterval(this.interval);
    },

    restartTimer() {
      this.remaining = this.totalInSeconds();
      this.elapsed = 0;
      this.intervalCounter = 1;
      this.secondsLeft = this.intervals[this.intervalCounter - 1];
      document.getElementById('current-interval').innerHTML = this.secondsLeft;
      this.activeInterval();
    },

    finishTimer() {
      this.restartTimer();
      this.timerReady = false;
      this.timerFinished = true;
    },

    nextInterval() {
      if (this.intervalCounter < this.intervals.length) {
        this.paused = false;
        this.isBtnDisabled = true;
        this.shortBeep();
        clearInterval(this.interval);
        this.remaining -= this.secondsLeft;
        this.elapsed = (this.elapsed * 1) + (this.secondsLeft * 1);
        this.intervalCounter += 1;
        this.secondsLeft = this.intervals[this.intervalCounter - 1];
        document.getElementById('current-interval').innerHTML = this.secondsLeft;
        this.startTimer(this.secondsLeft);
      }
    },

    previousInterval() {
      if (this.intervalCounter > 1) {
        this.paused = false;
        this.isBtnDisabled = true;
        this.shortBeep();
        clearInterval(this.interval);

        if ((this.intervals[this.intervalCounter - 1] - this.secondsLeft) < 3) {
          this.remaining += this.intervals[this.intervalCounter - 2]
          + (this.intervals[this.intervalCounter - 1] - this.secondsLeft);
          this.elapsed = (this.elapsed * 1)
          - (this.intervals[this.intervalCounter - 2]
          + (this.intervals[this.intervalCounter - 1] - this.secondsLeft));
          this.intervalCounter -= 1;
          this.secondsLeft = this.intervals[this.intervalCounter - 1];
          document.getElementById('current-interval').innerHTML = this.secondsLeft;
          this.startTimer(this.secondsLeft);
        } else {
          this.remaining += (this.intervals[this.intervalCounter - 1] - this.secondsLeft);
          this.elapsed = (this.elapsed * 1)
          - (this.intervals[this.intervalCounter - 1] - this.secondsLeft);
          // this.intervalCounter -= 1;
          this.secondsLeft = this.intervals[this.intervalCounter - 1];
          document.getElementById('current-interval').innerHTML = this.secondsLeft;
          this.startTimer(this.secondsLeft);
        }
      }
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

  .text-black {
    color: black;
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
