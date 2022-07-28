window.renderer = (function () {
  var renderer = new Renderer(document.getElementById('world'), document.getElementById('path'));
  renderer.drawPath = true;
  var ox = Math.ceil(Math.random()*500);
  var oy = Math.ceil(Math.random()*500);

  renderer.addBody({
    x: ox + Math.ceil(Math.random()*300),
    y: oy + Math.ceil(Math.random()*300),
    mass: 5e6,
    vx: Math.ceil(Math.random()*200)-100,
    vy: Math.ceil(Math.random()*200)-100
  });

  renderer.addBody({
    x: ox + Math.ceil(Math.random()*300),
    y: oy + Math.ceil(Math.random()*300),
    mass: 5e6,
    vx: Math.ceil(Math.random()*200)-100,
    vy: Math.ceil(Math.random()*200)-100
  });
  
  renderer.addBody({
    x: ox + Math.ceil(Math.random()*300),
    y: oy + Math.ceil(Math.random()*300),
    mass: 5e6,
    vx: Math.ceil(Math.random()*200)-100,
    vy: Math.ceil(Math.random()*200)-100
  });

  
  var G = 1;
  
  var bodies = renderer.bodies;
  var forces = getForces(bodies, G);
  console.log(forces);
  
  renderer.beforeRedraw = function (dt) {
    //dt /= 1000;
    dt = 20 / 1000;

    for (var i = 0, len = bodies.length; i < len; i++) {
      bodies[i].x += bodies[i].vx * dt + forces[i].x / (2 * bodies[i].mass) * dt * dt;
      bodies[i].y += bodies[i].vy * dt + forces[i].y / (2 * bodies[i].mass) * dt * dt;
    }

    var nextForces = getForces(bodies, G);

    for (var i = 0, len = bodies.length; i < len; i++) {
      bodies[i].vx += (nextForces[i].x + forces[i].x) / (2 * bodies[i].mass) * dt;
      bodies[i].vy += (nextForces[i].y + forces[i].y) / (2 * bodies[i].mass) * dt; 
    }
    forces = nextForces;

  };

  return renderer;
  
})();