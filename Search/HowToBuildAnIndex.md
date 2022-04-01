## Building the Index

1. Edit **build_index.js**.
2. Change the **HTML_FOLDER** constant to point to the folder with your website's HTML files.
3. You can build the search index on the HTML document title, meta description, meta keywords, and body tags. Specify which of these tags to include using the **SEARCH_FIELDS** constant.
4. Save and close **build_index.js**.
5. In the command window or shell prompt, enter: `node build_index.js`

To build the index, the script reads HTML tags from each HTML file and initializes a Lunr index based on tag content. While the Lunr index can be serialized as JSON, the script adds a variable declaration (`var LUNR_DATA = ...`) so we can easily load it as a script file in our search page.

Lunr search results just provide the identifier of each matching item. To provide title, preview, and hyperlink, the script also includes a dictionary (`var PREVIEW_LOOKUP = ...`) mapping each identifier to its title, etc.