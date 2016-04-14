$(document).ready(function(){

var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 0;

	var $slider = $('#slider');
	var $sliderContainer = $slider.find('.slides');
	var $slides = $sliderContainer.find('.slide');

	var i;
	for(i=1;i<$slides.length;i++)
		$($slides[i]).addClass("hidden");

var colorList = document.getElementById('colors');
var items = colorList.querySelectorAll('div');
var head = document.getElementById('header');

for (var i = 0; i < items.length; i++){
	items[i].addEventListener('click', editHeader);
}

function editHeader() {
	var itemcolor = this.id;
	this.onclick = head.style.backgroundColor = itemcolor;
	// this.onclick = head.style.color = itemcolor;
}

	
	var interval;

	function startSlider() {
		interval = setInterval(function() {	
				
				// $($slides[currentSlide]).addClass("hidden");
				currentSlide++;
				$($slides[currentSlide]).removeClass("hidden");
				// $($slides[currentSlide-1]).addClass("hidden");
				$($slider).css('height', $($slides[currentSlide]).children().height());
				$($slider).css('width', $($slides[currentSlide]).children().width());
				$sliderContainer.animate({'margin-left' : '-=' + width}, animationSpeed, function() {	
			});

			if (currentSlide == $slides.length-1) {
					currentSlide=0;
					$sliderContainer.animate({'margin-left' : 0}, 0, function() {
						for(i=1;i<$slides.length;i++)
							$($slides[i]).addClass("hidden");
					});
				}
			console.log(currentSlide);
		}, pause);
	}
		
	function stopSlider() {
		clearInterval(interval);
	}

	// pause on mouseenter, resume on mouseleave

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();

	// $('.color').on('click', function(){
	// 	var colorId = $(this).attr('data-colorid');
	// 	$('header').css{'background' : colorId};
	// });

});