// doing this to be able to use import in gatsby-config, as documented here https://github.com/gatsbyjs/gatsby/issues/7810
const requireEsm = require("esm")(module);
module.exports = requireEsm("./gatsby-config.esm.js");
