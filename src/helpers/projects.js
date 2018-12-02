fs = require ('fs');

let projects = [];

fs.readdirSync(dir).forEach(item => {
      projects.push(`${item}`)
})

