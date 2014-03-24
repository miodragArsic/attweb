$('#send').click(function() {
	var campaign = $('#send').attr('name');
	var body = $('#'+campaign).serialize()
	$.ajax({
		url : '/form/'+ campaign +'/' + $("#emailinput").val(),
		type : 'GET',
		dataType : 'json',
		data : body,
		success : function() {
			alert("Submitted!");
		},
		failure : function() {
			alert("Failed!");
		}
	});
	return false;
});