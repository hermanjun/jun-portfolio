
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


function initApp() {
  console.log("App initialized");
}

initApp();