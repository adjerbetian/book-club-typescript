/**
 *   Return type of a function
 */

async function buildUserScore(user) {
    const role = await fetchRole(user);
    if (role === "admin") return 100;

    const attempts = await fetchUserAttempts(user);
    return average(attempts.map(getScore));
}
async function fetchRole(user) {
    if (user.name === "Sebastien") return "admin";
    if (user.name === "Maxence") return "Dark Sidius";
    if (user.name === "Pastou") return "Scorm Master";
    return "RAS";
}
async function fetchUserAttempts(user) {
    if ((await fetchRole(user)) === "Scorm Master") return null;
    return [
        { id: 1, score: Math.random() },
        { id: 2, score: Math.random() },
        { id: 3, score: Math.random() },
    ];
}
function getScore(attempt) {
    return attempt.score;
}
function average(scores) {
    if (scores.length === 0) return null;
    const sum = scores.reduce((acc, value) => acc + value);
    return sum / scores.length;
}
