T("body").start({});

T("story")
	.moveTo(90)
	.tween({
		from:	{ "color": "#000000" },
		to:		{ "color": "#ffffff" },
		duration: 10
	});

T("bg-1")
	.moveTo(0)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-2")
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

T("bg-3")
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

T("bg-4")
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

T("bg-5")
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

T("bg-6")
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

T("bg-7")
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

T("bg-8")
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

T("bg-9")
	.moveTo(80)
	.tween({
		from:	{ "opacity": 0 },
		to:		{ "opacity": 1 },
		duration: 10
	}).moveTo(90)
	.tween({
		from:	{ "opacity": 1 },
		to:		{ "opacity": 0 },
		duration: 10
	});

T("bg-10")
	.moveTo(90)
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