/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./src'],
          prependData: `@import "./src/styles/variables.scss";`,
      }
  }
  return defaultConfig;
}

// module.exports = (phase, {defaultConfig}) => {
//   if ('sassOptions' in defaultConfig) {
//       defaultConfig['sassOptions'] = {
//           includePaths: ['./src'],
//           prependData: `@import "./src/styles/mixins.scss";`,
//       }
//   }
//   return defaultConfig;
// }