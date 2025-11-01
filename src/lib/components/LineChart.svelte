<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let chartContainer: HTMLDivElement;

	// Sample time series data
	const data = Array.from({ length: 20 }, (_, i) => ({
		x: i,
		y: Math.sin(i / 3) * 30 + 50 + Math.random() * 10
	}));

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
			.scaleLinear()
			.domain([0, data.length - 1])
			.range([0, width]);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.y) || 100])
			.range([height, 0]);

		// Add X axis
		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x));

		// Add Y axis
		svg.append('g').call(d3.axisLeft(y));

		// Add line
		const line = d3
			.line<{ x: number; y: number }>()
			.x((d) => x(d.x))
			.y((d) => y(d.y))
			.curve(d3.curveMonotoneX);

		const path = svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', '#0066cc')
			.attr('stroke-width', 2)
			.attr('d', line);

		// Animate line drawing
		const pathLength = path.node()?.getTotalLength() || 0;
		path
			.attr('stroke-dasharray', pathLength + ' ' + pathLength)
			.attr('stroke-dashoffset', pathLength)
			.transition()
			.duration(2000)
			.attr('stroke-dashoffset', 0);

		// Add dots
		svg
			.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			.attr('cx', (d) => x(d.x))
			.attr('cy', (d) => y(d.y))
			.attr('r', 0)
			.attr('fill', '#0066cc')
			.transition()
			.delay((d, i) => i * 100)
			.duration(500)
			.attr('r', 4);

		// Add title
		svg
			.append('text')
			.attr('x', width / 2)
			.attr('y', -5)
			.attr('text-anchor', 'middle')
			.style('font-size', '16px')
			.text('Sample Line Chart');
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
