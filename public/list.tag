<list>

	<ul>
		<li each={items}>{pos} {title}</li>
	</ul>

	<script>
		
		this.items = [
			{ pos: '1', title: 'First item' },
			{ pos: '2', title: 'Second item' },
			{ pos: '3', title: 'Third item' }
		];

	</script>

</list>