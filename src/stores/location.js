import { defineStore } from "pinia";

export const useLocation = defineStore("location", {
  state: () => {
    return {
      IP: "",
      position: { lat: 0, lng: 0 },
      positionDefault: { lat: 55.76, lng: 37.64 }, // Moscow
      detectedByIP: undefined,
      zoom: 10,
    };
  },
  getters: {
    geo(state) {
      if (state.position.lat !== 0 && state.position.lng !== 0) {
        return state.position;
      } else {
        return state.positionDefault;
      }
    },
  },
  actions: {
    setIP(ip) {
      this.IP = ip;
    },
    setDetectedByIP(location) {
      this.detectedByIP = location;
    },
    setPosition(position) {
      if (position.lat !== 0 && position.lng !== 0) {
        this.position = position;
      } else {
        this.position = this.positionDefault;
      }
    },
  },
});
