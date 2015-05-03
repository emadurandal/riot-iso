<list>

	<yield/>
	
	<ul class="list">
		<li each={items} onclick={parent.click}>{pos} {title}</li>
	</ul>

	<script>
		
		this.items = [
			{ pos: '1', title: 'First item' },
			{ pos: '2', title: 'Second item' },
			{ pos: '3', title: 'Third item' }
		];

		click(e) {
			alert(e.item.title + ' was clicked!');
		}

	</script>

</list>