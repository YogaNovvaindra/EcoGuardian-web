import HeroLandingPage from "@/components/shared/landingpage/Hero-Landingpage";
import MonitoringLandingPage from "@/components/shared/landingpage/Monitoring-Landingpage";
import AboutLandingPage from "@/components/shared/landingpage/About-Landingpage";
import CustomerServicesLandingPage from "@/components/shared/landingpage/Customerservices-Landingpage";
import FooterLandingPage from "@/components/shared/landingpage/Footer-Landingpage";
import NavbarLandingPage from "@/components/shared/landingpage/Navbar-Landingpage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <>
      <NavbarLandingPage />
      <HeroLandingPage />
      {/* <MonitoringLandingPage /> */}
      <AboutLandingPage />
      <CustomerServicesLandingPage />
      <FooterLandingPage />
    </>
  );
}
