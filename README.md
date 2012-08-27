<h1>MagicNav.js</h1>
<h2>The jQuery Plugin for generating nav links from page elements</h1>
------
<h3>Basic Usage</h3>
<p>Easily generate links from elements on your page. For example, generate links to all the articles on a page by linking to the article&rsquo;s h1&rsquo;s, and put them in a nav element on the page with an id of article-nav. (By default, the links will use the same text as the h1).</p>
```javascript
var magicNav = $.MagicNav($('#article-nav'),$('article h1'));
```
<p>The first argument to $.MagicNav is a selector for the element to which the links will be appended. The second is a selector for the elements from which the plugin should build the links. The third is a settings object (optional).</p>
<h3>Custom Settings</h3>
<p>There are a few options available when initializing the plugin:</p>
<ul>
    <li><strong>titles</strong> - By default, MagicNav grabs the text for the links from the target elements, but you may alternatively use an attribute instead (e.g. 'data-title')</li>
    <li><strong>ease</strong> - An ease function for the scrollTo animation (default is easeInOutQuad)
    </li>
    <li><strong>duration</strong> - The duration of the scrollTo animation (in milliseconds)</li>
    <li><strong>offset</strong> - The amount of vertical offset to apply when scrolling to the target element (in pixels, default is 0)</li>
</ul>
<p>Here&rsquo;s an example applying some custom options:</p>
```javascript
var magicNav = $.MagicNav($('#article-nav'),$('article h1'),{
titles: 'data-title',
ease: function (x, t, b, c, d) {
// easeOutQuad
return -c *(t/=d)*(t-2) + b;
},
duration: 500,
offset: -60
});
```