import "../node_modules/nprogress/nprogress.css";
import "./assets/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";

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
import Menu from "primevue/menu";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import { createApp } from "./main";

const { app } = createApp();
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
    dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
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
app.component("Menu", Menu);
app.component("Message", Message);
app.component("MultiSelect", MultiSelect);
app.component("Panel", Panel);
app.component("Row", Row);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Textarea", Textarea);
app.component("Toast", Toast);

app.mount("#app");
