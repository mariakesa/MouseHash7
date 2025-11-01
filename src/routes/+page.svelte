<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<div class="container">
	<h1>MouseHash7 - Data Visualization Platform</h1>
	
	<div class="auth-section">
		{#if data.session}
			<div class="user-info">
				<p>Welcome, {data.session.user?.name || 'User'}!</p>
				{#if data.session.user?.image}
					<img src={data.session.user.image} alt="Profile" class="avatar" />
				{/if}
				<form method="POST" action="/auth/signout">
					<button type="submit">Sign Out</button>
				</form>
			</div>
		{:else}
			<div class="login-prompt">
				<p>Please sign in to access visualizations</p>
				<form method="POST" action="/auth/signin/github">
					<button type="submit">Sign in with GitHub</button>
				</form>
			</div>
		{/if}
	</div>

	<div class="links">
		<a href="/visualizations">View Visualizations</a>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
	}

	h1 {
		color: #333;
		margin-bottom: 2rem;
	}

	.auth-section {
		background: #f5f5f5;
		padding: 2rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.avatar {
		width: 64px;
		height: 64px;
		border-radius: 50%;
	}

	.login-prompt {
		text-align: center;
	}

	button {
		background: #0066cc;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	button:hover {
		background: #0052a3;
	}

	.links {
		text-align: center;
	}

	.links a {
		color: #0066cc;
		text-decoration: none;
		font-size: 1.1rem;
	}

	.links a:hover {
		text-decoration: underline;
	}
</style>
