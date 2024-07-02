// https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
import { useLocation } from "../../stores/location";
class IPClass {
  listAPI = [
    {
      ndx: "ipify",
      url: "https://api.ipify.org?format=json",
    },
    {
      ndx: "db-ip",
      url: "https://api.db-ip.com/v2/free/self",
    },
    {
      ndx: "geoplugin",
      url: "http://www.geoplugin.net/json.gp",
    },
    { ndx: "ip-api", url: "http://ip-api.com/json" },
  ];
  location = undefined;
  detectedIP = undefined;
  detectedPos = { lat: 0, lng: 0 };
  // ipLocation = require("ip-location");

  constructor(api = "ip-api") {
    const useAPI = this.listAPI.find((item) => item.ndx === api);
    fetch(useAPI.url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        switch (api) {
          case "ipify":
            this.detectedIP = data.ip;
            break;
          case "db-ip":
            this.detectedIP = data.ipAddress;
            break;
          case "geoplugin":
            this.detectedIP = data.geoplugin_request;
            this.detectedPos = {
              lat: data.geoplugin_latitude,
              lng: data.geoplugin_longitude,
            };
            break;
          case "ip-api":
            this.detectedIP = data.query;
            this.detectedPos = { lat: data.lat, lng: data.lon };
            break;
          default:
            break;
        }
        this.location = useLocation();
        this.location.setIP(this.detectedIP);
        // this.detectLocationByIp();
        // console.log(this.location.IP);
      });
  }
  async detectLocationByIp() {
    if (this.detectedIP !== undefined) {
      const location = await this.ipLocation(this.detectedIP);
      console.log(location);
    }
  }
}
export default IPClass;
