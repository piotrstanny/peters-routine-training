export default function wakeLockApi() {
  if ('WakeLock' in window && 'request' in window.WakeLock) {
    // The wake lock sentinel.
    let wakeLock = null;
    // Function that attempts to request a screen wake lock.
    const requestWakeLock = async () => {
      try {
        wakeLock = await window.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
          console.log('Screen Wake Lock was released');
        });
        console.log('Screen Wake Lock is active');
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };
    // Request a screen wake lock…
    requestWakeLock();

    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleVisibilityChange);
  } else if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
    // The wake lock sentinel.
    let wakeLock = null;
    // Function that attempts to request a screen wake lock.
    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
          console.log('Screen Wake Lock was released');
        });
        console.log('navigator Screen Wake Lock is active');
        // return 'Screen Lock is active';
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };
    // Request a screen wake lock…
    requestWakeLock();

    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleVisibilityChange);
  } else {
    console.log('Wake Lock API not supported.');
  }
}
