// https://medium.com/@ferie/how-to-pass-environment-variables-at-building-time-in-an-angular-application-using-env-files-4ae1a80383c
const writeFile = require('fs').writeFile;

// Configure Angular `environment.ts` file path
const targetPath = 'src/environments/environment.ts';

// Load node modules
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
  production: ${process.env.NODE_ENV},
  appName: 'Udagram',
  apiHost: '${process.env.API_HOST}'
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
});