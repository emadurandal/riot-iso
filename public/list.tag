<list>

	<ul>
		<li each={items}>{pos} {title}</li>
	</ul>

	<table>
        <thead>
            <th>Pos</th>
            <th>Title</th>
        </thead>
        <tbody>
            <tr each={items}>
                <td>{pos}</td>
                <td>{title}</td>
            </tr>
        </tbody>
    </table>

	<script>
		
		this.items = [
			{ pos: '1', title: 'First item' },
			{ pos: '2', title: 'Second item' },
			{ pos: '3', title: 'Third item' }
		];

		this.items2 = [
			{ pos: 1, title: 'First item' },
			{ pos: 2, title: 'Second item' },
			{ pos: 3, title: 'Third item' }
		];

	</script>

</list>