/*

 TO DO's
*********

mw_header {
	mw_header_left_button:
		name the img you want to appear as a left button headerleftbutton.png
	mw_header_logo:
		name the img you want to appear as a header logo headerlogo.png
	mw_header_right_button:
		add the attribute 'mw_header_right_button_link' to the anchor tag of the right button
		name the img you want to appear as a right button headerrightbutton.png
}

mw_menu {
	mw_menu_link:
		add the attribute 'mw_menu_link' to the anchor tag that you would like to insert to the menu
	mw_menu_acc:
		add the attribute 'mw_menu_acc' to the element that you would like to insert to the menu as an accordion (top element will be the button, second will be the content)
	arrow:
		name the img you want to appear as a arrow mwmenulinkarrow
	plus:
		name the img you want to appear as a arrow mwmenuplus
	minus:
		name the img you want to appear as a arrow mwmenuminus
}

mw_footer {
	mw_footer_top_line:
		add the attribute 'mw_footer_top_line' to the anchor tag that you would like to insert as the top footer line
	mw_footer_bottom_line:
		add the attribute 'mw_footer_bottom_line' to the anchor tag that you would like to insert as the top footer line
	mw_footer_link:
		add the attribute 'mw_footer_link' to the anchor tag that you would like to insert as a footer link
	mw_footer_logo:
		name the img you want to appear as a header logo footerlogo.png
}

 PROFIT
********
1. Saves time for mobile dev. team
2. Saves time for demo team
3. More maintainable code (easy to improve over time)
4. Unified and 
5.

 WHAT MORE CAN BE DONE
***********************
1. Using variable for easier css changes
2. Using SASS function for lazier design (give it two colors and it'll take care of the rest)
3. Creating more templates (cooler ones, any thoughts David?, facebook, linked-in)
4. Creating more modular templates (sliding/dropping/3 buttons/etc.)
5. Documetation, helping others create and use templates (hint... not very hard)

*/

$desktop_domain = ".mashery.com" // insert the domain of your project

$("./body") {
	
	# Menu
	insert_top("div", id: "mw_menu")

	# Header
	insert_top("div", id: "mw_header") {
		insert_top("div", id: "mw_header_logo")
		insert_top("div", id: "mw_header_left_button") {
			insert("div", id: "mw_header_left_button_img")
		}
		insert_bottom("a", id: "mw_header_right_button") {
			insert_bottom("div") {
				insert("div", id: "mw_header_right_button_img")
			}
		}
	}

	# Mask
	insert_bottom("div", id: "mw_mask")

	# Footer
	insert_bottom("div", id: "mw_footer") {
		# Footer links
		insert_top("div", id: "mw_footer_bottom_line_box")
		insert_top("div", id: "mw_footer_links") {
			insert("ul")
		}
		insert_top("div", id: "mw_footer_top_line_box")
		# View full site link
		insert_bottom("p", id: "mw_to_desktop", "This is the Mobile Site: ") {
			insert_bottom("a", id: "mw_desktop_link", "View Full Site")
		}
		# Desktop link config
		insert_bottom("div") {
	    attribute("id", "mw_desktop_link_config")
	    attribute("matcher", $rewrite_incoming_matcher)
	    attribute("replacement", $rewrite_incoming_replacement)
	    attribute("cookie_hours", "0")
	    attribute("cookie_domain", $desktop_domain)
	    attribute("rewriter_json", $rewrite_incoming_json)
	  }
	  # Footer logo
		insert_bottom("div", id: "mw_footer_logo")
		# Powered by moovweb link
		insert_bottom("a", id: "mw_moovweb", href: "moovweb.com", "Mobile Site Powered by Moovweb") 
	}

	# Inserting header content
	$(".//*[contains(@class,'mw_header_right_button_link')]") {
		%right_button_link = fetch("./@href")
		$("//a[@id='mw_header_right_button']") {
			attribute("href",%right_button_link)
		}
	}

	# Inserting all menu content by order
	$(".//*[contains(@class,'mw_menu_link') or contains(@class,'mw_menu_acc')]") {
		move_to("./ancestor::body//div[@id='mw_menu']","bottom")
	}
	# Menu links
	$(".//div[@id='mw_menu']/*[contains(@class,'mw_menu_link')]") {
		wrap("div", class:"mw_menu_link_bar") {
			insert_bottom("div", class: "mw_menu_link_arrow")
		}
	}
	# Menu accordions
	$(".//div[@id='mw_menu']/*[contains(@class,'mw_menu_acc')]") {
		name("div")
		attributes(data-ur-set: "toggler")
		$("./*[1]") {
			add_class("mw_menu_acc_button")
			insert_bottom("div", class: "mw_plus_minus")
			attributes(data-ur-toggler-component: "button")
			# removing href to prevent linking
			remove("./@href")
		}
		$("./*[last()]") {
			add_class("mw_menu_acc_content")
			attributes(data-ur-toggler-component: "content")
			$(".//a") {
				# you can add an arrow if you want
				# insert_bottom("div", class: "mw_menu_link_arrow")
			}
		}
	}

	# Inserting all footer content
	# Top line
	$(".//*[contains(@class,'mw_footer_top_line')]") {
		move_to("./ancestor::body//div[@id='mw_footer']/div[@id='mw_footer_top_line_box']")
	}
	# Bottom Line
	$(".//*[contains(@class,'mw_footer_bottom_line')]") {
		move_to("./ancestor::body//div[@id='mw_footer']/div[@id='mw_footer_bottom_line_box']")
	}
	$(".//*[contains(@class,'mw_footer_link')]") {
		wrap("li") {
			move_to("./ancestor::body//div[@id='mw_footer']/div[@id='mw_footer_links']/ul","bottom")
		}
	}
}