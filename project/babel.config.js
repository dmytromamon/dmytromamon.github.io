const presets = [
    [
        "@babel/env",
        {
            "exclude": ["transform-async-to-generator", "transform-regenerator"]
        }
    ],
    "@babel/preset-react"
];

// const plugins = [
//     [
//         "module:fast-async",
//         {
//             "spec": true
//         }
//     ],
//     [
//         "@babel/plugin-proposal-class-properties",
//         {
//             "loose": true
//         }
//     ],
//     [
//         "@babel/plugin-proposal-private-methods", {
//             "loose": true
//         }
//     ],
//     [
//         "@babel/plugin-proposal-private-property-in-object", { 
//             "loose": true 
//         }
//     ]
// ];

module.exports = {
    presets,
    // plugins,
    "sourceType": "unambiguous"
};