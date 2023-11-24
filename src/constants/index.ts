import { CHART_URL } from "@/utils/url";

export const sidebarLinks = [
  {
    imgUrl: "/assets/dashboard.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgUrl: "/assets/map.svg",
    route: "/map/location",
    label: "Map Monitoring IOT",
  },
  {
    imgUrl: "/assets/overview.svg",
    route: "/overview",
    label: "History",
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
    imgUrl: "/assets/capture.svg",
    route: "/image",
    label: "Detail Forecast",
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
    data: "temperature",
    unit: "°C",
    forecast: "forecast_temperature",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=3`,
  },
  {
    title: "Humidity",
    data: "humidity",
    unit: "%",
    forecast: "forecast_humidity",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=4`,
  },
  {
    title: "Air Pollution Image",
    data: "",
    forecast: "",
    link: "",
  },
  {
    title: "Air Quality",
    data: "ispu",
    forecast: "forecast_ispu",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=5`,
  },
];

export const informationMonitoringOverview = [
  "&theme=light&panelId=1",
  "&theme=light&panelId=2",
  "&theme=light&panelId=3",
  "&theme=light&panelId=4",
  "&theme=light&panelId=5",
  "&theme=light&panelId=6",
];

export const selectItemFeedbackQuestions = [
  "Agimul Karim",
  "Ikhwanul Karim",
  "Zeinul Karim",
  "Irsad Maulana",
  "Alvin Yanuar",
  "Ammar TV",
];

export const TableHeaderUser = [
  "Username",
  "Name",
  "Email",
  "Image",
  "Role",
  "Action",
];
