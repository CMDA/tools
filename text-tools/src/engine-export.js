function exportJSON () {
	var exportObj = [];
	for (var i = 0; i < fields.length; i++) {
		var fieldset = {};
		fieldset.fieldsetName = fields[i].name

		if (fields[i].children.length) {
			fieldset.children = []
			for (var j = 0; j < fields[i].children.length; j++) {
				fieldset.children.push(fields[i].children[j].getJSON());
			}
		};

		exportObj.push(fieldset);
	}
	return JSON.stringify(exportObj);
}