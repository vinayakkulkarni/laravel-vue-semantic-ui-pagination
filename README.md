[![Build Status](https://travis-ci.org/vinayakkulkarni/laravel-vue-semantic-ui-pagination.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/laravel-vue-semantic-ui-pagination)

# Laravel Vue Semantic-UI Pagination :zap:
+ A Vue.js pagination component for Laravel paginators that works with Semantic-UI.

+ This is [on GitHub](https://github.com/vinayakkulkarni/laravel-vue-semantic-ui-pagination)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

+ You can checkout the [Demo](https://goo.gl/xtZGF9)

## Requirements

* [Vue.js](https://vuejs.org/) 2.x
* [Laravel](https://laravel.com/docs/) 5.x
* [Semantic-UI](https://semantic-ui.com/) 2.x

## :white_check_mark: Install :ok_hand:

```bash
npm install laravel-vue-semantic-ui-pagination
// or
yarn add laravel-vue-semantic-ui-pagination
```

## :white_check_mark: Usage :mortar_board:

Register the component globally:
```javascript
Vue.component('pagination', require('laravel-vue-pagination'));
```
Or use locally
```javascript
import pagination from 'laravel-vue-semantic-ui-pagination';
```

## :white_check_mark: Example :four_leaf_clover:

```html
<ul>
    <li v-for="post in laravelData.data" v-text="post.title"></li>
</ul>
<pagination :data="laravelData" v-bind:showDisabled="true" icon="chevron" v-on:change-page="getResults"></pagination>
```

```javascript
Vue.component('example-component', {

	data() {
		return {
			// Our data object that holds the Laravel paginator data
			laravelData: {},
		}
	},

	created() {
		// Fetch initial results
		this.getResults();
	},

	methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page) {
			if (typeof page === 'undefined') {
				page = 1;
			}

			// Using vue-resource as an example
			this.$http.get('example/results?page=' + page)
				.then(response => {
					return response.json();
				}).then(data => {
					this.laravelData = data;
				});
		}
	}

});
```

### :white_check_mark: :book: Props

| Name | Type | Description |
| --- | --- | --- |
| `data` | Object | An object containing the structure of a [Laravel paginator](https://laravel.com/docs/5.4/pagination) response. See below for default value. |
| `limit` | Number | (optional) Limit of pages to be rendered. Default `0` (unlimited links) `-1` will hide numeric pages and leave only arrow navigation. `3` will show 3 previous and 3 next numeric pages from current page. |
| `showDisabled` | Boolean | (optional) If set to true, will display left and right icons always. |
| `icon` | String | (optional) Default is `angle double`; Refer [Semantic-UI Icons](https://semantic-ui.com/elements/icon.html) for specifying which icons you want. |
| `size` | String | (optional) Default is `small`; Refer [Semantic-UI Menu Pagination](https://semantic-ui.com/collections/menu.html#pagination) for specifying the size of paginator. |

```javascript
{
	current_page: 1,
	data: [],
	from: 1,
	last_page: 1,
	next_page_url: null,
	per_page: 10,
	prev_page_url: null,
	to: 1,
	total: 0,
}
```

### :white_check_mark: :ear: Events

| Name | Description |
| --- | --- |
| `change-page` | Triggered when a user changes page. Passes the new `page` index as a parameter. |


## NPM :octocat:  

[![NPM](https://nodei.co/npm/laravel-vue-semantic-ui-pagination.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/laravel-vue-semantic-ui-pagination/)