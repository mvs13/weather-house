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
  ];
  location = undefined;
  detectedIP = undefined;
  // ipLocation = require("ip-location");

  constructor(api = "db-ip") {
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
