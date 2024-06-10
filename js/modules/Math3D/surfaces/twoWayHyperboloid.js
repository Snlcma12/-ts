Surfaces.prototype.twoWayHyperboloid = (count = 20, a = 2, b = 3, c = 4) => {
    const points = [];
    const edges = [];
    const polygons = [];

   
        //точки
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
                points.push(new Point(-a * Math.sinh(i) * Math.cos(j), -c * Math.cosh(i), -b * Math.cosh(i) * Math.sin(j)));
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
            } else if (i + 1 >= count && (i + 1) % count === 0) {
                edges.push(new Edge(
                    i,
                    i + 1 - count
                ));
            }
        }
    
        
    
         let color1 = '#FFFFFF';
         let color2 = '#000000';
         for (let i = 0; i < points.length; i++) {
             if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                 if (i % 2 !== 0) polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
                 else polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color2));
             } else if (i + count < points.length && (i + 1) % count === 0) {
                 polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color1))
             }
             if ((i + 1 + count) % count === 0) {
                 let a = color1;
                 color1 = color2;
                 color2 = a;
             }
             polygons.push(new Polygon([19, 0, 380, 399], "#808000"));
         }
   

    

    return new Surface(points, edges, polygons);
};
