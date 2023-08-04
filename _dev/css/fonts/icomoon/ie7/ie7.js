/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-notdef3': '&#xe9ef;',
		'icon-glass': '&#xf000;',
		'icon-music': '&#xf001;',
		'icon-search': '&#xf002;',
		'icon-envelope': '&#xf003;',
		'icon-heart': '&#xf004;',
		'icon-star': '&#xf005;',
		'icon-star_empty': '&#xf006;',
		'icon-user': '&#xf007;',
		'icon-film': '&#xf008;',
		'icon-th_large': '&#xf009;',
		'icon-th': '&#xf00a;',
		'icon-th_list': '&#xf00b;',
		'icon-ok': '&#xf00c;',
		'icon-remove': '&#xf00d;',
		'icon-zoom_in': '&#xf00e;',
		'icon-zoom_out': '&#xf010;',
		'icon-off': '&#xf011;',
		'icon-signal': '&#xf012;',
		'icon-cog': '&#xf013;',
		'icon-trash': '&#xf014;',
		'icon-home': '&#xf015;',
		'icon-file_alt': '&#xf016;',
		'icon-time': '&#xf017;',
		'icon-road': '&#xf018;',
		'icon-download_alt': '&#xf019;',
		'icon-download': '&#xf01a;',
		'icon-upload': '&#xf01b;',
		'icon-inbox': '&#xf01c;',
		'icon-play_circle': '&#xf01d;',
		'icon-repeat': '&#xf01e;',
		'icon-refresh': '&#xf021;',
		'icon-list_alt': '&#xf022;',
		'icon-lock': '&#xf023;',
		'icon-flag': '&#xf024;',
		'icon-headphones': '&#xf025;',
		'icon-volume_off': '&#xf026;',
		'icon-volume_down': '&#xf027;',
		'icon-volume_up': '&#xf028;',
		'icon-qrcode': '&#xf029;',
		'icon-barcode': '&#xf02a;',
		'icon-tag': '&#xf02b;',
		'icon-tags': '&#xf02c;',
		'icon-book': '&#xf02d;',
		'icon-bookmark': '&#xf02e;',
		'icon-print': '&#xf02f;',
		'icon-camera': '&#xf030;',
		'icon-font': '&#xf031;',
		'icon-bold': '&#xf032;',
		'icon-italic': '&#xf033;',
		'icon-text_height': '&#xf034;',
		'icon-text_width': '&#xf035;',
		'icon-align_left': '&#xf036;',
		'icon-align_center': '&#xf037;',
		'icon-align_right': '&#xf038;',
		'icon-align_justify': '&#xf039;',
		'icon-list': '&#xf03a;',
		'icon-indent_left': '&#xf03b;',
		'icon-indent_right': '&#xf03c;',
		'icon-facetime_video': '&#xf03d;',
		'icon-picture': '&#xf03e;',
		'icon-pencil': '&#xf040;',
		'icon-map_marker': '&#xf041;',
		'icon-adjust': '&#xf042;',
		'icon-tint': '&#xf043;',
		'icon-edit': '&#xf044;',
		'icon-share': '&#xf045;',
		'icon-check': '&#xf046;',
		'icon-move': '&#xf047;',
		'icon-step_backward': '&#xf048;',
		'icon-fast_backward': '&#xf049;',
		'icon-backward': '&#xf04a;',
		'icon-play': '&#xf04b;',
		'icon-pause': '&#xf04c;',
		'icon-stop': '&#xf04d;',
		'icon-forward': '&#xf04e;',
		'icon-fast_forward': '&#xf050;',
		'icon-step_forward': '&#xf051;',
		'icon-eject': '&#xf052;',
		'icon-chevron_left': '&#xf053;',
		'icon-chevron_right': '&#xf054;',
		'icon-plus_sign': '&#xf055;',
		'icon-minus_sign': '&#xf056;',
		'icon-remove_sign': '&#xf057;',
		'icon-ok_sign': '&#xf058;',
		'icon-question_sign': '&#xf059;',
		'icon-info_sign': '&#xf05a;',
		'icon-screenshot': '&#xf05b;',
		'icon-remove_circle': '&#xf05c;',
		'icon-ok_circle': '&#xf05d;',
		'icon-ban_circle': '&#xf05e;',
		'icon-arrow_left': '&#xf060;',
		'icon-arrow_right': '&#xf061;',
		'icon-arrow_up': '&#xf062;',
		'icon-arrow_down': '&#xf063;',
		'icon-share_alt': '&#xf064;',
		'icon-resize_full': '&#xf065;',
		'icon-resize_small': '&#xf066;',
		'icon-plus': '&#xf067;',
		'icon-minus': '&#xf068;',
		'icon-asterisk': '&#xf069;',
		'icon-exclamation_sign': '&#xf06a;',
		'icon-gift': '&#xf06b;',
		'icon-leaf': '&#xf06c;',
		'icon-fire': '&#xf06d;',
		'icon-eye_open': '&#xf06e;',
		'icon-eye_close': '&#xf070;',
		'icon-warning_sign': '&#xf071;',
		'icon-plane': '&#xf072;',
		'icon-calendar': '&#xf073;',
		'icon-random': '&#xf074;',
		'icon-comment': '&#xf075;',
		'icon-magnet': '&#xf076;',
		'icon-chevron_up': '&#xf077;',
		'icon-chevron_down': '&#xf078;',
		'icon-retweet': '&#xf079;',
		'icon-shopping_cart': '&#xf07a;',
		'icon-folder_close': '&#xf07b;',
		'icon-folder_open': '&#xf07c;',
		'icon-resize_vertical': '&#xf07d;',
		'icon-resize_horizontal': '&#xf07e;',
		'icon-bar_chart': '&#xf080;',
		'icon-twitter_sign': '&#xf081;',
		'icon-facebook_sign': '&#xf082;',
		'icon-camera_retro': '&#xf083;',
		'icon-key': '&#xf084;',
		'icon-cogs': '&#xf085;',
		'icon-comments': '&#xf086;',
		'icon-thumbs_up_alt': '&#xf087;',
		'icon-thumbs_down_alt': '&#xf088;',
		'icon-star_half': '&#xf089;',
		'icon-heart_empty': '&#xf08a;',
		'icon-signout': '&#xf08b;',
		'icon-linkedin_sign': '&#xf08c;',
		'icon-pushpin': '&#xf08d;',
		'icon-external_link': '&#xf08e;',
		'icon-signin': '&#xf090;',
		'icon-trophy': '&#xf091;',
		'icon-github_sign': '&#xf092;',
		'icon-upload_alt': '&#xf093;',
		'icon-lemon': '&#xf094;',
		'icon-phone': '&#xf095;',
		'icon-check_empty': '&#xf096;',
		'icon-bookmark_empty': '&#xf097;',
		'icon-phone_sign': '&#xf098;',
		'icon-twitter1': '&#xf099;',
		'icon-facebook1': '&#xf09a;',
		'icon-github': '&#xf09b;',
		'icon-unlock': '&#xf09c;',
		'icon-credit_card': '&#xf09d;',
		'icon-rss1': '&#xf09e;',
		'icon-hdd': '&#xf0a0;',
		'icon-bullhorn': '&#xf0a1;',
		'icon-bell': '&#xf0a2;',
		'icon-certificate': '&#xf0a3;',
		'icon-hand_right': '&#xf0a4;',
		'icon-hand_left': '&#xf0a5;',
		'icon-hand_up': '&#xf0a6;',
		'icon-hand_down': '&#xf0a7;',
		'icon-circle_arrow_left': '&#xf0a8;',
		'icon-circle_arrow_right': '&#xf0a9;',
		'icon-circle_arrow_up': '&#xf0aa;',
		'icon-circle_arrow_down': '&#xf0ab;',
		'icon-globe': '&#xf0ac;',
		'icon-wrench': '&#xf0ad;',
		'icon-tasks': '&#xf0ae;',
		'icon-filter': '&#xf0b0;',
		'icon-briefcase': '&#xf0b1;',
		'icon-fullscreen': '&#xf0b2;',
		'icon-group': '&#xf0c0;',
		'icon-link': '&#xf0c1;',
		'icon-cloud': '&#xf0c2;',
		'icon-beaker': '&#xf0c3;',
		'icon-cut': '&#xf0c4;',
		'icon-copy': '&#xf0c5;',
		'icon-paper_clip': '&#xf0c6;',
		'icon-save': '&#xf0c7;',
		'icon-sign_blank': '&#xf0c8;',
		'icon-reorder': '&#xf0c9;',
		'icon-ul': '&#xf0ca;',
		'icon-ol': '&#xf0cb;',
		'icon-strikethrough': '&#xf0cc;',
		'icon-underline': '&#xf0cd;',
		'icon-table': '&#xf0ce;',
		'icon-magic': '&#xf0d0;',
		'icon-truck': '&#xf0d1;',
		'icon-pinterest1': '&#xf0d2;',
		'icon-pinterest_sign': '&#xf0d3;',
		'icon-google_plus_sign': '&#xf0d4;',
		'icon-google_plus': '&#xf0d5;',
		'icon-money': '&#xf0d6;',
		'icon-caret_down': '&#xf0d7;',
		'icon-caret_up': '&#xf0d8;',
		'icon-caret_left': '&#xf0d9;',
		'icon-caret_right': '&#xf0da;',
		'icon-columns': '&#xf0db;',
		'icon-sort': '&#xf0dc;',
		'icon-sort_down': '&#xf0dd;',
		'icon-sort_up': '&#xf0de;',
		'icon-envelope_alt': '&#xf0e0;',
		'icon-linkedin1': '&#xf0e1;',
		'icon-undo': '&#xf0e2;',
		'icon-legal': '&#xf0e3;',
		'icon-dashboard': '&#xf0e4;',
		'icon-comment_alt': '&#xf0e5;',
		'icon-comments_alt': '&#xf0e6;',
		'icon-bolt': '&#xf0e7;',
		'icon-sitemap': '&#xf0e8;',
		'icon-umbrella': '&#xf0e9;',
		'icon-paste': '&#xf0ea;',
		'icon-light_bulb': '&#xf0eb;',
		'icon-exchange': '&#xf0ec;',
		'icon-cloud_download': '&#xf0ed;',
		'icon-cloud_upload': '&#xf0ee;',
		'icon-user_md': '&#xf0f0;',
		'icon-stethoscope': '&#xf0f1;',
		'icon-suitcase': '&#xf0f2;',
		'icon-bell_alt': '&#xf0f3;',
		'icon-coffee1': '&#xf0f4;',
		'icon-food1': '&#xf0f5;',
		'icon-file_text_alt': '&#xf0f6;',
		'icon-building': '&#xf0f7;',
		'icon-hospital': '&#xf0f8;',
		'icon-ambulance': '&#xf0f9;',
		'icon-medkit': '&#xf0fa;',
		'icon-fighter_jet': '&#xf0fb;',
		'icon-beer': '&#xf0fc;',
		'icon-h_sign': '&#xf0fd;',
		'icon-f0fe': '&#xf0fe;',
		'icon-double_angle_left': '&#xf12b;',
		'icon-double_angle_right': '&#xf12c;',
		'icon-double_angle_up': '&#xf12d;',
		'icon-double_angle_down': '&#xf12e;',
		'icon-angle_left': '&#xf12f;',
		'icon-angle_right': '&#xf130;',
		'icon-angle_up': '&#xf131;',
		'icon-angle_down': '&#xf132;',
		'icon-desktop': '&#xf133;',
		'icon-laptop': '&#xf134;',
		'icon-tablet': '&#xf135;',
		'icon-mobile_phone': '&#xf136;',
		'icon-circle_blank': '&#xf137;',
		'icon-quote_left': '&#xf138;',
		'icon-quote_right': '&#xf139;',
		'icon-spinner': '&#xf13a;',
		'icon-circle': '&#xf13b;',
		'icon-reply': '&#xf13c;',
		'icon-github_alt': '&#xf13d;',
		'icon-folder_close_alt': '&#xf13e;',
		'icon-folder_open_alt': '&#xf13f;',
		'icon-smile': '&#xf140;',
		'icon-frown': '&#xf141;',
		'icon-meh': '&#xf142;',
		'icon-gamepad': '&#xf143;',
		'icon-keyboard': '&#xf144;',
		'icon-flag_alt': '&#xf145;',
		'icon-flag_checkered': '&#xf146;',
		'icon-terminal': '&#xf147;',
		'icon-code': '&#xf148;',
		'icon-reply_all': '&#xf149;',
		'icon-star_half_empty': '&#xf14a;',
		'icon-location_arrow': '&#xf14b;',
		'icon-crop': '&#xf14c;',
		'icon-code_fork': '&#xf14d;',
		'icon-unlink': '&#xf14e;',
		'icon-question': '&#xf14f;',
		'icon-_279': '&#xf150;',
		'icon-exclamation': '&#xf151;',
		'icon-superscript': '&#xf152;',
		'icon-subscript': '&#xf153;',
		'icon-_283': '&#xf154;',
		'icon-puzzle_piece': '&#xf155;',
		'icon-microphone': '&#xf156;',
		'icon-microphone_off': '&#xf157;',
		'icon-shield': '&#xf158;',
		'icon-calendar_empty': '&#xf159;',
		'icon-fire_extinguisher': '&#xf15a;',
		'icon-rocket': '&#xf15b;',
		'icon-maxcdn': '&#xf15c;',
		'icon-chevron_sign_left': '&#xf15d;',
		'icon-chevron_sign_right': '&#xf15e;',
		'icon-chevron_sign_up': '&#xf15f;',
		'icon-chevron_sign_down': '&#xf160;',
		'icon-html5': '&#xf161;',
		'icon-css3': '&#xf162;',
		'icon-anchor': '&#xf163;',
		'icon-unlock_alt': '&#xf164;',
		'icon-bullseye': '&#xf165;',
		'icon-ellipsis_horizontal': '&#xf166;',
		'icon-ellipsis_vertical': '&#xf167;',
		'icon-_303': '&#xf168;',
		'icon-play_sign': '&#xf169;',
		'icon-ticket': '&#xf16a;',
		'icon-minus_sign_alt': '&#xf16b;',
		'icon-check_minus': '&#xf16c;',
		'icon-level_up': '&#xf16d;',
		'icon-level_down': '&#xf16e;',
		'icon-check_sign': '&#xf16f;',
		'icon-edit_sign': '&#xf170;',
		'icon-_312': '&#xf171;',
		'icon-share_sign': '&#xf172;',
		'icon-compass': '&#xf173;',
		'icon-collapse': '&#xf174;',
		'icon-collapse_top': '&#xf175;',
		'icon-_317': '&#xf176;',
		'icon-eur': '&#xf177;',
		'icon-gbp': '&#xf178;',
		'icon-usd': '&#xf179;',
		'icon-inr': '&#xf17a;',
		'icon-jpy': '&#xf17b;',
		'icon-rub': '&#xf17c;',
		'icon-krw': '&#xf17d;',
		'icon-btc': '&#xf17e;',
		'icon-file': '&#xf17f;',
		'icon-file_text': '&#xf180;',
		'icon-sort_by_alphabet': '&#xf181;',
		'icon-_329': '&#xf182;',
		'icon-sort_by_attributes': '&#xf183;',
		'icon-sort_by_attributes_alt': '&#xf184;',
		'icon-sort_by_order': '&#xf185;',
		'icon-sort_by_order_alt': '&#xf186;',
		'icon-_334': '&#xf187;',
		'icon-_335': '&#xf188;',
		'icon-youtube_sign': '&#xf189;',
		'icon-youtube1': '&#xf18a;',
		'icon-xing': '&#xf18b;',
		'icon-xing_sign': '&#xf18c;',
		'icon-youtube_play': '&#xf18d;',
		'icon-dropbox': '&#xf18e;',
		'icon-stackexchange': '&#xf18f;',
		'icon-instagram1': '&#xf190;',
		'icon-flickr': '&#xf191;',
		'icon-adn': '&#xf192;',
		'icon-f171': '&#xf193;',
		'icon-bitbucket_sign': '&#xf194;',
		'icon-tumblr': '&#xf195;',
		'icon-tumblr_sign': '&#xf196;',
		'icon-long_arrow_down': '&#xf197;',
		'icon-long_arrow_up': '&#xf198;',
		'icon-long_arrow_left': '&#xf199;',
		'icon-long_arrow_right': '&#xf19a;',
		'icon-apple1': '&#xf19b;',
		'icon-windows': '&#xf19c;',
		'icon-android': '&#xf19d;',
		'icon-linux': '&#xf19e;',
		'icon-dribble': '&#xf19f;',
		'icon-skype': '&#xf1a0;',
		'icon-foursquare': '&#xf1a1;',
		'icon-trello': '&#xf1a2;',
		'icon-female': '&#xf1a3;',
		'icon-male': '&#xf1a4;',
		'icon-gittip': '&#xf1a5;',
		'icon-sun': '&#xf1a6;',
		'icon-_366': '&#xf1a7;',
		'icon-archive': '&#xf1a8;',
		'icon-bug': '&#xf1a9;',
		'icon-vk': '&#xf1aa;',
		'icon-weibo': '&#xf1ab;',
		'icon-renren': '&#xf1ac;',
		'icon-_372': '&#xf1ad;',
		'icon-stack_exchange': '&#xf1ae;',
		'icon-_374': '&#xf1af;',
		'icon-arrow_circle_alt_left': '&#xf1b0;',
		'icon-_376': '&#xf1b1;',
		'icon-dot_circle_alt': '&#xf1b2;',
		'icon-_378': '&#xf1b3;',
		'icon-vimeo_square': '&#xf1b4;',
		'icon-_380': '&#xf1b5;',
		'icon-plus_square_o': '&#xf1b6;',
		'icon-_382': '&#xf1b7;',
		'icon-_383': '&#xf1b8;',
		'icon-_384': '&#xf1b9;',
		'icon-_385': '&#xf1ba;',
		'icon-_386': '&#xf1bb;',
		'icon-_387': '&#xf1bc;',
		'icon-_388': '&#xf1bd;',
		'icon-_389': '&#xf1be;',
		'icon-uniF1A0': '&#xf1bf;',
		'icon-f1a1': '&#xf1c0;',
		'icon-_392': '&#xf1c1;',
		'icon-_393': '&#xf1c2;',
		'icon-f1a4': '&#xf1c3;',
		'icon-_395': '&#xf1c4;',
		'icon-_396': '&#xf1c5;',
		'icon-_397': '&#xf1c6;',
		'icon-_398': '&#xf1c7;',
		'icon-_399': '&#xf1c8;',
		'icon-_400': '&#xf1c9;',
		'icon-f1ab': '&#xf1ca;',
		'icon-_402': '&#xf1cb;',
		'icon-_403': '&#xf1cc;',
		'icon-_404': '&#xf1cd;',
		'icon-uniF1B1': '&#xf1ce;',
		'icon-_406': '&#xf1cf;',
		'icon-_407': '&#xf1d0;',
		'icon-_408': '&#xf1d1;',
		'icon-_409': '&#xf1d2;',
		'icon-_410': '&#xf1d3;',
		'icon-_411': '&#xf1d4;',
		'icon-_412': '&#xf1d5;',
		'icon-recycle': '&#xf1d6;',
		'icon-_414': '&#xf1d7;',
		'icon-_415': '&#xf1d8;',
		'icon-_416': '&#xf1d9;',
		'icon-_417': '&#xf1da;',
		'icon-_418': '&#xf1db;',
		'icon-_419': '&#xf1dc;',
		'icon-uniF1C0': '&#xf1dd;',
		'icon-uniF1C1': '&#xf1de;',
		'icon-_422': '&#xf1df;',
		'icon-_423': '&#xf1e0;',
		'icon-_424': '&#xf1e1;',
		'icon-_425': '&#xf1e2;',
		'icon-_426': '&#xf1e3;',
		'icon-_427': '&#xf1e4;',
		'icon-_428': '&#xf1e5;',
		'icon-_429': '&#xf1e6;',
		'icon-_430': '&#xf1e7;',
		'icon-_431': '&#xf1e8;',
		'icon-_432': '&#xf1e9;',
		'icon-_433': '&#xf1ea;',
		'icon-_434': '&#xf1eb;',
		'icon-uniF1D0': '&#xf1ec;',
		'icon-uniF1D1': '&#xf1ed;',
		'icon-uniF1D2': '&#xf1ee;',
		'icon-_438': '&#xf1ef;',
		'icon-_439': '&#xf1f0;',
		'icon-uniF1D5': '&#xf1f1;',
		'icon-uniF1D6': '&#xf1f2;',
		'icon-uniF1D7': '&#xf1f3;',
		'icon-_443': '&#xf1f4;',
		'icon-_444': '&#xf1f5;',
		'icon-_445': '&#xf1f6;',
		'icon-_446': '&#xf1f7;',
		'icon-_447': '&#xf1f8;',
		'icon-_448': '&#xf1f9;',
		'icon-_449': '&#xf1fa;',
		'icon-uniF1E0': '&#xf1fb;',
		'icon-_451': '&#xf1fc;',
		'icon-_452': '&#xf1fd;',
		'icon-_453': '&#xf1fe;',
		'icon-_454': '&#xf1ff;',
		'icon-_455': '&#xf200;',
		'icon-_456': '&#xf201;',
		'icon-_457': '&#xf202;',
		'icon-_458': '&#xf203;',
		'icon-_459': '&#xf204;',
		'icon-_460': '&#xf205;',
		'icon-_461': '&#xf206;',
		'icon-_462': '&#xf207;',
		'icon-_463': '&#xf208;',
		'icon-_464': '&#xf209;',
		'icon-uniF1F0': '&#xf20a;',
		'icon-_466': '&#xf20b;',
		'icon-_467': '&#xf20c;',
		'icon-f1f3': '&#xf20d;',
		'icon-_469': '&#xf20e;',
		'icon-_470': '&#xf20f;',
		'icon-_471': '&#xf210;',
		'icon-_472': '&#xf211;',
		'icon-_473': '&#xf212;',
		'icon-_474': '&#xf213;',
		'icon-_475': '&#xf214;',
		'icon-_476': '&#xf215;',
		'icon-f1fc': '&#xf216;',
		'icon-_478': '&#xf217;',
		'icon-_479': '&#xf218;',
		'icon-_480': '&#xf219;',
		'icon-_481': '&#xf21a;',
		'icon-_482': '&#xf21b;',
		'icon-_483': '&#xf21c;',
		'icon-_484': '&#xf21d;',
		'icon-_485': '&#xf21e;',
		'icon-_486': '&#xf21f;',
		'icon-_487': '&#xf220;',
		'icon-_488': '&#xf221;',
		'icon-_489': '&#xf222;',
		'icon-_490': '&#xf223;',
		'icon-_491': '&#xf224;',
		'icon-_492': '&#xf225;',
		'icon-_493': '&#xf226;',
		'icon-_494': '&#xf227;',
		'icon-f210': '&#xf228;',
		'icon-_496': '&#xf229;',
		'icon-f212': '&#xf22a;',
		'icon-_498': '&#xf22b;',
		'icon-_499': '&#xf22c;',
		'icon-_500': '&#xf22d;',
		'icon-_501': '&#xf22e;',
		'icon-_502': '&#xf22f;',
		'icon-_503': '&#xf230;',
		'icon-_504': '&#xf231;',
		'icon-_505': '&#xf232;',
		'icon-_506': '&#xf233;',
		'icon-_507': '&#xf234;',
		'icon-_508': '&#xf235;',
		'icon-_509': '&#xf236;',
		'icon-venus': '&#xf237;',
		'icon-_511': '&#xf238;',
		'icon-_512': '&#xf239;',
		'icon-_513': '&#xf23a;',
		'icon-_514': '&#xf23b;',
		'icon-_515': '&#xf23c;',
		'icon-_516': '&#xf23d;',
		'icon-_517': '&#xf23e;',
		'icon-_518': '&#xf23f;',
		'icon-_519': '&#xf240;',
		'icon-_520': '&#xf241;',
		'icon-_521': '&#xf242;',
		'icon-_522': '&#xf243;',
		'icon-_525': '&#xf244;',
		'icon-_526': '&#xf245;',
		'icon-_527': '&#xf246;',
		'icon-_528': '&#xf247;',
		'icon-_529': '&#xf248;',
		'icon-_530': '&#xf249;',
		'icon-_531': '&#xf24a;',
		'icon-_532': '&#xf24b;',
		'icon-_533': '&#xf24c;',
		'icon-_534': '&#xf24d;',
		'icon-_535': '&#xf24e;',
		'icon-_536': '&#xf24f;',
		'icon-_537': '&#xf250;',
		'icon-_538': '&#xf251;',
		'icon-_539': '&#xf252;',
		'icon-_540': '&#xf253;',
		'icon-_541': '&#xf254;',
		'icon-_542': '&#xf255;',
		'icon-_543': '&#xf256;',
		'icon-_544': '&#xf257;',
		'icon-_545': '&#xf258;',
		'icon-_546': '&#xf259;',
		'icon-_547': '&#xf25a;',
		'icon-_548': '&#xf25b;',
		'icon-_549': '&#xf25c;',
		'icon-_550': '&#xf25d;',
		'icon-_551': '&#xf25e;',
		'icon-_552': '&#xf25f;',
		'icon-_553': '&#xf260;',
		'icon-_554': '&#xf261;',
		'icon-_555': '&#xf262;',
		'icon-_556': '&#xf263;',
		'icon-_557': '&#xf264;',
		'icon-_558': '&#xf265;',
		'icon-_559': '&#xf266;',
		'icon-_560': '&#xf267;',
		'icon-_561': '&#xf268;',
		'icon-_562': '&#xf269;',
		'icon-_563': '&#xf26a;',
		'icon-_564': '&#xf26b;',
		'icon-_565': '&#xf26c;',
		'icon-_566': '&#xf26d;',
		'icon-_567': '&#xf26e;',
		'icon-_568': '&#xf26f;',
		'icon-_569': '&#xf270;',
		'icon-f260': '&#xf271;',
		'icon-f261': '&#xf272;',
		'icon-_572': '&#xf273;',
		'icon-f263': '&#xf274;',
		'icon-_574': '&#xf275;',
		'icon-_575': '&#xf276;',
		'icon-_576': '&#xf277;',
		'icon-_577': '&#xf278;',
		'icon-_578': '&#xf279;',
		'icon-_579': '&#xf27a;',
		'icon-_580': '&#xf27b;',
		'icon-_581': '&#xf27c;',
		'icon-_582': '&#xf27d;',
		'icon-_583': '&#xf27e;',
		'icon-_584': '&#xf27f;',
		'icon-_585': '&#xf280;',
		'icon-_586': '&#xf281;',
		'icon-_587': '&#xf282;',
		'icon-_588': '&#xf283;',
		'icon-_589': '&#xf284;',
		'icon-_590': '&#xf285;',
		'icon-_591': '&#xf286;',
		'icon-_592': '&#xf287;',
		'icon-_593': '&#xf288;',
		'icon-_594': '&#xf289;',
		'icon-_595': '&#xf28a;',
		'icon-_596': '&#xf28b;',
		'icon-_597': '&#xf28c;',
		'icon-_598': '&#xf28d;',
		'icon-f27e': '&#xf28e;',
		'icon-uniF280': '&#xf28f;',
		'icon-uniF281': '&#xf290;',
		'icon-_602': '&#xf291;',
		'icon-_603': '&#xf292;',
		'icon-_604': '&#xf293;',
		'icon-uniF285': '&#xf294;',
		'icon-uniF286': '&#xf295;',
		'icon-_607': '&#xf296;',
		'icon-_608': '&#xf297;',
		'icon-_609': '&#xf298;',
		'icon-_610': '&#xf299;',
		'icon-_611': '&#xf29a;',
		'icon-_612': '&#xf29b;',
		'icon-_613': '&#xf29c;',
		'icon-_614': '&#xf29d;',
		'icon-_615': '&#xf29e;',
		'icon-_616': '&#xf29f;',
		'icon-_617': '&#xf2a0;',
		'icon-_618': '&#xf2a1;',
		'icon-_619': '&#xf2a2;',
		'icon-_620': '&#xf2a3;',
		'icon-_621': '&#xf2a4;',
		'icon-_622': '&#xf2a5;',
		'icon-_623': '&#xf2a6;',
		'icon-_624': '&#xf2a7;',
		'icon-_625': '&#xf2a8;',
		'icon-_626': '&#xf2a9;',
		'icon-_627': '&#xf2aa;',
		'icon-_628': '&#xf2ab;',
		'icon-_629': '&#xf2ac;',
		'icon-uniF2A0': '&#xf2ad;',
		'icon-uniF2A1': '&#xf2ae;',
		'icon-uniF2A2': '&#xf2af;',
		'icon-uniF2A3': '&#xf2b0;',
		'icon-uniF2A4': '&#xf2b1;',
		'icon-uniF2A5': '&#xf2b2;',
		'icon-uniF2A6': '&#xf2b3;',
		'icon-uniF2A7': '&#xf2b4;',
		'icon-uniF2A8': '&#xf2b5;',
		'icon-uniF2A9': '&#xf2b6;',
		'icon-uniF2AA': '&#xf2b7;',
		'icon-uniF2AB': '&#xf2b8;',
		'icon-uniF2AC': '&#xf2b9;',
		'icon-uniF2AD': '&#xf2ba;',
		'icon-uniF2AE': '&#xf2bb;',
		'icon-uniF2B0': '&#xf2bc;',
		'icon-uniF2B1': '&#xf2bd;',
		'icon-uniF2B2': '&#xf2be;',
		'icon-uniF2B3': '&#xf2bf;',
		'icon-uniF2B4': '&#xf2c0;',
		'icon-uniF2B5': '&#xf2c1;',
		'icon-uniF2B6': '&#xf2c2;',
		'icon-uniF2B7': '&#xf2c3;',
		'icon-uniF2B8': '&#xf2c4;',
		'icon-uniF2B9': '&#xf2c5;',
		'icon-uniF2BA': '&#xf2c6;',
		'icon-uniF2BB': '&#xf2c7;',
		'icon-uniF2BC': '&#xf2c8;',
		'icon-uniF2BD': '&#xf2c9;',
		'icon-uniF2BE': '&#xf2ca;',
		'icon-uniF2C0': '&#xf2cb;',
		'icon-uniF2C1': '&#xf2cc;',
		'icon-uniF2C2': '&#xf2cd;',
		'icon-uniF2C3': '&#xf2ce;',
		'icon-uniF2C4': '&#xf2cf;',
		'icon-uniF2C5': '&#xf2d0;',
		'icon-uniF2C6': '&#xf2d1;',
		'icon-uniF2C7': '&#xf2d2;',
		'icon-uniF2C8': '&#xf2d3;',
		'icon-uniF2C9': '&#xf2d4;',
		'icon-uniF2CA': '&#xf2d5;',
		'icon-uniF2CB': '&#xf2d6;',
		'icon-uniF2CC': '&#xf2d7;',
		'icon-uniF2CD': '&#xf2d8;',
		'icon-uniF2CE': '&#xf2d9;',
		'icon-uniF2D0': '&#xf2da;',
		'icon-uniF2D1': '&#xf2db;',
		'icon-uniF2D2': '&#xf2dc;',
		'icon-uniF2D3': '&#xf2dd;',
		'icon-uniF2D4': '&#xf2de;',
		'icon-uniF2D5': '&#xf2df;',
		'icon-uniF2D6': '&#xf2e0;',
		'icon-uniF2D7': '&#xf2e1;',
		'icon-uniF2D8': '&#xf2e2;',
		'icon-uniF2D9': '&#xf2e3;',
		'icon-uniF2DA': '&#xf2e4;',
		'icon-uniF2DB': '&#xf2e5;',
		'icon-uniF2DC': '&#xf2e6;',
		'icon-uniF2DD': '&#xf2e7;',
		'icon-uniF2DE': '&#xf2e8;',
		'icon-uniF2E0': '&#xf2e9;',
		'icon-notdef': '&#xe9ea;',
		'icon-notdef1': '&#xe9eb;',
		'icon-notdef2': '&#xe9ec;',
		'icon-001-wheat-grains': '&#xf100;',
		'icon-002-wheat': '&#xf101;',
		'icon-003-branch-with-leaves': '&#xf102;',
		'icon-004-wheat-grain-close-up': '&#xf103;',
		'icon-005-ear-of-wheat': '&#xf104;',
		'icon-006-wheat-grains-on-a-bowl': '&#xf105;',
		'icon-007-wheat-1': '&#xf106;',
		'icon-008-spices': '&#xf107;',
		'icon-009-spa-bowl-to-mix-treatments-ingredients': '&#xf108;',
		'icon-010-add': '&#xf109;',
		'icon-011-ingredients': '&#xf10a;',
		'icon-012-egg': '&#xf10b;',
		'icon-013-chicken': '&#xf10c;',
		'icon-014-sweet': '&#xf10d;',
		'icon-015-milk': '&#xf10e;',
		'icon-016-milk-1': '&#xf10f;',
		'icon-017-peanut': '&#xf110;',
		'icon-018-peanut-1': '&#xf111;',
		'icon-019-almond': '&#xf112;',
		'icon-020-almond-1': '&#xf113;',
		'icon-021-chocolate-tablet-with-bite': '&#xf114;',
		'icon-022-chocolate': '&#xf115;',
		'icon-023-chocolate-1': '&#xf116;',
		'icon-024-wine-bottle': '&#xf117;',
		'icon-025-glass-and-bottle-of-wine': '&#xf118;',
		'icon-026-alcohol': '&#xf119;',
		'icon-027-wine': '&#xf11a;',
		'icon-028-wine-1': '&#xf11b;',
		'icon-029-wine-2': '&#xf11c;',
		'icon-030-wine-3': '&#xf11d;',
		'icon-031-wine-4': '&#xf11e;',
		'icon-032-file': '&#xf11f;',
		'icon-033-danger': '&#xf120;',
		'icon-034-block': '&#xf121;',
		'icon-035-cancel': '&#xf122;',
		'icon-036-warning-sign': '&#xf123;',
		'icon-037-restaurant': '&#xf124;',
		'icon-038-food': '&#xf125;',
		'icon-039-wheat-2': '&#xf126;',
		'icon-040-grape': '&#xf127;',
		'icon-041-salad': '&#xf128;',
		'icon-042-grapes': '&#xf129;',
		'icon-043-grapes-1': '&#xf12a;',
		'icon-044-hazelnut': '&#xe9ed;',
		'icon-045-pistachio': '&#xe9ee;',
		'icon-shrimp': '&#xe909;',
		'icon-chef-2': '&#xe90a;',
		'icon-sushi': '&#xe90b;',
		'icon-chopsticks': '&#xe90c;',
		'icon-whisk': '&#xe90d;',
		'icon-knife': '&#xe90e;',
		'icon-mitten': '&#xe90f;',
		'icon-refrigerator': '&#xe910;',
		'icon-spatula': '&#xe911;',
		'icon-toast': '&#xe912;',
		'icon-cupcake-8': '&#xe913;',
		'icon-pretzel-1': '&#xe914;',
		'icon-coffee-5': '&#xe915;',
		'icon-croissant-4': '&#xe916;',
		'icon-food-31': '&#xe917;',
		'icon-food-30': '&#xe918;',
		'icon-food-29': '&#xe919;',
		'icon-pastry-2': '&#xe91a;',
		'icon-pastry-1': '&#xe91b;',
		'icon-food-28': '&#xe91c;',
		'icon-rolling-pin': '&#xe91d;',
		'icon-coffee-cup-4': '&#xe91e;',
		'icon-kitchen-utensils': '&#xe91f;',
		'icon-pastry': '&#xe920;',
		'icon-pretzel': '&#xe921;',
		'icon-cake-3': '&#xe922;',
		'icon-food-27': '&#xe923;',
		'icon-cutting-board': '&#xe924;',
		'icon-grill': '&#xe925;',
		'icon-waiter': '&#xe926;',
		'icon-rice': '&#xe927;',
		'icon-pin': '&#xe928;',
		'icon-open-3': '&#xe929;',
		'icon-noodles': '&#xe92a;',
		'icon-dish-1': '&#xe92b;',
		'icon-closed-1': '&#xe92c;',
		'icon-restaurant-4': '&#xe92d;',
		'icon-dinner-2': '&#xe92e;',
		'icon-pizza-5': '&#xe92f;',
		'icon-open-2': '&#xe930;',
		'icon-coffee-4': '&#xe931;',
		'icon-piece-of-cake-1': '&#xe932;',
		'icon-restaurant-3': '&#xe933;',
		'icon-coffee-3': '&#xe934;',
		'icon-dinner-1': '&#xe935;',
		'icon-booked': '&#xe936;',
		'icon-restaurant-2': '&#xe937;',
		'icon-pizza-slice': '&#xe938;',
		'icon-pizza-4': '&#xe939;',
		'icon-open-1': '&#xe93a;',
		'icon-menu-1': '&#xe93b;',
		'icon-coffee-2': '&#xe93c;',
		'icon-restaurant-1': '&#xe93d;',
		'icon-dinner': '&#xe93e;',
		'icon-piece-of-cake': '&#xe93f;',
		'icon-birthday-cake-3': '&#xe940;',
		'icon-food-26': '&#xe941;',
		'icon-cutlery-2': '&#xe942;',
		'icon-beverage-1': '&#xe943;',
		'icon-beverage': '&#xe944;',
		'icon-cheese-burger': '&#xe945;',
		'icon-food-25': '&#xe946;',
		'icon-cake-2': '&#xe947;',
		'icon-sandwich-1': '&#xe948;',
		'icon-cupcake-7': '&#xe949;',
		'icon-cupcake-6': '&#xe94a;',
		'icon-croissant-3': '&#xe94b;',
		'icon-taco-1': '&#xe94c;',
		'icon-cookies-1': '&#xe94d;',
		'icon-food-24': '&#xe94e;',
		'icon-biscuit': '&#xe94f;',
		'icon-food-23': '&#xe950;',
		'icon-food-22': '&#xe951;',
		'icon-food-21': '&#xe952;',
		'icon-food-20': '&#xe953;',
		'icon-food-19': '&#xe954;',
		'icon-bread-3': '&#xe955;',
		'icon-birthday-cake-2': '&#xe956;',
		'icon-food-18': '&#xe957;',
		'icon-food-17': '&#xe958;',
		'icon-food-16': '&#xe959;',
		'icon-scooter': '&#xe95a;',
		'icon-cupcake-5': '&#xe95b;',
		'icon-hamburger-5': '&#xe95c;',
		'icon-fast-food': '&#xe95d;',
		'icon-cutlery-1': '&#xe95e;',
		'icon-dish': '&#xe95f;',
		'icon-food-15': '&#xe960;',
		'icon-food-14': '&#xe961;',
		'icon-tea': '&#xe962;',
		'icon-coffee-1': '&#xe963;',
		'icon-groceries': '&#xe964;',
		'icon-apple': '&#xe965;',
		'icon-tomato': '&#xe966;',
		'icon-cherries': '&#xe967;',
		'icon-broccoli': '&#xe968;',
		'icon-chef-1': '&#xe969;',
		'icon-cheese': '&#xe96a;',
		'icon-food-13': '&#xe96b;',
		'icon-food-12': '&#xe96c;',
		'icon-food-11': '&#xe96d;',
		'icon-pineapple': '&#xe96e;',
		'icon-bread-2': '&#xe96f;',
		'icon-food-10': '&#xe970;',
		'icon-sandwich': '&#xe971;',
		'icon-cupcake-4': '&#xe972;',
		'icon-grapes': '&#xe973;',
		'icon-food-9': '&#xe974;',
		'icon-chocolate': '&#xe975;',
		'icon-cutlery': '&#xe976;',
		'icon-soda-1': '&#xe977;',
		'icon-pizza-3': '&#xe978;',
		'icon-cocktail-glass-with-an-umbrella': '&#xe979;',
		'icon-birthday-cake-1': '&#xe97a;',
		'icon-bread-basket-1': '&#xe97b;',
		'icon-bread-oven': '&#xe97c;',
		'icon-cream-cupcake': '&#xe97d;',
		'icon-loaf-of-bread': '&#xe97e;',
		'icon-one-muffin': '&#xe97f;',
		'icon-two-macarons': '&#xe980;',
		'icon-cake-slice-1': '&#xe981;',
		'icon-two-bread-toasts': '&#xe982;',
		'icon-bread-basket': '&#xe983;',
		'icon-cake-slice': '&#xe984;',
		'icon-bread-toasts': '&#xe985;',
		'icon-muffin-1': '&#xe986;',
		'icon-food-8': '&#xe987;',
		'icon-cupcake-2': '&#xe988;',
		'icon-hamburger-4': '&#xe989;',
		'icon-stone-oven': '&#xe98a;',
		'icon-hamburger-3': '&#xe98b;',
		'icon-food-7': '&#xe98c;',
		'icon-pastry-biscuit': '&#xe98d;',
		'icon-double-popsicle': '&#xe98e;',
		'icon-cupcake-with-cherry': '&#xe98f;',
		'icon-birthday-cake-with-candle': '&#xe990;',
		'icon-milkshake-with-straw': '&#xe991;',
		'icon-ginger-bicuit': '&#xe992;',
		'icon-marie-biscuit-with-bite': '&#xe993;',
		'icon-cookie-with-fine-chips': '&#xe994;',
		'icon-sundae-with-cherry-on-top': '&#xe995;',
		'icon-sweet': '&#xe996;',
		'icon-ice-cream-cone-melting': '&#xe997;',
		'icon-hot-chocolate-cup': '&#xe998;',
		'icon-food-6': '&#xe999;',
		'icon-cake-slice-with-cherry': '&#xe99a;',
		'icon-food-5': '&#xe99b;',
		'icon-food-4': '&#xe99c;',
		'icon-wedding-cake': '&#xe99d;',
		'icon-food-3': '&#xe99e;',
		'icon-food-2': '&#xe99f;',
		'icon-delivery-truck': '&#xe9a0;',
		'icon-signs': '&#xe9a1;',
		'icon-clock': '&#xe9a2;',
		'icon-popcorn': '&#xe9a3;',
		'icon-doughnut': '&#xe9a4;',
		'icon-muffin': '&#xe9a5;',
		'icon-croissant-2': '&#xe9a6;',
		'icon-pizza-2': '&#xe9a7;',
		'icon-hot-dog': '&#xe9a8;',
		'icon-hamburger-2': '&#xe9a9;',
		'icon-french-fries-1': '&#xe9aa;',
		'icon-taco': '&#xe9ab;',
		'icon-security-man': '&#xe9ac;',
		'icon-soda': '&#xe9ad;',
		'icon-roast-chicken': '&#xe9ae;',
		'icon-restaurant': '&#xe9af;',
		'icon-menu': '&#xe9b0;',
		'icon-chef': '&#xe9b1;',
		'icon-pizza-1': '&#xe9b2;',
		'icon-food-1': '&#xe9b3;',
		'icon-hamburger-1': '&#xe9b4;',
		'icon-birthday-cake': '&#xe9b5;',
		'icon-ice-cream': '&#xe9b6;',
		'icon-food': '&#xe9b7;',
		'icon-hamburger': '&#xe9b8;',
		'icon-french-fries': '&#xe9b9;',
		'icon-fish-1': '&#xe9ba;',
		'icon-fish-bones': '&#xe9bb;',
		'icon-cupcake-1': '&#xe9bc;',
		'icon-croissant-1': '&#xe9bd;',
		'icon-candy-cane': '&#xe9be;',
		'icon-bread-1': '&#xe9bf;',
		'icon-bread': '&#xe9c0;',
		'icon-tea-cup': '&#xe9c1;',
		'icon-coffee-machine': '&#xe9c2;',
		'icon-coffee-cup-3': '&#xe9c3;',
		'icon-cookie': '&#xe9c4;',
		'icon-coffee-cup-2': '&#xe9c5;',
		'icon-croissant': '&#xe9c6;',
		'icon-reserved': '&#xe9c7;',
		'icon-closed': '&#xe9c8;',
		'icon-open': '&#xe9c9;',
		'icon-wine': '&#xe9ca;',
		'icon-cookies': '&#xe9cb;',
		'icon-cake-1': '&#xe9cc;',
		'icon-coffee-cup-1': '&#xe9cd;',
		'icon-coffee-cup': '&#xe9ce;',
		'icon-frappe': '&#xe9cf;',
		'icon-coffee': '&#xe9d0;',
		'icon-cezve': '&#xe9d1;',
		'icon-fish': '&#xe9d2;',
		'icon-chicken': '&#xe9d3;',
		'icon-pizza': '&#xe9d4;',
		'icon-cupcake': '&#xe9d5;',
		'icon-cake': '&#xe9d6;',
		'icon-chef-suit': '&#xe9d7;',
		'icon-crossed-knife-and-fork': '&#xe9d8;',
		'icon-round-bread': '&#xe9d9;',
		'icon-bell-covering-hot-dish': '&#xe9da;',
		'icon-oven-mitt': '&#xe9db;',
		'icon-drink-4': '&#xe9dc;',
		'icon-drink-3': '&#xe9dd;',
		'icon-drink-2': '&#xe9de;',
		'icon-cocktail': '&#xe9df;',
		'icon-wine-glass-full-of-drink': '&#xe9e0;',
		'icon-coffee-seeds': '&#xe9e1;',
		'icon-coffee-cup-outline': '&#xe9e2;',
		'icon-drink-big-tall-glass-with-soda': '&#xe9e3;',
		'icon-hot-coffee-rounded-cup-on-a-plate-from-side-view': '&#xe9e4;',
		'icon-soda-or-coffee-covered-glass': '&#xe9e5;',
		'icon-hot-coffee-cup-on-a-plate': '&#xe9e6;',
		'icon-drink-1': '&#xe9e7;',
		'icon-drink': '&#xe9e8;',
		'icon-cupcake-3': '&#xe9e9;',
		'icon-facebook': '&#xe900;',
		'icon-gplus': '&#xe901;',
		'icon-instagram': '&#xe902;',
		'icon-linkedin': '&#xe903;',
		'icon-pinterest': '&#xe904;',
		'icon-rss': '&#xe905;',
		'icon-twitter': '&#xe906;',
		'icon-vimeo': '&#xe907;',
		'icon-youtube': '&#xe908;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
