/**
 * C#, Go, Dart, Java, JavaScript, PHP (all DocStyle capable languages)
 */

////vb
// module.exports = {
//     // find document blocks between '#**' and '#*'
//     docBlocksRegExp: /\'{3}\uffff?(.+?)\uffff?(?:\s*)?\'{3}/g,
//     // remove not needed ' * ' and tabs at the beginning
//     inlineRegExp: /^(\s*)?(\')[ ]?/gm
// };

//// both vb and C#
module.exports = {
    // find document blocks between '#**' and '#*'
    docBlocksRegExp: /(\'{3}\uffff?(.+?)\uffff?(?:\s*)?\'{3})|(\/\*\*\uffff?(.+?)\uffff?(?:\s*)?\*\/)/g,
    // remove not needed ' * ' and tabs at the beginning
    inlineRegExp: /^(\s*)?((\*)|(\'))[ ]?/gm
};


////original C#
// module.exports = {
//     // find document blocks between '#**' and '#*'
//     docBlocksRegExp: /\/\*\*\uffff?(.+?)\uffff?(?:\s*)?\*\//g,
//     // remove not needed ' * ' and tabs at the beginning
//     inlineRegExp: /^(\s*)?(\*)[ ]?/gm
// };
