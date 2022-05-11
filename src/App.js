// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// hooks
import useAuth from "./hooks/useAuth";
// mantenedorAdmin
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import LoadingScreen, {ProgressBarStyle} from "./components/LoadingScreen";
import {useEffect} from 'react';
import {detectLanguage} from './utils/detectLanguage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "./redux/store";
import {setNewLanguage} from "./redux/slices/languageSlice";


// ----------------------------------------------------------------------

export default function App() {
  const {isInitialized} = useAuth();
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.language)

  const initLanguage = async () => {
    if (localStorage.language) {
      await dispatch(setNewLanguage(localStorage.language))
      await console.log(localStorage.language)
      await console.log('se trajo el lenguaje!')
    } else {
      await changeLanguage(window.navigator.language || window.navigator.userLanguage);
    }
  }

  const changeLanguage = async (language) => {
    console.log(language);
    const result = await detectLanguage(language);
    console.log(result);
    await dispatch(setNewLanguage(result.data))
  }
  useEffect(() => {
    initLanguage();
  }, []);

  console.log(isLoading)

  return (
    <ThemeConfig>
      <GlobalStyles/>
      <ProgressBarStyle/>
      <ScrollToTop/>
      <GoogleAnalytics/>
      {isLoading && <LoadingScreen />}
      {isInitialized ? <Router/> : <LoadingScreen/>}
    </ThemeConfig>
  );
}


