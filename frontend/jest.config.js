module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Babelを使用してトランスパイル
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)', // axiosモジュールをトランスパイル対象に含める
  ],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'), //追加
  },
};
