var trim     = require('../utils/trim');
var unindent = require('../utils/unindent');

function parse(content) {
    var visibility = trim(content);
    if (!visibility){
        return {
            visibility: null
        };
    }
    return {
        visibility: unescape(visibility)
    };
}

/**
 * Exports
 */
module.exports = {
    parse         : parse,
    path          : 'local',
    method        : 'insert',
    // markdownFields: [ 'visibility' ]
};
