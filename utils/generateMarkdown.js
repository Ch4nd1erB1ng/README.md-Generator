// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
    let licenseKind = license.license; 
    let myLicense = ''
    if(licenseKind === 'MIT') {
      myLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseKind === 'Apache') {
      myLicense = `![Apache license]('https://www.apache.org/licenses/LICENSE-2.0')`
    } else if (licenseKind === 'GNU') {
      myLicense = `![GNU license]('https://www.gnu.org/licenses/gpl-3.0.en.html')`
    } else {
      license.license = ""
    }
    return myLicense;
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {
  const licenses = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    GNU: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    // Add more licenses and their respective links as needed
  };

  return licenses[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(license) {
  const licenses = {
    MIT: {
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      link: 'https://opensource.org/licenses/MIT',
      description: 'This project is licensed under the MIT License.',
    },
    Apache: {
      badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      link: 'https://opensource.org/licenses/Apache-2.0',
      description: 'This project is licensed under the Apache License 2.0.',
    },
    GNU: {
      badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      link: 'https://www.gnu.org/licenses/gpl-3.0',
      description: 'This project is licensed under the GNU General Public License v3.0.',
    },
    // Add more licenses and their respective details as needed
  };

  const licenseDetails = licenses[license];
  if (licenseDetails) {
    const { badge, link, description } = licenseDetails;
    const licenseSection = `
## License

${badge}

${description} [Read more](${link}).
`;
    return licenseSection;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
  function generateMarkdown (title, description, installation, usage, contributing, license) {
    let markdown = `# ${title}\n\n`;
    markdown += `${description}\n\n`;
  
    markdown += `## Installation\n\n`;
    markdown += `${installation}\n\n`;
  
    markdown += `## Usage\n\n`;
    markdown += `${usage}\n\n`;
  
    markdown += `## Contributing\n\n`;
    markdown += `${contributing}\n\n`;
  
    markdown += `## License\n\n`;
    markdown += `This project is licensed under the ${license} license.\n\n`;
  
    return markdown;
  }
  
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();


module.exports = generateMarkdown;
