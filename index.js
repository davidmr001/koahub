var loader = require('koahub-loader');

/**
 *
 *  global koahub
 */
module.exports = function (options) {

    if (typeof options == 'undefined') {
        options = {
            controller: '',
            model: '',
            util: '',
        };
    }

    options.controller = options.controller || [
            {
                root: './app/controller',
                suffix: '.controller.js',
                prefix: '/',
            }, {
                root: './addon',
                suffix: '.controller.js',
                prefix: '/addon/',
                filter: [/\w*\/controller\//]
            }
        ]

    options.model = options.model || [
            {
                root: './app/model',
                suffix: '.model.js'
            }, {
                root: './addon',
                suffix: '.model.js',
                filter: [/\w*\/model\//]
            }
        ]

    options.util = options.util || [
            {
                root: './app/common',
                suffix: '.util.js'
            }, {
                root: './addon',
                suffix: '.util.js',
                filter: [/\w*\/common\//]
            }
        ]
    /**
     *
     * controller loader
     */

    var controller = loader(options.controller);

    /**
     *
     * model loader
     */
    var model = loader(options.model);


    /**
     *
     * util loader
     */
    var util = loader(options.util);

    /**
     *
     * global koahub
     */
    global.koahub = {
        controller: controller,
        model: model,
        util: util
    };
};