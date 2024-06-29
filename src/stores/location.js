import { defineStore } from "pinia";

export const useLocation = defineStore("location", {
  state: () => {
    return {
      IP: "",
      detectedByIP: undefined,
    };
  },
  getters: {},
  actions: {
    setIP(ip) {
      this.IP = ip;
    },
    setDetectedByIP(location) {
      this.detectedByIP = location;
    },
  },
});
