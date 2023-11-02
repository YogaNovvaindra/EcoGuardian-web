import HeroLandingPage from "@/components/shared/Hero-Landingpage";
import MonitoringLandingPage from "@/components/shared/Monitoring-Landingpage";
import AboutLandingPage from "@/components/shared/About-Landingpage";
import CustomerServicesLandingPage from "@/components/shared/Customerservices-Landingpage";
import FooterLandingPage from "@/components/shared/Footer-Landingpage";
import NavbarLandingPage from "@/components/shared/Navbar-Landingpage";

export default function Home() {
  return (
    <>
      <NavbarLandingPage />
      <HeroLandingPage />
      <MonitoringLandingPage />
      <AboutLandingPage />
      <CustomerServicesLandingPage />
      <FooterLandingPage />
    </>
  );
}
