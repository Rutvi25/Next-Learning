// const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// module.exports = (phase, { defaultConfig }) => {
//   if(phase = PHASE_DEVELOPMENT_SERVER) {
//     console.log('I\'m in dev mode');
//     return defaultConfig
//   }
//   return defaultConfig
// }

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withEnv = nextEnv()
module.exports = withEnv()