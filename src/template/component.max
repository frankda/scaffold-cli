// component
const component = {
	name: '{{component}}',
	template: null
};

// set template and dummy data if development environment variable string
if (process.env.VUE_APP_DEVELOPMENT) {
	component.template = require(`./${component.name}-template`).default;
}

// css import
import(`./_${component.name}.scss`);

export default component;
