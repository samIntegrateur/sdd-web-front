const path = require('path');

// Cf https://react-svgr.com/docs/custom-templates/

function customIndexTemplate(filePaths) {

  const fileNames = filePaths.map(filePath => {
    const basename = path.basename(filePath, path.extname(filePath));
    const importName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    return {
      basename,
      importName,
    };
  });

  const importEntries = fileNames.map(fileName => {
    const { basename, importName } = fileName;
    return `import { default as ${importName} } from './${basename}'`
  })

  const imports = importEntries.join('\n');

  const listEntries = fileNames.map(fileName => {
    const { importName } = fileName;
    return (
      ` ${importName}: ${importName},`
    )
  });

  const entries = listEntries.join('\n');

  const svgNames = fileNames.map(fileName => {
    const { importName } = fileName;
    return `'${importName}'`;
  }).join(' | ');

  return (
`${imports}
import { SvgComponentList } from './Svg.types';
    
const SvgList: SvgComponentList = {
${entries}
}

export type SvgNames = ${svgNames};

export default SvgList;
`
  );
}

module.exports = customIndexTemplate;
