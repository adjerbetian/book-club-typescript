/**
 *   Hard coded types vs inferred types
 */

function buildLogger() {
    return {
        logInt(n) {
            console.log("integer", n);
        },
        logString(text) {
            console.log("string", text);
        },
        logBoolean(bool) {
            console.log("boolean", bool);
        },
        logUser(user) {
            console.log("user", user.name);
        },
        logObject(o) {
            console.log("object", JSON.stringify(o, null, 4));
        },
    };
}
