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
    route: "/image/realtime",
    label: "AP Image Detector",
  },
  {
    imgUrl: "/assets/capture.svg",
    route: "/detailforecast/historyforecast",
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
    data: "roundtemperature",
    unit: "°C",
    forecast: "roundforecast_temperature",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=3`,
  },
  {
    title: "Humidity",
    data: "roundhumidity",
    unit: "%",
    forecast: "roundforecast_humidity",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=4`,
  },
  {
    title: "Air Quality",
    data: "roundispu",
    forecast: "roundforecast_ispu",
    link: `${CHART_URL}/d-solo/a26b7290-c3b2-407b-9407-ec6e10471eda/dash?orgId=1&refresh=1m&theme=light&panelId=5`,
  },
  {
    title: "Air Pollution Image",
    data: "image_status",
    forecast: "",
    link: "",
  },
];

export const informationMonitoringOverview = [
  {
    name_esp: "ESP All",
    link_esp: `${CHART_URL}/d/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=5`,
    ],
  },
  {
    name_esp: "ESP Biru",
    link_esp: `${CHART_URL}/d/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=5`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=7`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/d947ab1d-2142-493e-a531-87895c6aed82/esp-biru?orgId=1&refresh=1m&theme=light&panelId=8`,
    ],
  },
  {
    name_esp: "ESP Coklat",
    link_esp: `${CHART_URL}/d/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=5`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=7`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/bc7ec469-ad9d-40ea-97a3-f74cd8783c6f/esp-coklat?orgId=1&refresh=1m&theme=light&panelId=8`,
    ],
  },
  {
    name_esp: "ESP Hijau",
    link_esp: `${CHART_URL}/d/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=5`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=7`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/f45d5906-893c-4628-9920-e3cd4b8d0b94/esp-hijau?orgId=1&refresh=1m&theme=light&panelId=8`,
    ],
  },
  {
    name_esp: "ESP Merah",
    link_esp: `${CHART_URL}/d/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=5`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=7`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/f9ccf009-8ddd-4d0c-a951-e08949d548e2/esp-merah?orgId=1&refresh=1m&theme=light&panelId=8`,
    ],
  },
  {
    name_esp: "ESP Orange",
    link_esp: `${CHART_URL}/d/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=5`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=7`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/db3396c1-61ee-4825-a89a-6bb8c9b672ef/esp-orange?orgId=1&refresh=1m&theme=light&panelId=8`,
    ],
  },
];

export const informationMonitoringDetailForecast = [
  {
    name_esp: "Average",
    link_esp: `${CHART_URL}/d/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=1`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=2`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=6`,
      `${CHART_URL}/d-solo/ed6c5836-baba-4024-aef9-5fa6a1e019df/forecast?orgId=1&refresh=1m&theme=light&panelId=5`,
    ],
  },
  {
    name_esp: "ESP All",
    link_esp: `${CHART_URL}/d/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m`,
    link_panel: [
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=10`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=9`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=4`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=3`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=11`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=12`,
      `${CHART_URL}/d-solo/cfb3de2e-f8df-4bd2-801b-ece99c9688f2/esp-all?orgId=1&refresh=1m&theme=light&panelId=5`,
    ],
  },
];

export const TableHeaderUser = [
  "Username",
  "Name",
  "Email",
  "Image",
  "Role",
  "Action",
];
