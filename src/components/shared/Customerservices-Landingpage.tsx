const CustomerServicesLandingPage = () => {
  return (
    <div
      id="CustomerServicesLandingPage"
      className="h-screen flex flex-col gap-4 items-center landingpage"
    >
      <h1 className="text-heading3-bold">Customer Services</h1>
      <p>
        If you encounter any issues while using the website, you can contact the
        following Customer Service representatives:
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 border-x-2">
          <p>Website</p>
          <p>www.ecoguardian.com</p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 border-x-2">
          <p>Telephone</p>
          <div>
            <p>+00 000-0000-0000</p>
            <p>+00 000-0000-0000</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 border-x-2">
          <p>Website</p>
          <p>www.ecoguardian.com</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicesLandingPage;
