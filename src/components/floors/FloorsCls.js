import WindowsFloor from "../windows/WindowsFloor.vue";
import DoorsFloor from "../doors/DoorsFloor.vue";

class FloorsCls {
  coponets = [WindowsFloor, DoorsFloor];
  list = [
    {
      id: 0,
      title: "Этаж окон",
      component: "WindowsFloor",
      params: {
        nWindows: 3,
        nCols: 3,
      },
    },
    {
      id: 1,
      title: "Этаж дверей",
      component: "DoorsFloor",
      params: { nDoors: 3 },
    },
  ];
}
export default new FloorsCls();
