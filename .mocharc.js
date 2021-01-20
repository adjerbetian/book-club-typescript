module.exports = {
    require: "ts-node/register",
    extensions: ["js", "ts"],
    spec: [
        "src/**/*.unit.{ts,js}"
    ],
};
