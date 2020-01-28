/**
 * ISC License
 *
 * Copyright 2020, Saksham (DawnImpulse)
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
 * provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
 * WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE
 * OR PERFORMANCE OF THIS SOFTWARE.
 **/

/*

@info - post install script

@author Saksham
@note Last Branch Update - master

@note Created on 2020-01-27 by Saksham
@note Updates :

*/
const fs = require('fs');
const path = require('path');
let root, link;

// using INIT_CWD for npm version > 5.4
if (process.env.INIT_CWD !== undefined)
    root = process.env.INIT_CWD.replace(/\\/g, '/');
else
    root = process.cwd().replace(/\\/g, '/');

// used to create a new link
link = root + '/node_modules/~/~';
root = path.resolve(root);

try {
    link = path.resolve(link);
    if (!fs.existsSync(link))
        symlink();
    else {
        console.log("already linked");
        process.exit(0);
    }
} catch (e) {
    symlink();
}

/**
 * create a new symlink
 */
function symlink() {
    fs.symlinkSync(root, link, 'junction');
    console.log("linked successfully");
    process.exit(0)
}