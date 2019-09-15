
$.ajax({
	url: 'https://lourdesnrdz.github.io/Aplicaciones-Web/Lab3_Grammys/data/grammys.json',
	type: 'GET',
	dataType: 'json',
	success: function(data) {
		console.log(data)

		let newHtml = ''

		for( let i = 0; i < data.fields.length; i++) {
			newHtml += `
				<option value="${data.fields[i].field_id}">
					${data.fields[i].field}
				</option>
			`
		}


		$('#category_types').append(newHtml)

	},
	error: function(errorMsg) {
		console.log(errorMsg)
	}

})




