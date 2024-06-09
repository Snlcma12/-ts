Surfaces.prototype.hyperbolicParaboloid = (a = 25, b = 10, count = 28, color = '#888888', x = 0, y = 0, z = 0) => {
    const points = [];
        const edges = [];
        const polygons = [];
        for (let i = -count / 2; i <= count / 2; i++) {
            const T = (Math.PI / count) * i;
            for (let j = 0; j < count; j++) {
                const p = ((3 * Math.PI) / count) * j;
                points.push(new Point(b * Math.sinh(T) + x, a * Math.cosh(T) + y, p * 2 + z));
            }
        }

        for (let i = 0; i < points.length; i++) {
            if (i + 1 < points.length && (i + 1) % count != 0) {
                edges.push(new Edge(i, i + 1));
            }
            if (i + count < points.length) {
                edges.push(new Edge(i, i + count));
            }
        }

        for (let i = 0; i < points.length; i++) {
            if (i + 1 < count * 2 && i % count === count - 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                if (i + 1 < count && i + 1 < count * 2 && i % count > count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                /* if (i + 1 < count * 3 && i + 1 > count * 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }*/
                
                if (i + 1 < count * 3 && i + 1 > count * 2 && i % count > count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 3 && i % count === count - 14) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                
                
                if (i + 1 < count * 4 && i + 1 > count * 3 && i % count <= count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                
                
                
                if (i + 1 < count * 6 && i + 1 > count * 5 && i % count <= count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 7 && i + 1 > count * 6 && i % count > count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 7 && i + 1 > count * 6 && i % count === count / 4) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 8 && i + 1 > count * 7 && i % count <= count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                
                if (i + 1 < count * 10 && i + 1 > count * 9) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 11 && i + 1 > count * 10 && i % count === count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 12 && i + 1 > count * 11) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                
                
                if (i + 1 < count * 20 && i + 1 > count * 19) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                if (i + 1 < count * 19 && i + 1 > count * 18 && i % count === count - 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 18 && i + 1 > count * 17 && i % count === count - 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 16 && i + 1 > count * 15 && i % count <= count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 17 && i + 1 > count * 16 && i % count > count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 17 && i + 1 > count * 16 && i % count === count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 18 && i + 1 > count * 17 && i % count === count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                if (i + 1 < count * 19 && i + 1 > count * 18 && i % count === count / 2) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
                }
                
                
                }

    return new Surface(points, edges, polygons);
}