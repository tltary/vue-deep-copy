function deepCopyFunction(inObject) {
  let outObject, value, key
  if (typeof inObject !== "object" || inObject === null) {
    return inObject
  }
  outObject = Array.isArray(inObject) ? [] : {}  
  for (key in inObject) {
    value = inObject[key]
    outObject[key] = deepCopyFunction(value)
  }
  return outObject
}

const deepCopy = {
  install(Vue) {
    Vue.prototype.deepCopy = (data) => {
      return deepCopyFunction(data);
    }
  }
};

export default deepCopy;