
$.ajax({
	url: 'data/grammys.json',
	type: 'GET',
	dataType: 'json',
	success: function(data) {
		console.log(data)

		let newHtml = ''

		for( let i = 0; i < data.length; i++) {
			newHtml += `
				<option value="${data[i].field_id}">
					${data[i].field}
				</option>
			`
		}


		$('#category_types').append(newHtml)

	},
	error: function(errorMsg) {
		console.log(errorMsg)
	}

})




