// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, you can reach me at [GitHub: ${data.github}](https://github.com/${data.github}) or contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
