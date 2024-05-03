(async () => {
  await loadPolygonPath(tsParticles)

  await tsParticles.load({
    particles: {
      color: {
        value: "#2196F3",
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000,
          },
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy",
        },
        path: {
          clamp: true,
          enable: true,
          delay: {
            value: 0,
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 4,
            turnSteps: 30,
            angle: 0,
          },
        },
        random: true,
        speed: 15,
        straight: true,
        trail: {
          fillColor: "#fff",
          length: 10,
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "square",
      },
      size: {
        value: 4,
      },
    },
    background: {
      color: "#fff",
    },
    fullScreen: {
      zIndex: -1,
    },
    emitters: [
      {
        direction: "none",
        rate: {
          quantity: 10,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
      },
      {
        direction: "none",
        rate: {
          quantity: 10,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 100,
          y: 100,
        },
      },
      {
        direction: "none",
        rate: {
          quantity: 10,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 0,
          y: 100,
        },
      },
      {
        direction: "none",
        rate: {
          quantity: 10,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 100,
          y: 0,
        },
      },
    ],
  })
})()