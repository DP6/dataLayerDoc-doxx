# doxx

Use [dox](https://github.com/visionmedia/dox) to automatically generate beautiful html documentation. **Doxx is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)**.

Outputted HTML is by default based on templates and css from [ZURB's Foundation](http://foundation.zurb.com/) and syntax highlighting is done by [Prism.js](http://prismjs.com/).

## Installation
Install the module with: `npm install doxx -g`

## Demo
[Compile.js](http://fgribreau.github.com/doxx/docs/compile.js.html)
[Dir.js](http://fgribreau.github.com/doxx/docs/dir.js.html)
[Parser.js](http://fgribreau.github.com/doxx/docs/parser.js.html)

## Documentation
```
$ doxx --help

  Usage: doxx [options]

  Options:

    -h, --help                  output usage information
    -V, --version               output the version number
    -r, --raw                   output "raw" comments, leaving the markdown intact
    -d, --debug                 output parsed comments for debugging
    -t, --title <string>        The title for the page produced
    -s, --source <source>       The folder which should get parsed
    -i, --ignore <directories>  Comma seperated list of directories to ignore. Default: test,public,static,views,templates
    -T, --target <target>       The folder which will contain the results. Default: <process.cwd()>/docs
    --template <jade template>  The jade template file to use

  Examples:

    # parse a whole folder
    $ doxx --source lib --target docs
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
* *0.0.1* - (dox-foundation) Initial release
* *0.2.0* - (dox-foundation) Readable output
* *0.3.0* - (dox-foundation) Support for folder parsing
* *0.4.0* - (dox-foundation) Improved project navigation, major refactor of folder code
* *0.5.0* - Initial release of doxx

## License
Copyright (c) 2013 Francois-Guillaume Ribreau
