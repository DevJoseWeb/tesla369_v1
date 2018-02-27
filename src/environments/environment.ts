const packageJson = require('../../package.json');

export const environment = {
  appName: 'tesla369',
  envName: 'DEV',
  production: false,
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  },
  firebaseConfig: {
    apiKey: "AIzaSyCFKCPYnQU-0woVkKaKNASYJA34XZBXkT4",
    authDomain: "puta666.firebaseapp.com",
    databaseURL: "https://puta666.firebaseio.com",
    projectId: "puta666",
    storageBucket: "puta666.appspot.com",
    messagingSenderId: "370256982038"
}
};
