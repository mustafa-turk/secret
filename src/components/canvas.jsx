import React, { useRef, useEffect } from "react";

const CircleAnimation = () => {
  const canvasRef = useRef(null);
  const circlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationRef = useRef(null); // Store the animation frame ID here
  const resizeTimeoutRef = useRef(null); // Store timeout ID for debouncing
  const maxRadius = window.innerWidth / 6;
  const circleCount = Math.floor(window.innerWidth / 9);

  const Color = {
    vector: ["#3cf4fd", "#e1ee6f", "#be79df"],
    getRandom: () => {
      return Color.vector[Math.floor(Math.random() * Color.vector.length)];
    },
  };

  const randomNumber = (max = 1, min = 0, forbidden = []) => {
    let res;
    do {
      res = Math.floor(min + Math.random() * (max - min));
    } while (forbidden.some((num) => num === res));
    return res;
  };

  class Circle {
    constructor(
      r_min = randomNumber(maxRadius * 0.9, 20),
      x = randomNumber(canvasRef.current.width, r_min),
      y = randomNumber(canvasRef.current.height, r_min),
      dx = randomNumber(1, -2, [0]),
      dy = randomNumber(1, -1, [0]),
      color = Color.getRandom()
    ) {
      this.r = r_min;
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.r_min = r_min;
      this.draw();
    }

    side() {
      return {
        right: this.x + this.r,
        left: this.x - this.r,
        bottom: this.y + this.r,
        top: this.y - this.r,
      };
    }

    draw() {
      const ctx = canvasRef.current.getContext("2d");
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    run() {
      const canvas = canvasRef.current;

      // detect collision
      if (this.side().right > canvas.width || this.side().left < 0)
        this.dx *= -1;
      if (this.side().bottom > canvas.height || this.side().top < 0)
        this.dy *= -1;

      // increase size
      if (
        mouseRef.current.x != null &&
        mouseRef.current.y != null &&
        this.side().left - mouseRef.current.x < 50 &&
        mouseRef.current.x - this.side().right < 50 &&
        this.side().top - mouseRef.current.y < 50 &&
        mouseRef.current.y - this.side().bottom < 50 &&
        this.r < maxRadius
      ) {
        this.r += 3;
      } else if (this.r > this.r_min) {
        this.r -= 1;
      }

      // change position
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }

  const initCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    // Clear the existing circles array
    circlesRef.current = [];

    for (let i = 0; i < circleCount; i++) {
      circlesRef.current.push(new Circle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circlesRef.current.forEach((circle) => circle.run());

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationRef.current = requestAnimationFrame(animate);
  };

  // Debounce the resize event
  const handleResize = () => {
    // Clear the previous timeout
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    // Set a new timeout to run after the user has stopped resizing
    resizeTimeoutRef.current = setTimeout(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cancel the previous animation frame before starting a new one
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      initCanvas();
    }, 250); // Adjust the delay as needed (250ms here)
  };

  const handleMouseMove = (e) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  };

  useEffect(() => {
    initCanvas();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners and cancel the animation frame when the component unmounts
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id='canvas'></canvas>;
};

export default CircleAnimation;
