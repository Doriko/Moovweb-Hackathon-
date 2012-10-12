$("./body") {
  # Footer
	$(".//footer[@id='footer']") {
		# Top Line
		$(".//div[contains(@class,'content')]/p") {
			add_class("mw_footer_top_line")
		}
		# Links
		$(".//div[@id='block-menu-menu-footer-nav']//ul[contains(@class,'menu')]/li[position()<4]/a") {
			add_class("mw_footer_link")
		}
	}
	# Bottom Line
	$(".//div[contains(@class,'field-content')]//p/span[contains(text(),'Delivery Network')]") {
		add_class("mw_footer_bottom_line")
	}
}