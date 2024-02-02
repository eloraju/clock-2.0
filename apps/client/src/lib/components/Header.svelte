<script lang="ts">
	import { SignedIn, SignedOut, getFirebaseContext } from 'sveltefire';
	import { signInAnonymously, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	const google = new GoogleAuthProvider();
</script>

<header>
	<div>Hammertime</div>
	<div>
		<SignedIn let:signOut let:user>
			<button on:click={signOut}>Sign out {user.displayName}</button>
		</SignedIn>
		<SignedOut let:auth>
			<button on:click={() => signInAnonymously(auth)}>Anon sign in</button>
			<button on:click={() => signInWithPopup(auth, google)}>Google sign in</button>
		</SignedOut>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 24px;
		background-color: #282c34;
		color: white;
		padding: 24px;
	}
</style>
