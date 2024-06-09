Surfaces.prototype.EllipticalCylinder = (r = 2, count = 8, color = '#888888', x = 0, y = 0, z = 0) => {
    const points = [];
   const edges = [];
   const polygons = [];
   // Points
   for (let i = -count;i <= count; i++) {
       const T = ((2 * Math.PI) / count) * i;
       for (let j = 0; j < count; j++) {
           const p = ((2 * Math.PI) / count) * j;
           points.push(new Point(r * T * Math.cos(p) + x, r * T + y, Math.sin(p) * r * T + z));
       }
   }

   // Edges
   for (let i = 0; i < points.length; i++) {
       if (i + 1 < points.length && (i + 1) % count !== 0) {
           edges.push(new Edge(i, i + 1));
       } else if ((i + 1) % count === 0) {
           edges.push(new Edge(i, i + 1 - count));
       }
       if (i < points.length - count) {
           edges.push(new Edge(i, i + count));
       }
   }


   // Функция для получения цвета в формате HEX из RGB
function rgbToHex(r, g, b) {
   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Функция для интерполяции между двумя значениями
function interpolate(start, end, factor) {
   return start + factor * (end - start);
}

// Начальные цвета
let color1 = { r: 255, g: 0, b: 0 }; // Красный
let color2 = { r: 0, g: 0, b: 255 }; // Синий

// Общее количество шагов
let totalSteps = points.length;

for (let i = 0; i < points.length; i++) {
   // Определяем текущий фактор интерполяции от 0 до 1
   let factor = i / totalSteps;
   
   // Вычисляем текущие значения RGB путем интерполяции
   let r = Math.round(interpolate(color1.r, color2.r, factor));
   let g = Math.round(interpolate(color1.g, color2.g, factor));
   let b = Math.round(interpolate(color1.b, color2.b, factor));
   
   // Получаем текущий цвет в формате HEX
   let color = rgbToHex(r, g, b);
   
   if (i + 1 + count < points.length && (i + 1) % count !== 0) {
       polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
   } else if (i + count < points.length && (i + 1) % count === 0) {
       polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
   }
}




    return new Surface(points, edges, polygons);
};