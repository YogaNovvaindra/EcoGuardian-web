export const sidebarLinks = [
  {
    imgUrl: "/assets/dashboard.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgUrl: "/assets/map.svg",
    route: "/map",
    label: "Map Monitoring IOT",
  },
  {
    imgUrl: "/assets/overview.svg",
    route: "/overview",
    label: "Detail Overview",
  },
  // {
  //   imgUrl: "/assets/comment.svg",
  //   route: "/feedback/questions",
  //   label: "Anonymus Feedback",
  // },
  {
    imgUrl: "/assets/capture.svg",
    route: "/image",
    label: "AP Image Detector",
  },
  {
    imgUrl: "/assets/user.svg",
    route: "/user",
    label: "User",
  },
];

export const listNavigationBar = [
  {
    link: "HeroLandingPage",
    label: "Home",
  },
  {
    link: "MonitoringLandingPage",
    label: "Moitoring",
  },
  {
    link: "AboutLandingPage",
    label: "About Website",
  },
  {
    link: "CustomerServicesLandingPage",
    label: "Customer Services",
  },
];

export const informationMonitoringDashboard = [
  {
    title: "Temperature",
    show: ["temperature", "co2", "mq2", "humidity", "pm25"],
  },
  {
    title: "Humidity",
    show: ["humidity", "co2"],
  },
  {
    title: "Air Pollution Image",
    show: ["mq2", "temperature"],
  },
  {
    title: "Air Quality",
    show: ["mq2"],
  },
];

export const informationMonitoringOverview = [
  {
    title: "Temperature",
    description: "Deskripsi Temperature",
    show: ["temperature", "co2", "mq2", "humidity", "pm25"],
  },
  {
    title: "Humidity",
    description: "Deskripsi Humidity",
    show: ["humidity", "co2"],
  },
  {
    title: "Air Pollution Image",
    description: "Deskripsi Air Pollution Image",
    show: ["mq2", "temperature"],
  },
  {
    title: "Air Quality",
    description: "Deskripsi Air Quality",
    show: ["mq2"],
  },
];

export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const selectItemFeedbackQuestions = [
  "Agimul Karim",
  "Ikhwanul Karim",
  "Zeinul Karim",
  "Irsad Maulana",
  "Alvin Yanuar",
  "Ammar TV",
];
