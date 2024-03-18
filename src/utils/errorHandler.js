const errorHandlerKey = 'errorHandlerKey';

export function ErrorHandler(f, args) {
  try {
    return Array.isArray(args) ? f(...args) : f();
  } catch (err) {
    const optionalMessage = typeof f === 'function' ? `[${f.name || 'function'}]` : '';

    console.error(`Error Handler: ${optionalMessage}`, err);

    return { [errorHandlerKey]: true, error: err };
  }
}

export function isCatchHandlerError(v) {
  return isObjectHasKey(v, errorHandlerKey) ? v[errorHandlerKey] : false;
}

export function isObjectHasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
