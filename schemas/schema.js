import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import * as plugs from "./plugs";

const allPlugs = Object.values(plugs).map((plugs) => {
  return { ...plugs, fields: plugs.fields };
});

export default createSchema({
  name: "default",

  types: schemaTypes.concat([allPlugs]),
});
