empress-blog-vintage-news-template
==============================================================================

[![Netlify Status](https://api.netlify.com/api/v1/badges/3fbd7ef6-053b-4e11-8093-bc6e6160fceb/deploy-status)](https://app.netlify.com/sites/practical-lichterman-ed1733/deploys)

Vintage Newspaper Template based on this [Codepen](https://codepen.io/oliviale/pen/BaoXOOP?editors=1100)
Masonry Layout based on this [article](https://w3bits.com/css-grid-masonry/)

Check out a [production example](https://weevil.news/)!

We adhere to the [Ember Community Guidelines](https://emberjs.com/guidelines/) for our Code of Conduct.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install empress-blog-vintage-news-template
```


Usage
------------------------------------------------------------------------------

### Adding an author

In the command line, run the following:

```ember g author author-name```

This creates a new file `author-name.md` in the `authors/` folder.

### Adding an issue

In the command line, run the following:

```ember g tag issue-#```

e.g. "issue-3"

This creates a new file `issue-#.md` in the `tags/` folder.

Then edit the resulting file to change the following fields:

`name` - This should just be the number of the issue, e.g. `3`
`image` - This field will get used for the publication date, e.g. `Sunday, July 12th, 2020`
`imageMeta` - This field will get used for the publication location, e.g. `San Francisco, CA`

### Adding an article

In the command line, run the following:

```ember g post "Name of article"```

If you have multiple others, you can specify one with `--author=author-name` in the above command.

This creates a new file `name-of-article.md` in the `content/` folder.

In this file, change the `tag` section from `new` to the Issue you'd like to publish it under (e.g. `issue-3`). 
You can tag an article to appear in multiple issues. 

### Publishing An Issue

It's recommended to prepare an issue as a branch by adding the new issue and all articles to that branch, then making 
a single pull request back into the master branch to release the issue. That way, no one will see any of the in-progress 
work until the issue is ready. You will also be able to see a preview deployment to know how it will look prior to release.

Articles will be sorted in the order they were created, with the most recent listed first. If you want to change the order, 
simply edit the `date` field in each article so that they display in the desired order.

Once changes have been merged to the master branch, they will automatically build and release to the live website.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
