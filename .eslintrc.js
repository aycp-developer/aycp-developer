module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'document': true,
        'require': true,
        'process': true,
        'module': true,
        '__dirname': true,
        'describe': true,
        'test': true,
        'expect': true
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'overrides': [
        {
            'files': [
                '*.js',
                '*.jsx'
            ]
        }
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-trailing-spaces': [
            'error',
            {
                'ignoreComments': true
            }
        ]
    }
};
