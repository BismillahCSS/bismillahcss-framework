
// bismillah.config.js
const defaultConfig = require("./config/default-config.js");
const userConfig = require("./config/user-config.js");

// Utility function to deep merge objects
const deepMerge = (target, source) => {
    for (const key in source) {
        if (typeof source[key] === "object" && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {};
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
};

// Merging default and user configs
const finalConfig = deepMerge({ ...defaultConfig }, userConfig);

module.exports = finalConfig;
