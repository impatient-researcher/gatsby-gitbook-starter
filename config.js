const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://github.com/impatient-researcher/",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://www.dropbox.com/s/ism2jer738t6kya/logo.png?raw=1",
		"logoLink": "https://github.com/impatient-researcher/",
		"title": "Sea-pin",
		"githubUrl": "https://github.com/impatient-researcher/gatsby-gitbook-starter",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": true,
			"indexName": "Optional",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "Sea-pin", "link": "https://github.com/impatient-researcher/"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Sea-pin | Impatient Researcher",
		"description": "Notes gathered on my journey to become an economist.",
		"ogImage": null,
		"docsLocation": "https://github.com/impatient-researcher/gatsby-gitbook-starter/tree/master/content",
		"favicon": "https://www.dropbox.com/s/7gg2f2svbjjyerv/logo.svg?raw=1"
	},
};

module.exports = config;
