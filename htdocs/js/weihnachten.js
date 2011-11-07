T("body").start({});

T("story")
	.moveTo(80)
	.tween({
		from:	{ "color": "#000000"},
		to:		{ "color": "#ffffff"},
		duration: 10
	});

T("bg-01")
	.moveTo(0)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-02")
	.moveTo(0)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(10)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-03")
	.moveTo(10)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(20)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-04")
	.moveTo(20)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(30)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-05")
	.moveTo(30)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(40)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-06")
	.moveTo(40)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(50)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-07")
	.moveTo(50)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(60)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-08")
	.moveTo(60)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(70)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-09")
	.moveTo(70)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(80)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-10")
	.moveTo(80)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	});


$(document).ready(function(){
	Timeline.ready();

	new jQueryScrollingTimeline({
		onScroll: function(position) { Timeline.render(position); },
		viewportDidChange: function(width, height) {
			$(document.body).css({ height: (height * 3) });
		}
	});
	
});