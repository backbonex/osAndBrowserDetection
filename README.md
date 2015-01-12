# osAndBrowserDetection
Detects OS and browser and writes CSS class to html element

Browser classes:
* mozilla
* msie
* opera
* webkit

OS classes:
* win
* mac
* x11 for UNIX
* linux

#Installation
```bash
$ bower install os-and-browser-detection --save
```

# Usage
Just specify the file as dependency to your RequireJS module which need brower or OS detection in CSS. Be sure you have underscore and jquery in your shim for RequireJS
