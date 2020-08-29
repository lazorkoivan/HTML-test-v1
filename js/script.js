function parameter_2_int (string) {

	return parseInt(string.substring(0, string.indexOf("px")));
}

$(document).ready(function() {
	if (!($(".wrapper").find("main").length)) {
		$("footer").css({
			position: "relative"
		}).offset({top: $(window).height()-$("footer").height()});
	}
	if (!($(".wrapper").find("header").length)) {
		$("main").css({marginTop: 152});
	}
	
	if ($(".block_2").position().left < $(".block_1").width() + 24) {
		$(".block_1").css({marginLeft: (960 - $(".block_1").width())/2});
		$(".block_2").css({
			marginLeft: (960 - $(".block_2").width())/2,
			marginTop: 18
	});
	}
	if ($(".block_3").position().left < $(".header_row").width()- $(".block_3").width()) {
		$(".block_3").css({
			marginLeft: (960 - $(".block_3").width())/2,
			marginTop: 18
		});
	}
	if ($(".center").height() > parameter_2_int($(".center").css("minHeight"))) {
		$(".left").height($(".center").height());
	}
	if ($(".left").height() > parameter_2_int($(".center").css("minHeight"))) {
		$(".center").height($(".left").height());
	}
});
$(document).resize(function() {
	if (!($(".wrapper").find("main").length)) {
		$("footer").css({
			position: "relative"
		}).offset({top: $(window).height()-$("footer").height()});
	}
	if (!($(".wrapper").find("header").length)) {
		$("main").css({marginTop: 152});
	}
});



