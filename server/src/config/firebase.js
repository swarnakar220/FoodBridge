let app = null;

console.warn("Firebase disabled for local development.");

function getMessaging() {
  return null;
}

export { app, getMessaging };