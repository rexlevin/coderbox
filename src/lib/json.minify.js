/*! JSON.minify()
    v0.2.0 (c) Kyle Simpson
    MIT License
*/
/**
 * @name minify.json.js
 * @author Kei Funagayama <kei.topaz@gmail.com>
 * @overview JSON.minify
 */

/**
 * @namespace JSON
 */
 (function(global){

    /**
     * @function
     * @memberof JSON
     * @param {Object} Transformed data. format) json-like
     * @return {String}
     *
     * @example
     * var json = { // hoge
     *     "foo": "bar",// this is cool
     *     "bar": [
     *         "baz", "bum", "zam"   // this is cool
     *     ]
     * } // hoge
     *
     */
    var minify = function (json) {

        var tokenizer = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r|\[|]/g,
            in_string = false,
            in_multiline_comment = false,
            in_singleline_comment = false,
            tmp, tmp2, new_str = [], ns = 0, from = 0, lc, rc,
            prevFrom
        ;

        tokenizer.lastIndex = 0;

        while ( tmp = tokenizer.exec(json) ) {
            lc = RegExp.leftContext;
            rc = RegExp.rightContext;
            if (!in_multiline_comment && !in_singleline_comment) {
                tmp2 = lc.substring(from);
                if (!in_string) {
                    tmp2 = tmp2.replace(/(\n|\r|\s)*/g,"");
                }
                new_str[ns++] = tmp2;
            }
            prevFrom = from;
            from = tokenizer.lastIndex;

            // found a " character, and we're not currently in
            // a comment? check for previous `\` escaping immediately
            // leftward adjacent to this match
            if (tmp[0] === "\"" && !in_multiline_comment && !in_singleline_comment) {
                // limit left-context matching to only go back
                // to the position of the last token match
                //
                // see: https://github.com/getify/JSON.minify/issues/64
                lc.lastIndex = prevFrom;

                // perform leftward adjacent escaping match
                tmp2 = lc.match(/(\\)*$/);
                // start of string with ", or unescaped " character found to end string?
                if (!in_string || !tmp2 || (tmp2[0].length % 2) === 0) {
                    in_string = !in_string;
                }
                from--; // include " character in next catch
                rc = json.substring(from);
            }
            else if (tmp[0] === "/*" && !in_string && !in_multiline_comment && !in_singleline_comment) {
                in_multiline_comment = true;
            }
            else if (tmp[0] === "*/" && !in_string && in_multiline_comment && !in_singleline_comment) {
                in_multiline_comment = false;
            }
            else if (tmp[0] === "//" && !in_string && !in_multiline_comment && !in_singleline_comment) {
                in_singleline_comment = true;
            }
            else if ((tmp[0] === "\n" || tmp[0] === "\r") && !in_string && !in_multiline_comment && in_singleline_comment) {
                in_singleline_comment = false;
            }
            else if (!in_multiline_comment && !in_singleline_comment && !(/\n|\r|\s/.test(tmp[0]))) {
                new_str[ns++] = tmp[0];
            }
        }
        new_str[ns++] = rc;
        return new_str.join("");
    };

    if (typeof module !== 'undefined' && module.exports) {
        // node
        module.exports = minify;
        JSON.minify = minify;
    } else {
        // others, export global
        if (typeof global.JSON === "undefined" || !global.JSON) {
            global.JSON = {};
        }
        global.JSON.minify = minify;
    }
})(this);