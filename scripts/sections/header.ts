$('./body') {
	# Header
	$(".//div[contains(@class,'field-content')]/a") {
		add_class("mw_header_right_button_link")	
	}
	# Menu
	$(".//header[@id='header']//ul[@id='superfish-1']") {
		$("./li[./ul]") {
			add_class("mw_menu_acc")
		}
		$("./li[not(./ul)]/a") {
			add_class("mw_menu_link")
		}
	}
	$("./div[@id='skip']/a") {
		add_class("mw_menu_link")	
	}
}