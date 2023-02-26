import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProducts } from '../render/renderProducts';

export const mainPageController = (gender = 'women') => {
	renderNavigation(gender);
	renderHero(gender);
	renderProducts('Новинки', { gender });
};
