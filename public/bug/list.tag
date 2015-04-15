<list>

	<ul>
		<li each={items2}>{pos} {title}</li>
	</ul>

	<table>
        <thead>
            <th>Pos</th>
            <th>Title</th>
        </thead>
        <tbody>
            <tr each={items2}>
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