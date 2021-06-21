// const fs = require('fs');
import fs from 'fs';

const category = "test";
const componentName = "rock";

// TODO:
// iterate template folder and generate file according to file name
const component = fs.readFileSync('./src/template/component.js', 'utf8');
const componentTemplate = fs.readFileSync('./src/template/component-template.js', 'utf8');
const componentScss = fs.readFileSync('./src/template/_component.scss', 'utf8');

// TODO:
// find a way like template engine to replace component inside curly bracket: {{componnet}}
fs.appendFileSync(componentName + '.js', component.replace('{{component}}', componentName));
fs.appendFileSync(componentName + '-template.js', componentTemplate.replace('{{component}}', componentName));
fs.appendFileSync('_' + componentName + '.scss', componentScss);
