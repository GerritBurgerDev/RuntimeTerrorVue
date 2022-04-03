module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': 'vue3-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
