import { createContext, useCallback, useState } from "react";

const SectionContext = createContext();

const SectionProvider = function ({ children }) {
  const [detailsRef, setDetailsRef] = useState();
  const [roadmapRef, setRoadmapRef] = useState();
  const [tracksRef, setTracksRef] = useState();
  const [speakersRef, setSpeakersRef] = useState();
  const [aboutRef, setAboutRef] = useState();

  const activateRoadmapRef = function (ref) {
    setRoadmapRef(ref);
  };

  const activateTracksRef = function (ref) {
    setTracksRef(ref);
  };

  const activateSpeakersRef = function (ref) {
    setSpeakersRef(ref);
  };

  const activateAboutRef = function (ref) {
    setAboutRef(ref);
  };
  const activateDetailsRef = function (ref) {
    setDetailsRef(ref);
  };

  const data = {
    roadmapRef,
    tracksRef,
    speakersRef,
    aboutRef,
    detailsRef,
    activateAboutRef,
    activateRoadmapRef,
    activateSpeakersRef,
    activateTracksRef,
    activateDetailsRef,
  };

  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };

export default SectionContext;
