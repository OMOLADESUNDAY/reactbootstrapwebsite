import React, { useRef, useEffect } from 'react';
import './isotopebackground.css'
const IsotopesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const isotopes = [];
    const numberOfIsotopes = 50;
    const speed = 2;

    // Initialize isotopes
    for (let i = 0; i < numberOfIsotopes; i++) {
      isotopes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
      });
    }

    // Function to draw isotopes
    const drawIsotope = (isotope) => {
      ctx.beginPath();
      ctx.arc(isotope.x, isotope.y, isotope.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = 'rgba(173, 216, 230, 0.8)';
      ctx.fill();
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      isotopes.forEach((isotope) => {
        isotope.x += isotope.dx;
        isotope.y += isotope.dy;

        // Boundary detection
        if (isotope.x + isotope.radius > canvas.width || isotope.x - isotope.radius < 0) {
          isotope.dx = -isotope.dx;
        }
        if (isotope.y + isotope.radius > canvas.height || isotope.y - isotope.radius < 0) {
          isotope.dy = -isotope.dy;
        }

        drawIsotope(isotope);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className=''>
      <canvas className='canvas'
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    />
    </div>
    
  );
};

export default IsotopesBackground;