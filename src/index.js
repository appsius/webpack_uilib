import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// Compose a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Compose dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
	const instance = new Dropdown(dropdown);
	instance.init();
});
