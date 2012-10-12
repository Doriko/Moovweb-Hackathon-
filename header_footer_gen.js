// This file contains all scripts necessaxry for the template to run
x$(document).on("DOMContentLoaded", function() {
	var left_button = x$("#mw_header_left_button");
	var mask = x$("#mw_mask");
	var menu = x$("#mw_menu");
	var left_button = x$("#mw_header_left_button");
  left_button.on("click", function() {
  	console.log("I'm gonna win this hackathon");
  	mask.toggleClass("mw_mask_show");
  	menu.toggleClass("mw_menu_show");
  	left_button.toggleClass("mw_header_left_button_show");
  });
});