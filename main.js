var stopwatch = {
    startTime: 0,
    elapsedTime: 0,
    isRunning: false,
    lapTimes: [],
  
    start: function() {
      if (!this.isRunning) {
        this.startTime = Date.now() - this.elapsedTime;
        this.isRunning = true;
      }
    },
  
    stop: function() {
      if (this.isRunning) {
        this.elapsedTime = Date.now() - this.startTime;
        this.isRunning = false;
        this.updateTimeDisplay();
      }
    },
  
    reset: function() {
      this.elapsedTime = 0;
      this.startTime = 0;
      this.isRunning = false;
      this.lapTimes = [];
      this.updateTimeDisplay();
      this.clearLapTimes();
    },
  
    lap: function() {
      if (this.isRunning) {
        var lapTime = this.elapsedTime;
        this.lapTimes.push(lapTime);
        this.displayLapTime(lapTime);
      }
    },
  
    updateTimeDisplay: function() {
      var milliseconds = this.elapsedTime;
      var seconds = Math.floor(milliseconds / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
  
      milliseconds %= 1000;
      seconds %= 60;
      minutes %= 60;
  
      var timeString = hours.toString().padStart(2, '0') + ':' +
                       minutes.toString().padStart(2, '0') + ':' +
                       seconds.toString().padStart(2, '0') + '.' +
                       milliseconds.toString().padStart(3, '0');
  
      document.getElementById('stopwatchTime').textContent = timeString;
    },
  
    displayLapTime: function(lapTime) {
      var milliseconds = lapTime;
      var seconds = Math.floor(milliseconds / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
  
      milliseconds %= 1000;
      seconds %= 60;
      minutes %= 60;
  
      var timeString = hours.toString().padStart(2, '0') + ':' +
                       minutes.toString().padStart(2, '0') + ':' +
                       seconds.toString().padStart(2, '0') + '.' +
                       milliseconds.toString().padStart(3, '0');
  
      var lapList = document.getElementById('lapList');
      var lapItem = document.createElement('li');
      lapItem.textContent = timeString;
      lapList.appendChild(lapItem);
    },
  
    clearLapTimes: function() {
      var lapList = document.getElementById('lapList');
      lapList.innerHTML = '';
    }
  };
  
  document.getElementById('startButton').addEventListener('click', function() {
    stopwatch.start();
  });
  
  document.getElementById('stopButton').addEventListener('click', function() {
    stopwatch.stop();
  });
  
  document.getElementById('resetButton').addEventListener('click', function() {
    stopwatch.reset();
  });
  
  document.getElementById('lapButton').addEventListener('click', function() {
    stopwatch.lap();
  });