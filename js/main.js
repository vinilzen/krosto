$(function(){

	function a(){
		$('.fixh').css('max-height',400);
		$('.all_inf').html('Свернуть')
		return false;
	}
	function b(){
		$('.fixh').css('max-height',130);
		$('.all_inf').html('Показать полностью')
		return false;
	};

	$('.all_inf').click(function(){
		return (this.toggle = !this.toggle) ? a() : b();
	});

	function c(){
		$('.media_about_list').css('max-height',600);
		$('.more_public .btn').html('Свернуть')
		return false;
	}
	function d(){
		$('.media_about_list').css('max-height',200);
		$('.more_public .btn').html('Загрузить еще публикации')
		return false;
	};

	$('.more_public .btn').click(function(){
		return (this.toggle = !this.toggle) ? c() : d();
	});

	//$('.tab-content select').styler({selectSearch:true});
	//
	$("#mainSearch select").chosen({
        no_results_text: 'Нет совпадений',
        allow_single_deselect: true,
        search_contains: true,
        width: '100%'
    });

    $('#rekv').on('hide.bs.collapse', function () {
		$('.reqv').html('Показать реквизиты');
	}).on('show.bs.collapse', function () {
		$('.reqv').html('Скрыть реквизиты');
	});

	function set_map_height(){
		var wh = $( window ).height(),
			nav_h = $( '.navbar' ).height(),
			footer_h = $( '.footer' ).height();

		$('#mymap, .above_map').height(wh - nav_h - footer_h - 2);
	}

	if ( $('#mymap').length > 0 ){
		set_map_height();
		$( window ).resize(function() {
			set_map_height();
		});
	}

	$('#accordion .panel-collapse')
		.on('show.bs.collapse', function(e){
			if ($(e.target).hasClass('lvl1')) {
				$(e.target).closest('.panel').addClass('open');
			}
		})
		.on('hide.bs.collapse', function(e){
			if ($(e.target).hasClass('lvl1')) {
				$(e.target).closest('.panel').removeClass('open');
			}
		});

    $("#doctorSpecialitySelectLeft, #doctorMetroSelectLeft, #clinicSpecialitySelectLeft, #clinicMetroSelectLeft").chosen({
        no_results_text: 'Нет совпадений',
        allow_single_deselect: true,
        search_contains: true,
        width: '100%'
    });

	$(function () { 
		$("#revHelp[rel=popover]").popover({
			trigger: 'hover',
			placement: 'top',
			html: 'true',
			content: '<img class="icon" src="img/reviews.png">'});
	});


	$('.clinic-request .reviews a').click(function (evt) {
		evt.preventDefault();
		$('#clTab a[href="#reviewsTab"]').tab('show');
	});

	$('#clTab a:first').tab('show');
	
	if (location.hash == "#feedback") {
		$('#clTab a[href="#reviewsTab"]').tab('show');
	}


	$('[data-toggle="tooltip"]').tooltip();
	
	if ( $('#popoveBook').length > 0 ) {

		$('#popoveBook').popover({
			viewport: '.main-side',
			content: function(){
				return $('#more').html();
			}
		}).on('shown.bs.popover', function(){
			$('.popoveBook .close').click(function(){
				$('#popoveBook').popover('hide');
			});
		})
			.data('bs.popover')
	  		.tip()
	  		.addClass('popoveBook');
	}

	if ( $('#popoverPay').length > 0 ) {

		$('#popoverPay').popover({
			viewport: '.main-side',
			content: function(){
				return $('#content_pay').html();
			}
		}).on('shown.bs.popover', function(){
			$('.popoverPay .close').click(function(){
				$('#popoverPay').popover('hide');
			});
		})
			.data('bs.popover')
	  		.tip()
	  		.addClass('popoverPay');
	}


	
	$('.myModalAuth').click(function(){
		if ($('.auth_backdrop').length > 0){
			$('#myModalAuth').hide().appendTo('body');
			$('.auth_backdrop').remove();
		} else {
			var auth_backdrop = $('<div class="auth_backdrop"></div>')
				.click(function(){
					$('#myModalAuth').hide().appendTo('body');
					$('.auth_backdrop').remove();
				})
				.appendTo('.container-authmodal');
			$('#myModalAuth').appendTo('.container-authmodal').fadeIn();
		}
	});

	$('.my_auth_modal .close').click(function(){
		$('#myModalAuth').hide().appendTo('body');
		$('.auth_backdrop').remove();
	});

	$('.showMenu').click(function(){
		$('.city-changer-menu ul').fadeIn();
	});
	$('.hideProfileMenu').click(function(){
		$('.city-changer-menu ul').fadeOut();
	});
	$('.showCities').click(function(){
		$('.city-changer-cities ul').fadeIn();
	});
	$('.hideCityMenu').click(function(){
		$('.city-changer-cities ul').fadeOut();
	});


	$('.panel-accordion .panel-collapse')
		.on('show.bs.collapse', function(e){
			$(e.target).closest('.panel').addClass('open');
		})
		.on('hide.bs.collapse', function(e){
			$(e.target).closest('.panel').removeClass('open');
		});

});
