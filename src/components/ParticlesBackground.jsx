import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" }, // Connections follow mouse
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 200, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#6366f1" }, // Tailwind Indigo-500
      number: {
        value: 200, 
        density: {
          enable: true,
          area: 800, 
        },
      },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10" // Positions it behind the content
        options={particlesConfig}
      />
    );
  }

  return null;
};

export default ParticlesBackground;