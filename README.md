[![Build Status](https://travis-ci.org/quteron/ghost-need-pagination.svg?branch=master)](https://travis-ci.org/quteron/ghost-need-pagination)  [![Coverage Status](https://coveralls.io/repos/github/quteron/ghost-need-pagination/badge.svg?branch=master)](https://coveralls.io/github/quteron/ghost-need-pagination?branch=master)

Ghost-Need-Pagination
=========

Custom handlebars helper to display pagination if only it's needed, in other words, if only it's more than one page.

## Installation

 `npm install ghost-need-pagination`

## Example

Register custom helper in the `config.js` ghost file:

```javascript
  var need_pagination = require('ghost-need-pagination');
  var hbs = require('express-hbs');
  hbs.registerHelper('ghost-need-pagination', need_pagination);
```

Update ghost template `partials/pagination.hbs`:

```html
{{#need_pagination pages}}
    <nav class="pagination" role="navigation">
        {{#if prev}}
            <a href="{{page_url prev}}">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
        {{/if}}
        {{#if next}}
            <a href="{{page_url next}}">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        {{/if}}
    </nav>
{{/need_pagination}}
```

To remove undesired whitespaces, look at [Whitespace Control](http://handlebarsjs.com/expressions.html#whitespace-control) section on the [official handlebars site](http://handlebarsjs.com/).

## Tests

  `npm test`

## License

MIT License
