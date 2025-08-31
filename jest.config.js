export default {
    verbose: true,
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
    },
    coverageReporters: ["html", ["text", {skipFull: true}], "text-summary"],
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/main.tsx',
        '!src/pages/Home/Home.tsx',
        '!src/Routes.tsx',
        '!src/reportWebVitals.ts',
    ],
    testEnvironmentOptions: {
        customExportConditions: [''],
    }
}
