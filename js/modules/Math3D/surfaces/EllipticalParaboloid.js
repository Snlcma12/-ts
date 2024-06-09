Surfaces.prototype.EllipticalParaboloid = (count = 20, a = 4, b = 3, c = 2, color1 = '#9ACD32', color2 = 'blue', color3 = '#00008B') => {
    const points = [];
    const edges = [];
    const polygons = [];
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
new Point([0,0,0], 'blue');

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

const ab = (points.length - count) / 4;
const ac = (points.length - count) * 3 / 4;
// полигоны
// полигоны
for (let i = 0; i < points.length - count; i++) {
    // Добавляем условие для проверки, находится ли текущая точка в верхней половине поверхности
    if (i === ab) {
        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color3)); // Верхний красный квадрат
    } else if (i === ac) {
        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color3)); // Нижний красный квадрат
    } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
        polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1)); // Зеленый
    } else if (i + count < points.length && (i + 1) % count === 0) {
        polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color1)); // Зеленый
    }
}






    return new Surface(points, edges, polygons);
};