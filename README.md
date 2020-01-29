# tilde
Accessing project root in node require and import calls via ~

> tilde is used in conjunction with **iwd** although it can be used separately. Check the **installation** below

### Usage
It is very simple to access root directory via using ~/~ . E.g ->

```
const something = require('~/~/package.json')
// or
import something from "~/~/app.js"
```
With `~/~/` you get access to your project's root directory and then you can simply access your files/folders via that. This is done via symlinking your project root directory inside tilde package locally.

### Installation
> Since tilde actual package name is  ~ it can't be installed via npm although there are alternatives
- **iwd**
You can install the **iwd** package from npm and follow the guide there ( [https://npmjs.com/package/iwd](https://npmjs.com/package/iwd) )

- **directly**
You can also directly install this node package  - 
```
// via npm
npm install https://github.com/dawnimpulse/tilde

// via yarn
yarn add https://github.com/dawnimpulse/tilde
```

### Contact  
  
+ Twitter - [@dawnimpulse](https://twitter.com/dawnimpulse)  
+ Email - [dawnimpulse@gmail.com](mailto:dawnimpulse@gmail.com)
  
    
  
### License (ISC)  
~~~~
ISC License  
  
Copyright 2020, Saksham (DawnImpulse)  
  
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,  
provided that the above copyright notice and this permission notice appear in all copies.  
  
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL  
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,  
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,  
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE  
OR PERFORMANCE OF THIS SOFTWARE.
~~~~

> Written with [StackEdit](https://stackedit.io/).