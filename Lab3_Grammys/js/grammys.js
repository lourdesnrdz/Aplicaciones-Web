
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

						newCategories += `
							<h2>${info[i].field}</h2>
						`

						if(info[i].description != null) {
							newCategories += `
								<label class='description'>${info[i].description}</label>
							`
						}

						for( let j = 0; j < info[i].categories.length; j++) {
							newCategories += `
								<div id='${info[i].categories[j].category_id}'>
									<h3>${info[i].categories[j].category_name}</h3>
								</div>
							`

							for( let k = 0; k < info[i].categories[j].nominees.length; k++) {

								if(info[i].categories[j].winner_id == k){
									newCategories += `
										<li><span class='winner'>
											${info[i].categories[j].nominees[k].nominee}
										</span> <span>WINNER!</span></li>
										<ul>${info[i].categories[j].nominees[k].artist}</ul>
										
									`
								} else {
									newCategories += `
										<li><span>
											${info[i].categories[j].nominees[k].nominee}
										</span></li>

										<ul>${info[i].categories[j].nominees[k].artist}</ul>
									`
								}

								if(info[i].categories[j].nominees[k].info != null){
									newCategories += `
										<ul>${info[i].categories[j].nominees[k].info}</ul>
									`
								}

							}
						}

						$('#nominees_section').html(newCategories)
						console.log(newCategories)
						
					}
				}
			})

		},
		error : function(errorMsg) {
			console.log(errorMsg)
		}

	})
}

