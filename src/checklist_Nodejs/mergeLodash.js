import lodash from 'lodash'

console.log(
lodash.merge({ cpp: "12" }, { java: "23" },
{ python:"35" })
);

// When two keys are the same
console.log(
lodash.merge({ cpp: "12" }, { cpp: "23" },
{ java: "23" }, { python:"35" })
);