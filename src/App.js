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
import {setNewLanguage, getAllData} from "./redux/slices/languageSlice";


// ----------------------------------------------------------------------

export default function App() {
  const {isInitialized} = useAuth();
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.language)

  const initLanguage = async () => {
    if (localStorage.language) {
      dispatch(setNewLanguage(localStorage.language))
    } else {
      await changeLanguage(window.navigator.language || window.navigator.userLanguage);
    }
    dispatch(getAllData())
    // this.getAllData(this.$store.state.language)
  }

  const changeLanguage = async (language) => {
    console.log(language);
    const result = await detectLanguage(language);
    console.log(result);
    dispatch(setNewLanguage(result.data))
    // this.$store.commit("changeLanguage", result.data);
  }

  useEffect(() => {
    initLanguage();
  }, []);


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


