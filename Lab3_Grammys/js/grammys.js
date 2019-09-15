
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
		loadCategoriesJSON()

	},
	error: function(errorMsg) {
		console.log(errorMsg)
	}

})

function loadCategoriesJSON() {

	$.ajax({
		url : 'https://lourdesnrdz.github.io/Aplicaciones-Web/Lab3_Grammys/data/grammys.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			$('#category_types').on('change', function(event) {
				let id = $(this).val()

				let info = data.fields
				

				for(let i = 0; i < info.length; i++) {
					if (id == info[i].field_id) {
						let newCategories = ''

						for( let j = 0; j < info[i].categories.length; j++) {
							newCategories += `
								<div id='${info[i].categories[j].category_id}'>
									<h2>${info[i].categories[j].category_name}</h2>
								</div>
							`
						}

						$('#nominees_section').append(newCategories)
						console.log(newCategories)

						//$('#stateCapital').val(data[i].capital)
					}
				}
			})

		},
		error : function(errorMsg) {
			console.log(errorMsg)
		}

	})
}


