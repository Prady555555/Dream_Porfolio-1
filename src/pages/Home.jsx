import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import { useState } from "react";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Birds from "../models/Birds";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import { MdSwipeLeft } from "react-icons/md";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setPlatingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.4, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;
    // let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, -4];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [isLandScale, isLandPosition, isLandRotation] =
    adustIslandForScreenSize();
  const [PlaneScale, PlanePosition] = adustPlaneForScreenSize();
  return (
    <section className={`w-full h-screen relative `}>
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center ">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[2, 2, 2]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Birds />
          <Sky isRotating={isRotating} />
          <Island
            position={isLandPosition}
            scale={isLandScale}
            rotation={isLandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={PlanePosition}
            scale={PlaneScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-[90px] left-[10px]">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setPlatingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
