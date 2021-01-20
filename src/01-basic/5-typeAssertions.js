/**
 *   Return type of a function
 */

async function buildUserScore(user) {
    const attempts = await fetchUserAttempts(user);
    return average(attempts.map(getScore));
}
async function fetchUserAttempts(user) {
    return [
        { id: 1, user: user.id, score: Math.random() },
        { id: 2, user: user.id, score: Math.random() },
        { id: 3, user: user.id },
    ];
}
function getScore(attempt) {
    return attempt?.score;
}
function average(scores) {
    if (scores.length === 0) return null;
    const sum = scores.reduce((acc, value) => acc + value);
    return sum / scores.length;
}
