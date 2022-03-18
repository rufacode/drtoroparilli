
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
import LoadingScreen, { ProgressBarStyle } from "./components/LoadingScreen";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <GlobalStyles />
      <ProgressBarStyle />
      <ScrollToTop />
      <GoogleAnalytics />
      {isInitialized ? <Router /> : <LoadingScreen />}
    </ThemeConfig>
  );
}


