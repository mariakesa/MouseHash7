<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let chartContainer: HTMLDivElement;

	// Sample data for bar chart
	const data = [
		{ name: 'A', value: 30 },
		{ name: 'B', value: 80 },
		{ name: 'C', value: 45 },
		{ name: 'D', value: 60 },
		{ name: 'E', value: 20 },
		{ name: 'F', value: 90 }
	];

	onMount(() => {
		// Set dimensions
		const margin = { top: 20, right: 20, bottom: 40, left: 40 };
		const width = 500 - margin.left - margin.right;
		const height = 300 - margin.top - margin.bottom;

		// Create SVG
		const svg = d3
			.select(chartContainer)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		// Create scales
		const x = d3
			.scaleBand()
			.range([0, width])
			.domain(data.map((d) => d.name))
			.padding(0.2);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.value) || 100])
			.range([height, 0]);

		// Add X axis
		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x));

		// Add Y axis
		svg.append('g').call(d3.axisLeft(y));

		// Add bars with animation
		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d) => x(d.name) || 0)
			.attr('width', x.bandwidth())
			.attr('fill', '#0066cc')
			.attr('y', height)
			.attr('height', 0)
			.transition()
			.duration(800)
			.attr('y', (d) => y(d.value))
			.attr('height', (d) => height - y(d.value));

		// Add title
		svg
			.append('text')
			.attr('x', width / 2)
			.attr('y', -5)
			.attr('text-anchor', 'middle')
			.style('font-size', '16px')
			.text('Sample Bar Chart');
	});
</script>

<div class="chart-wrapper">
	<div bind:this={chartContainer} class="chart"></div>
</div>

<style>
	.chart-wrapper {
		background: white;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.chart {
		display: flex;
		justify-content: center;
	}
</style>
