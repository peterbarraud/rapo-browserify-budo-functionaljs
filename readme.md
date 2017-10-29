# 4 Functional programming tools
In my recent forays into functional programming, I have come across some really neat libraries that provide pretty good support - [lodash](https://lodash.com) for one.

Anyway, I have started using this libraries for the odd thing or other.

Like recently, I used lodash to include the `foreach` in a web app. Now if that's all I want to do on my page, that's kind of a overkill. Right? You could, of course, also get this functionality at [underscore](http://underscorejs.org)

Alright. So what's this whole blog about?

What I'm going to do here is use 4 very popular functionalities of functional programming in a web page. And how? By using 4 different super small npm-based libraries.

Let's get started.

To keep it simple, I'm going to simply include the underscore and lodash libs in my browserify project and use Chrome to find out their sizes. How that?

## How to check the size of a lib in Chrome
*Not sure how good this test is. But it gives me a good enough ballpark*
1. Load the project in the browser
```
npm start
```
2. Open the Chrome DevTools and go to the Network tab
3. If you see a message at the bottom, you might have to press `F5`. Go ahead and do that.
4. Click JS in the Filter menu.
You will see the sizes of the different JS files
![alt text](blob/master/imgs/network-tab.png)

## Include underscore
1. Get `underscore`
```
npm i underscore --save
```
2. Go to the main.js file in this project, at the top add
```
var _ = require('underscore');
```
`bundle.js` => 139 KB

## Include lodash
1. Get `lodash`
```
npm i lodash --save
```
2. Go to the main.js file in this project, at the top add
```
var _ = require('underscore');
```
`lodash.js` => 1.3 MB (Now that's pretty big!)

**Important**: [Here](https://stackoverflow.com/a/13898916/4672179)'s a fantastic reason why you *should* use `lodash`. From the creator himself.

## npm libraries
Finally, let's get the npm libs that just do what we need

1. Get [`foreach`](https://www.npmjs.com/package/foreach), [`array-reduce`](https://www.npmjs.com/package/array-reduce), [`array-filter`](https://www.npmjs.com/package/array-filter) and [`array-map`](https://www.npmjs.com/package/array-map)
```
npm i `foreach array-reduce array-filter array-map --save
```
2. Go to the main.js file in this project, at the top add
```
var foreach = require('foreach');
var reduce = require('array-reduce');
var filter = require('array-filter');
var map = require('array-map');
```
`npm libs` => 11 KB

So it would appear that picking these makes sense. That's what I think. Let me know what you think.