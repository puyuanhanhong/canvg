import BoundingBox from '../BoundingBox';
import PathElement from './PathElement';

export default class CircleElement extends PathElement {

	type = 'circle';

	path(ctx: CanvasRenderingContext2D) {

		const cx = this.getAttribute('cx').getPixels('x');
		const cy = this.getAttribute('cy').getPixels('y');
		const r = this.getAttribute('r').getPixels();

		if (ctx && r > 0) {
			ctx.beginPath();
			ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
			ctx.closePath();
		}

		return new BoundingBox(
			cx - r,
			cy - r,
			cx + r,
			cy + r
		);
	}

	getMarkers() {
		return null;
	}
}
