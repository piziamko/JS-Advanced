// function RequestValidator(input) {

//     let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
//     let uriRegex = /^[a-zA-Z0-9.]+$|^\*$/g;
//     let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
//     let message = /^[^<>\\&'"]*$/g;

//     if (!validMethods.includes(input.method)) {
//         throw new Error('Invalid request header: Invalid Method');
//     }

//     if (!input.hasOwnProperty('uri') || !input.uri.match(uriRegex)) {
//         throw new Error("Invalid request header: Invalid URI");
//     }

//     if (!validVersions.includes(input.version)) {
//         throw new Error('Invalid request header: Invalid Version');
//     }

//     if (!input.hasOwnProperty('message') || !input.message.match(message)) {
//         throw new Error("Invalid request header: Invalid Message");
//     }

//     return input;
// }

// Variant 2 

function requestValidator(obj) {
    const VALID_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const VALIDATION_URI_REGEX = new RegExp('(^[\\w.]+$)|^\\*$');
    const VALID_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const INVALID_MASSAGE_SYMBOLS = ['<', '>', '&', '\'', '"', '\\'];

    const isValid = {
        method: (obj) => VALID_METHODS.includes(obj.method),
        uri: (obj) => VALIDATION_URI_REGEX.test(obj.uri),
        version: (obj) => VALID_VERSIONS.includes(obj.version),
        message: (obj) => !INVALID_MASSAGE_SYMBOLS.some(symbol => obj.message.includes(symbol)),
    };

    for (const prop in isValid) {
        if (!obj.hasOwnProperty(prop) || !isValid[prop](obj)) {
            throw Error(`Invalid request header: Invalid ${prop === 'uri' ? 'URI' : prop[0].toUpperCase() + prop.slice(1)}`);
        }
    }

    return obj;
}

