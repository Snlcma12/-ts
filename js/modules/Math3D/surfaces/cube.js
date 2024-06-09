Surfaces.prototype.cube = (point = new Point(0, 0, 0), size = 5) => {
  const x = point.x;
  const y = point.y;
  const z = point.z;
  size3 = size / 3;


    const points = [
        

        new Point(x+4,y+13,z+13),
        new Point(x+4,y+13,z+16),
     
        

 
        new Point(x+5,y+11,z+11),
      
        new Point(x+9,y+13,z+13),
    
        new Point(x+8,y+11,z+11),
        
        new Point(x+4,y+8,z+8),

        new Point(x+2,y+8,z+8),

        new Point(x+9,y+8,z+8),

        new Point(x+11,y+8,z+8),

        new Point(x+2,y+5,z+5),
 
        new Point(x+9,y+5,z+5),
 
        new Point(x+4,y+5,z+5),

        new Point(x+11,y+5,z+5),
  
        new Point(x+4,y+6,z+6),
  
        new Point(x+9,y+6,z+6),

        new Point(x+5, y+11, z+14),
        new Point(x+9, y+13, z+16),
        new Point(x+8, y+11, z+14),
        new Point(x+4, y+8, z+11),
        new Point(x+2, y+8, z+11),
        new Point(x+9, y+8, z+11),
        new Point(x+11, y+8, z+11),
        new Point(x+2, y+5, z+8),
        new Point(x+9, y+5, z+8),
        new Point(x+4, y+5, z+8),
        new Point(x+11, y+5, z+8),
        new Point(x+4, y+6, z+9),
        new Point(x+9, y+6, z+9),
   
        
    
        
        
    ]
    
   const edges = [
        //Внешние грани
        new Edge(0,1),
        new Edge(0,3),
        new Edge(0,6),
        new Edge(6,9),
        new Edge(9,11),
        new Edge(13,11),
        new Edge(15,17),
        new Edge(3,8),
        new Edge(8,12),
        new Edge(10,12),
        new Edge(1,16),
        new Edge(3,16),
        new Edge(10,14),
        new Edge(13,14),
        new Edge(4,7),
        new Edge(2,5),
        new Edge(5,7),
        new Edge(4,17),
        new Edge(2,15),
        new Edge(2,4),
        new Edge(1,19),
        new Edge(16,21),
        new Edge(21,25),
        new Edge(23,25),
        new Edge(24,26),
        new Edge(22,24),
        new Edge(19,22),
        new Edge(23,27),
        new Edge(26,27),
        new Edge(17,20),
        new Edge(15,18),
        new Edge(18,20),

        new Edge(2, 15),
        new Edge(3, 16),
        new Edge(4, 17),
        new Edge(5, 18),
        new Edge(6, 19),
        new Edge(7, 20),
        new Edge(8, 21),
        new Edge(9, 22),
        new Edge(10, 23),
        new Edge(11, 24),
        new Edge(12, 25),
        new Edge(13, 26),
        new Edge(14, 27)




        //Внутрение грани
        /*
        new Edge(22, 16),
        new Edge(23, 17),
        new Edge(8, 10),
        new Edge(9, 11),
        new Edge(10, 12),
        new Edge(11, 13),
        new Edge(25, 31),
        new Edge(24, 30),
        new Edge(26, 28),
        new Edge(27, 29),
        new Edge(8, 14),
        new Edge(9, 15),
        new Edge(18, 20),
        new Edge(19, 21),
        new Edge(12, 14),
        new Edge(13, 15),
        new Edge(20, 22),
        new Edge(21, 23),
        new Edge(25, 27),
        new Edge(24, 26),
        new Edge(16, 18),
        new Edge(17, 19),
        new Edge(28, 30),
        new Edge(29, 31),
       */
    ]

    const polygons = [
      new Polygon([2, 3, 4, 5, 6, 9, 11, 13, 10, 8, 7, 6]),
    
      // Задняя поверхность
      new Polygon([15, 16, 17, 18, 19, 22, 24, 26, 23, 21, 20, 19]),
      
      // Боковые поверхности, соединяющие переднюю и заднюю поверхности
      new Polygon([2, 15, 16, 3]),
      new Polygon([3, 16, 17, 4]),
      new Polygon([4, 17, 18, 5]),
      new Polygon([5, 18, 19, 6]),
      new Polygon([6, 19, 22, 9]),
      new Polygon([9, 22, 24, 11]),
      new Polygon([11, 24, 26, 13]),
      new Polygon([13, 26, 23, 10]),
      new Polygon([10, 23, 21, 8]),
      new Polygon([8, 21, 20, 7]),
      new Polygon([7, 20, 19, 6])
 
    ]
  return new Surface(points, edges, polygons);
}