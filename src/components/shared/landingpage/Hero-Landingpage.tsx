import Image from "next/image";
import { Button } from "../../ui/button";

const HeroLandingPage = () => {
  return (
    <section
      id="HeroLandingPage"
      className="h-screen flex flex-col gap md:flex-row md:items-center landingpage"
    >
      <div className="md:order-2 w-full">
        <Image
          src={"/assets/vector.png"}
          alt="vector"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <p className="text-body-normal">Welcome</p>
          <h1 className="text-heading1-semibold">
            Monitoring Information System IoT Based Smart Pollution
          </h1>
          <p>
            A platform utilizing Internet of Things to provide real-time
            environmental pollution monitoring through sensors and a web
            application
          </p>
        </div>
        <Button className="w-max">Get Started</Button>
      </div>
    </section>
  );
};

export default HeroLandingPage;
