
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
								<label>${info[i].description}</label>
							`
						}

						for( let j = 0; j < info[i].categories.length; j++) {
							newCategories += `
								<div id='${info[i].categories[j].category_id}'>
									<h3>${info[i].categories[j].category_name}</h3>
								</div>
							`

							let newNominees = ''

							for( let k = 0; k < info[i].categories[j].nominees.length; k++) {

								if(info[i].categories[j].winner_id == k){
									newCategories += `
										<ul>
											<li><span class='winner'>
												${info[i].categories[j].nominees[k].nominee}
											</span> <span>WINNER!</span></li>
											<label>${info[i].categories[j].nominees[k].artist}</label>
										</ul>
									`
								} else {
									newCategories += `
										<ul>
											<li><span>
												${info[i].categories[j].nominees[k].nominee}
											</span></li>
											<label>${info[i].categories[j].nominees[k].artist}</label>
										</ul>
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


/*
for (let k = 0; j < info[i].categories[j].nominees.length; k++) {
	<ul>${info[i].categories[j].nominees[k].nominee}</ul>
}
*/
