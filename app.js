const _=require('loadsh')
const item = [1,[2,[3,[4,[5]]]]]
const newItem= _.flattenDeep(item)
console.log(newItem);

