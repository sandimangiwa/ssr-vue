import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// primevue
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Badge from "primevue/badge";
import Button from "primevue/button";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import Column from "primevue/column";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import ColumnGroup from "primevue/columngroup";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import Panel from "primevue/panel";
import Row from "primevue/row";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// import ToastService from "primevue/toastservice";
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
import router from "./router";
export function createApp() {
  const app = createSSRApp(App);
  app.use(router);
  const store = createPinia();
  app.use(store);

  // primevue
  app.use(PrimeVue, {
    inputStyle: "filled",
    locale: {
      monthNames: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agt",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
      dayNames: [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ],
      dayNamesShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      dayNamesMin: ["M", "S", "S", "R", "K", "J", "S"],
      noFilter: "Tanpa Filter",
    },
  });
  app.use(ToastService);
  app.use(ConfirmationService);
  app.component("AutoComplete", AutoComplete);
  app.component("Badge", Badge);
  app.component("Button", Button);
  app.component("Card", Card);
  app.component("Calendar", Calendar);
  app.component("Checkbox", Checkbox);
  app.component("Column", Column);
  app.component("ColumnGroup", ColumnGroup);
  app.component("ConfirmPopup", ConfirmPopup);
  app.component("DataTable", DataTable);
  app.component("Dropdown", Dropdown);
  app.component("Dialog", Dialog);
  app.component("InputNumber", InputNumber);
  app.component("InputSwitch", InputSwitch);
  app.component("InputText", InputText);
  app.component("Message", Message);
  app.component("MultiSelect", MultiSelect);
  app.component("Panel", Panel);
  app.component("Row", Row);
  app.component("TabView", TabView);
  app.component("TabPanel", TabPanel);
  app.component("Textarea", Textarea);
  app.component("Toast", Toast);

  return { app, store, router };
}
