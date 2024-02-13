<script>
	import './styles.css';
	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { connectAuthEmulator, getAuth } from 'firebase/auth';
	import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
	import Header from '$lib/components/Header.svelte';
	// This is apparently ok...
	const firebaseConfig = {
		apiKey: 'AIzaSyA2bhWRj9RcPvNNg3xph4WezktfWdvLhuo',
		authDomain: 'game-clock-90182.firebaseapp.com',
		projectId: 'game-clock-90182',
		storageBucket: 'game-clock-90182.appspot.com',
		messagingSenderId: '1056906060895',
		appId: '1:1056906060895:web:ca01b18cfd4189f448a7ea',
		measurementId: 'G-W9L1F63SL0'
	};
	const app = initializeApp(firebaseConfig);
	const firestore = getFirestore(app);
	const auth = getAuth(app);

	if (process.env.NODE_ENV === 'development') {
		console.log('Connecting to emulators');
		connectFirestoreEmulator(firestore, '127.0.01', 8080);
		connectAuthEmulator(auth, 'http://127.0.0.1:9099');
	}
</script>

<FirebaseApp {firestore} {auth}>
	<div class="app">
		<Header />
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
