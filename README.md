Slider-v1, a jQuery slider plugin
===

*Slider-v1 is a light-weight images/content slider plugin. slider-v1 is the first basic step for a 
upcoming cool features and updateds.*

---

Demo
---
* http://codepen.io/ElmahdiMahmoud/full/dKxib ,
* http://codepen.io/ElmahdiMahmoud/details/dKxib

Browser compatibility
---
* Chrome
* Safari
* Firefox
* Opera
* IE8+

HTML Structure
---
```html
<!-- slider-1 -->
<div id="slider-1">
<!-- slider list items -->
 <ul>
  <li>
   <img src="images/example.jpg" alt="alt" />
   <!-- caption -->
   <div class="caption">
   <h2>...</h2>
   <p>
     ... 
   </p>
   </div>
   <!--/ caption -->
   </li>
 </ul>
 <!--/ slider list items -->

 <!-- slider control buttons -->
  <button class="prev"><img src="imgs/prev.png" alt="prev"></button>
  <button class="next"><img src="imgs/next.png" alt="next"/></button>
 <!--/ slider control buttons -->
</div>
<!--/ slider-1 -->
```

Slider container CSS
---
```css
[id*="slider-"] {
    width: 800px;
    overflow: hidden;
    margin: 10px auto 30px auto;
    position: relative
}
```

Slider list items CSS
---
```css
[id*="slider-"] ul {
    list-style: none;
    height: 400px;
    margin: 0; /* do not change */
}
[id*="slider-"] li {
    float: left;
    width: 800px;
    height: 400px;
    position: relative;
}
```

Slider caption CSS
---
```css
[id*="slider-"] ul {
    list-style: none;
    height: 400px;
    margin: 0; /* do not change */
}
.caption {
    background-color: #fdf6e3;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
    position: absolute;
    bottom: -30px; 
    left: 0;
    opacity: .4;
    width: 100%;
    padding: 10px;
	 -webkit-transition: all 600ms ease-in-out;
		-moz-transition: all 600ms ease-in-out;
		  -o-transition: all 600ms ease-in-out;
			 transition: all 600ms ease-in-out;
}
[id*="slider-"]:hover .caption { bottom: 0; opacity: .7; }
```

Slider control buttons CSS
---
```css
[id*="slider-"] button {
    padding: 0;
    border: 0;
    background-color: transparent;
	cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: normal;
	position: absolute;
	height: 100%;
	top: 0;
} 
[id*="slider-"] button img {
	opacity: .5;
	position: relative;
    -webkit-transition: all 600ms ease-in-out;
        -moz-transition: all 600ms ease-in-out;
          -o-transition: all 600ms ease-in-out;
            transition: all 600ms ease-in-out;
}
[id*="slider-"] button.prev img { left: -50px; }
[id*="slider-"] button.next img { right:-50px; }
[id*="slider-"] button.prev,
[id*="slider-"]:hover button.prev img { left: 0; }
[id*="slider-"] button.next,
[id*="slider-"]:hover button.next img { right:0; }
```

Options
---
* `speed (default: 800)` The time interval in milliseconds within which the
  slide animation will complete


Methods
---
```javascript
   //fire with default usage
   $("#slider-1").slider();
   
   //fire with default Speed option
   $("#slider-1").slider({
        'speed': 1000
   });
```

Arthur
---
** Emahdi Mahmoud **
* https://twitter.com/ElmahdiMahmoud
