const { join } = require('path')
const hbs = require('hbs')

hbs.registerPartials(join(__dirname, '..', 'views', 'partials'))


// https://gist.github.com/LukeChannings/6173ab951d8b1dc4602e
hbs.registerHelper("select", function (value, options) {
    return options.fn(this)
        .split('\n')
        .map(function (v) {
            var t = 'value="' + value + '"'
            return !RegExp(t).test(v) ? v : v.replace(t, t + ' selected="selected"')
        })
        .join('\n')
})