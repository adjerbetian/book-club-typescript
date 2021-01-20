/**
 *   Interfaces
 */

function isAdmin(user) {
    if (user.name === "Sebastien Mignot") return true;
    if (user.codeStyle === "getData") return false;
    if (user.age) {
        if (user.age < 18 || user.age > 60) return false;
    }
    return user.typescript.level === "very good";
}
