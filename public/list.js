riot.tag('list', '<yield></yield> <ul class="list"> <li each="{items}" onclick="{parent.click}">{pos} {title}</li> </ul>', function(opts) {
		
		this.items = [
			{ pos: '1', title: 'First item' },
			{ pos: '2', title: 'Second item' },
			{ pos: '3', title: 'Third item' }
		];

		this.click = function(e) {
			alert(e.item.title + ' was clicked!');
		}.bind(this);

	
});