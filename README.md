# ember-cli-input-mask

An ember-cli addon for creating input masks on text fields. It makes use of the [jquery.inputmask plugin](https://github.com/RobinHerbots/jquery.inputmask) to assist users in entering text that matches the required format.

## Installation

To install this addon in your ember application:

* `ember install:addon ember-cli-input-mask`

## Usage

In your handlebars template:

```handlebars
{{input-mask
  mask='000-00-0000'}}
```

This addon's `input-mask` component extends an `Ember.TextField`. See the [Ember input helpers guides](http://emberjs.com/guides/templates/input-helpers/#toc_text-fields) for information on the available attributes.

A very common case will be to set a value:

```handlebars
{{input-mask
  value=myInputValue
  mask='000-00-0000'}}
```

Your `value` can be a JS date if you use `jquery.inputmask`'s built-in date type, and it will be handled correctly:

```handlebars
{{input-mask
  value=myJsDateValue
  mask='mm/dd/yyyy'}}
```

See jquery.inputmask's [masking types docs](https://github.com/RobinHerbots/jquery.inputmask#masking-types) for more information on defining masks.

## Running Tests

* `ember test`

## Credits

This addon was born from [a blog post](http://beerlington.com/blog/2015/01/22/jquery-inputmask-user-experience-in-emberjs/) by [Peter Brown](https://twitter.com/beerlington) of [Agilion](http://agilion.com/).

