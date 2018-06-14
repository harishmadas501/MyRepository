{
	options: {
        css: {
        }
    },
	load: function() {
		$(".choose-plan-card-btn").click( function() {
			rtc.card.btnClickContinueVideo("continue", {
				chosen_plan: $(this).attr("plan")
			} )
		});
	},
	show: function() {
	},
	hide: function() {
	}
}
