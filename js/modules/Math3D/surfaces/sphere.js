Surfaces.prototype.sphere = (R = 15, count = 80) => {
    const points = [];
    const edges = [];
    const polygons = [];
    let color = null;

    //точки
    const dt = Math.PI * 2 / count;
    for (let i = 0; i <= Math.PI; i += dt) {
        for (let j = 0; j < Math.PI * 2; j += dt) {
            points.push(new Point(
                R * Math.cos(j) * Math.sin(i),
                R * Math.cos(i),
                R * Math.sin(j) * Math.sin(i),
            ));
        }
    }

    //ребра 
    for (let i = 0; i < points.length; i++) {
        //вдоль
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(
                i,
                i + 1
            ));
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(
                i,
                i + 1 - count
            ));
        }
        //поперек
        if (i < points.length - count) {
            edges.push(new Edge(
                i,
                i + count
            ));
        }
    }

    //полигоны
    let color1 = '#00ff00';
    let color2 = '#00ffff';
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            // Пропуск полигонов в центре
            if (Math.abs(points[i].y) < R / 2) continue; // Пропускаем центральную часть

            if (i % 2 !== 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
            else polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color2));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            // Пропуск полигонов в центре
            if (Math.abs(points[i].y) < R / 2) continue; // Пропускаем центральную часть

            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color1))
        }
        if ((i + 1 + count) % count === 0) {
            let a = color1;
            color1 = color2;
            color2 = a;
        }
    }
    return new Surface(points, edges, polygons);
};
