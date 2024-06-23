Surfaces.prototype.EllipticalCylinder23 = (r = 2, h = 5, count = 50, color = "ff0000", x = 0, y = 0, z = 0) => {
    const points = [];
    const edges = [];
    const polygons = [];

    for (let i = 0; i < count; i++) {
        const T = ((2 * Math.PI) / count) * i;
        for (let j = -count / 2; j < count / 2; j++) {
            const p = (h / count) * j;
            points.push(new Point(r * Math.cos(T) + x, p + y, r * Math.sin(T) + z));
        }
    }

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count - 1; j++) {
            const p1 = i * count + j;
            const p2 = p1 + 1;
            const p3 = ((i + 1) % count) * count + j;
            const p4 = p3 + 1;

            edges.push(new Edge(p1, p2));
            edges.push(new Edge(p1, p3));

            
           let pol;
           if (i >= count * 0.8 && j >= count * 0.5) {
           pol = new Polygon([p1, p2, p4, p3], '#9c48ba');
           pol.isShadow = false;
         } else {

            pol = new Polygon([p1, p2, p4, p3], color);
         }
         polygons.push(pol);
        }
    }

    return new Surface(points, edges, polygons);
};
