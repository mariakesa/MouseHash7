<script lang="ts">
	import type { PageData } from './$types';
	import BarChart from '$lib/components/BarChart.svelte';
	import LineChart from '$lib/components/LineChart.svelte';
	
	let { data }: { data: PageData } = $props();
</script>

<div class="container">
	<header>
		<h1>Data Visualizations</h1>
		<div class="user-info">
			<span>Logged in as: {data.session?.user?.name || 'User'}</span>
			<form method="POST" action="/auth/signout">
				<button type="submit">Sign Out</button>
			</form>
		</div>
	</header>

	<div class="charts-grid">
		<div class="chart-item">
			<h2>Bar Chart Visualization</h2>
			<p>Interactive bar chart showing sample data distribution</p>
			<BarChart />
		</div>

		<div class="chart-item">
			<h2>Line Chart Visualization</h2>
			<p>Time series data with smooth animation</p>
			<LineChart />
		</div>
	</div>

	<div class="footer">
		<a href="/">Back to Home</a>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid #e0e0e0;
	}

	h1 {
		color: #333;
		margin: 0;
	}

	.user-info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.user-info span {
		color: #666;
	}

	button {
		background: #0066cc;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 0.9rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	button:hover {
		background: #0052a3;
	}

	.charts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.chart-item {
		background: #f9f9f9;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.chart-item h2 {
		margin-top: 0;
		color: #333;
		font-size: 1.3rem;
	}

	.chart-item p {
		color: #666;
		margin-bottom: 1rem;
	}

	.footer {
		text-align: center;
		margin-top: 2rem;
	}

	.footer a {
		color: #0066cc;
		text-decoration: none;
		font-size: 1.1rem;
	}

	.footer a:hover {
		text-decoration: underline;
	}
</style>
