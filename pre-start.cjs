const { execSync } = require('child_process');

// Obtener el hash de Git con un valor predeterminado en caso de error
const getGitHash = () => {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
        return 'no-git-info';
    }
};

// Crear un objeto con la información del commit y la versión
const commitJson = {
    hash: getGitHash(),
    version: process.env.npm_package_version
};

// Mostrar un mensaje de bienvenida con la información del commit y la versión
console.log(`
★═══════════════════════════════════════★
          B O L T . D I Y
         ⚡️  Welcome  ⚡️
★═══════════════════════════════════════★
📍 Current Version Tag: v${commitJson.version}
📍 Current Commit Version: ${commitJson.hash}
  Please wait until the URL appears here
★═══════════════════════════════════════★
`);