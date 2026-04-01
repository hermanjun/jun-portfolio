
const STREAK_STORAGE_KEY = "dailyStreakState";

function createDefaultStreakState() {
  return {
    streakCount: 0,
    lastCheckIn: null
  };
}

function saveStreakState(state) {
  localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(state));
}

function loadStreakState() {
  const saved = localStorage.getItem(STREAK_STORAGE_KEY);

  if (!saved) {
    return createDefaultStreakState();
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    return createDefaultStreakState(); // Fallback for corrupted data
  }
}

function getTodayDateString() {
  return new Date() .toISOString() .split("T") [0];
}

function calculateDayDifference (lastCheckIn, today) {
  const oneDay = 24 * 60 * 60 * 1000;
  const lastDate = new Date(lastCheckIn);
  const todayDate = new Date(today);
  const diff = todayDate - lastDate;

  return Math.round(diff / oneDay);
}

function updateStreakState (currentState) {
  const today = getTodayDateString();

  if (! currentState.lastCheckIn) {
    return { streakCount: 1, lastCheckIn: today };
  }

  const difference = calculateDayDifference(currentState.lastCheckIn, today);

  if (difference === 0) {
    return currentState;
  }

  if (difference === 1) {
    return {
      streakCount: currentState.streakCount +1,
      lastCheckIn: today
    };
  }

  return {
    streakCount: 1,
    lastCheckIn: today
  };
}

function initApp() {
  console.log("App initialized");
}

initApp();