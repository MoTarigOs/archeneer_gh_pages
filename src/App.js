import { useEffect, useState } from 'react';
import Footer from './AppSections/Footer';
import Header from './AppSections/Header';
import Hero from './AppSections/Hero';
import Welcom from './AppSections/Welcom';
import LoadingScreen from './components/LoadingScreen';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [exploreBtn, setExploreBtn] = useState(false);
  const [welcomVH, setWelcomVH] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3900);

    setWindowScrollY(window.scrollY);
    window.addEventListener("scroll", () => {setWindowScrollY(window.scrollY)});
    return () => {
      window.removeEventListener("scroll", () => {setWindowScrollY(window.scrollY)})
      clearTimeout();
    }
  }, [])

  useEffect(() => {
    if(scrollToTop === true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    setScrollToTop(false);
  }, [scrollToTop])

  useEffect(() => {
    if(exploreBtn === true){
      window.scrollTo({
        top: welcomVH - 32,
        behavior: 'smooth'
      })
      setExploreBtn(false);
    }
  }, [exploreBtn])


  return (
    <div className="App">

      {isLoading === false &&    

        <>

          <Header setScrollToTop={setScrollToTop}/>

          <Welcom windowScrollY={windowScrollY} setWelcomVH={setWelcomVH} setExploreBtn={setExploreBtn} />

          <Hero windowScrollY={windowScrollY}/>

          <Footer /> 

        </>
        
      }

      {isLoading === true && 

        <>
          
          <LoadingScreen />

        </>
        
      }

    </div>
  );

};

export default App;
