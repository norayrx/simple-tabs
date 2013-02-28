# jQuery SimpleTabs Plugin #


When you need tabs and don't want to fight the complexities of an overbuilt plugin.  

This plugin is designed to be as simple as possible. Just follow this simple markup structure and it'll just work. 

Comes in under 1k minified.

```html
	<div class="simple-tabs">
		<ul class="tab-items">
			<li><a href="#tab1">tab1</a></li>
			<li><a href="#tab2">tab2</a></li>
			<li><a href="#tab3">tab3</a></li>
		</ul>

		<div class="tab-content">
			<div class="tab-pane" id="tab1">
				Tab 1 Contents -- Lorem ipsum dolor sit amet, consectetur adipisicing.
			</div>

			<div class="tab-pane" id="tab2">
  			Tab 2 Contents -- Lorem ipsum dolor sit amet, consectetur adipisicing.
			</div>

			<div class="tab-pane" id="tab3">
  			Tab 3 Contents -- Lorem ipsum dolor sit amet, consectetur adipisicing.
			</div>
		</div>
	</div>
```


Options include:

```javascript
  var defaults = {
		tabItemsSelector: ".tab-items > li",  // tab items
		tabPanesSelector: ".tab-pane",        // tab panes
		cssClassOn: "active"                  // css class denoting active state of current tab
	};
```

Invocation:

```javascript
$('.simple-tabs').simpleTabs();
```

__Win__
