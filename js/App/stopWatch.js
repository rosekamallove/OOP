/*
 * sw.start()
 * sw.stop()
 * sw.reset()
 * sw.duration()
 */

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) throw new Error("Already Running");
    running = 1;
    startTime = new Date();
  };

  this.stop = () => {
    if (!running) throw new Error("Already stopped");
    running = 0;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    running = 0;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}

const sw = new StopWatch();
