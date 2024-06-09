Surfaces.prototype.cone = (count = 20, a = 4, b = 3, c = 2, color1 = '#FF0000', color2 = '#FF4500', color3 = '#FFFF00', color4 = '#008000', color5 = '#00BFFF', color6 = '#0000FF', color7 = '#800080') => {
    const points = [];
    const edges = [];
    const polygons = [];
    const colors = [color1, color2, color3, color4, color5, color6, color7];

    // точки
    const dt = Math.PI * 2 / count;
    for (let i = 0; i <= Math.PI; i += dt) {
        for (let j = 0; j < 2 * Math.PI; j += dt) {
            points.push(new Point(
                a * Math.sinh(i) * Math.cos(j),
                c * Math.cosh(i),
                b * Math.cosh(i) * Math.sin(j)
            ));
        }
    }
    
    for (let i = 0; i <= Math.PI; i += dt) {
        for (let j = 0; j < 2 * Math.PI; j += dt) {
            points.push(new Point(
                -a * Math.sinh(i) * Math.cos(j), 
                -c * Math.cosh(i), 
                -b * Math.cosh(i) * Math.sin(j)
            ));
        }
    }

    // ребра
    for (let i = 0; i < points.length; i++) {
        // вдоль
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        } else if (i + 1 >= count && (i + 1) % count === 0) {
            edges.push(new Edge(i, i + 1 - count));
        }
        // поперек
        if (i + count < points.length) {
            edges.push(new Edge(i, i + count));
        }
    }
    
    // полигоны
    for (let i = 0; i < points.length - count; i++) {
        const color = colors[i % colors.length];
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
        }
    }

    return new Surface(points, edges, polygons);
};
