import React, { useCallback } from "react";
import Particles from "react-particles";
import { useGlobalContext } from "../Context/Context";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import splashImg from "../assets/splatter-svgrepo-com.svg";
// import { Main } from "tsparticles-engine";

function SearchForm() {
  //Particles

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section className="form-section">
      <div className="title-center">
        <img src={splashImg} className="title-img" />
        <h1 className="title">Splash Images</h1>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="luxury"
          id=""
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <Particles
        id="tsparticles"
        options={{
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#645cff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              // limit: 150,
              value: 30,
            },

            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 8 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </section>
  );
}

export default SearchForm;
