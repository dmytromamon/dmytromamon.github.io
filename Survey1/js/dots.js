$(document).ready(function(){	

	$('.point').draggable({
		drag: function (event, ui) {
			var offset = $('.pointer-canvas').offset();
			var position = ui.position;
			var $circle = $(this);
			var i = $circle.index();
			var parent = $circle.parent().position();
			parent = parent.left;
			var radius = $circle.prop('r').baseVal.value;
			var percent = Math.round((position.left + radius - parent - 60) / 2);

			$circle.prop('cx').baseVal.value = position.left - parent + radius;
			$('.pointer-canvas__pointer-left').eq(i).text(100 - percent + "%");
			$('.pointer-canvas__pointer-right').eq(i).text(percent + "%");
			if ((position.left + radius - parent) > 260) {
				$circle.prop('cx').baseVal.value = 260;
				$('.pointer-canvas__pointer-left').eq(i).text(0 + "%");
				$('.pointer-canvas__pointer-right').eq(i).text(100 + "%");
			}
			if ((position.left + radius - parent) < 60) {
				$circle.prop('cx').baseVal.value = 60;
				$('.pointer-canvas__pointer-left').eq(i).text(100 + "%");
				$('.pointer-canvas__pointer-right').eq(i).text(0 + "%");
			}
			pathBuild();
		}
	});

	function pathBuild() {
		var path = $('.path').eq(0);
		var d = "M" + $('.point').eq(0).prop('cx').baseVal.value + "," + $('.point').eq(0).prop('cy').baseVal.value + " C" + $('.point').eq(0).prop('cx').baseVal.value + "," + $('.point').eq(0).prop('cy').baseVal.value + " " + ($('.point').eq(1).prop('cx').baseVal.value + $('.point').eq(0).prop('cx').baseVal.value) / 2 + "," + ($('.point').eq(1).prop('cy').baseVal.value + $('.point').eq(0).prop('cy').baseVal.value) / 2 + " " + $('.point').eq(1).prop('cx').baseVal.value + "," + $('.point').eq(1).prop('cy').baseVal.value
		path.attr("d", d);
		var path = $('.path').eq(1);
		var d = "M" + $('.point').eq(1).prop('cx').baseVal.value + "," + $('.point').eq(1).prop('cy').baseVal.value + " C" + $('.point').eq(1).prop('cx').baseVal.value + "," + $('.point').eq(1).prop('cy').baseVal.value + " " + ($('.point').eq(2).prop('cx').baseVal.value + $('.point').eq(1).prop('cx').baseVal.value) / 2 + "," + ($('.point').eq(2).prop('cy').baseVal.value + $('.point').eq(1).prop('cy').baseVal.value) / 2 + " " + $('.point').eq(2).prop('cx').baseVal.value + "," + $('.point').eq(2).prop('cy').baseVal.value
		path.attr("d", d);
	}

	pathBuild();
	
});