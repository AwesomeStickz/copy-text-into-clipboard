# copy-clip

A simple package to copy text, contents of a file into the clipboard outside browsers (server side)

## Install

```
$ npm i copy-text-into-clipboard
```

## Example

```js
const { copy } = require('copy-clip');

copy('Text to Copy');

// To copy file contents
copy('./path/to/file.extension', { copyFromFile: true });
```
