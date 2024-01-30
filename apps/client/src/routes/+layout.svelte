<script>
  import "./styles.css";
  import { FirebaseApp } from "sveltefire";
  import { initializeApp } from "firebase/app";
  import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
  // This is apparently ok...
  const firebaseConfig = {
    apiKey: "AIzaSyA2bhWRj9RcPvNNg3xph4WezktfWdvLhuo",
    authDomain: "game-clock-90182.firebaseapp.com",
    projectId: "game-clock-90182",
    storageBucket: "game-clock-90182.appspot.com",
    messagingSenderId: "1056906060895",
    appId: "1:1056906060895:web:ca01b18cfd4189f448a7ea",
    measurementId: "G-W9L1F63SL0",
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  // TODO: add some check to see whether we're in dev mode
  connectFirestoreEmulator(firestore, "127.0.01", 8080);
</script>

<FirebaseApp {firestore}>
  <div class="app">
    <main>
      <slot />
    </main>
  </div>
</FirebaseApp>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    justify-content: center;
  }
</style>
