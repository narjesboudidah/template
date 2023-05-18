import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Forms from "@/layouts/Forms.vue";
import Profiles from "@/layouts/Profiles.vue";
import Plan from "@/layouts/Plan.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Role from "@/views/admin/Role.vue";
import SocieteMaintenance from "@/views/admin/SocieteMaintenance.vue";
import Permission from "@/views/admin/Permission.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
import GestionAdmins from "@/views/admin/GestionAdmins.vue";
import ListeDemande from "@/views/admin/ListeDemande.vue";
import Competition from "@/views/admin/Competition.vue";
import Matchs from "@/views/admin/Matchs.vue";
import Events from "@/views/admin/Events.vue";
import Maintenance from "@/views/admin/Maintenance.vue";
import Equipe from "@/views/admin/Equipe.vue";
import Stades from "@/views/admin/Stades.vue";

//***Historiques***/
import Historique from "@/views/admin/Historiques/Historique.vue";
import HistoriqueDemande from "@/views/admin/Historiques/HistoriqueDemande.vue";

//***Forms***/
import MaintenanceForm from "@/views/admin/Forms/MaintenanceForm.vue";
import ReservationForm from "@/views/admin/Forms/ReservationForm.vue";
import AdminForm from "@/views/admin/Forms/AdminForm.vue";
import CompetitionForm from "@/views/admin/Forms/CompetitionForm.vue";
import EquipeForm from "@/views/admin/Forms/EquipeForm.vue";
import SteForm from "@/views/admin/Forms/SteForm.vue";
import StadeForm from "@/views/admin/Forms/StadeForm.vue";
import MatchForm from "@/views/admin/Forms/MatchForm.vue";
import EventForm from "@/views/admin/Forms/EventForm.vue";
import PermissionForm from "@/views/admin/Forms/PermissionForm.vue";
import RoleForm from "@/views/admin/Forms/RoleForm.vue";

//*** Profiles ***/
import Profile from "@/views/admin/Profiles/Profile.vue";
import StadeProfile from "@/views/admin/Profiles/StadeProfile.vue";
import EquipeProfile from "@/views/admin/Profiles/EquipeProfile.vue";
import SteProfile from "@/views/admin/Profiles/SteProfile.vue";


import Planning from "@/views/admin/Planning.vue";

//******Login ******/
import Login from "@/views/Login.vue";

// routes
const routes = [
  {
    path: "/",
    redirect: "/admin/dashboard",
    component: Dashboard,
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/settings/role",
        component: Role,
      },
      {
        path: "/admin/settings/permission",
        component: Permission,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/competition",
        component: Competition,
      },

      {
        path: "/admin/competition/match",
        component: Matchs,
      },
      {
        path: "/admin/listeDemande",
        component: ListeDemande,
      },
      {
        path: "/admin/users",
        component: GestionAdmins,
      },

      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/stades",
        component: Stades,
      },
      {
        path: "/admin/equipe",
        component: Equipe,
      },
      {
        path: "/admin/ste",
        component: SocieteMaintenance,
      },
      {
        path: "/admin/events",
        component: Events,
      },
      {
        path: "/admin/maintenance",
        component: Maintenance,
      },
     /* {
        path: "/admin/planning",
        component: Planning,
      },*/
      {
        path: "/admin/profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/form",
    redirect: "/admin/dashboard",
    component: Forms,
    children: [
      {
        path: "/form/AjoutAdmin",
        component: AdminForm,
      },
      {
        path: "/form/AjoutCompetition",
        component: CompetitionForm,
      },
      {
        path: "/form/AjoutEquipe",
        component: EquipeForm
      },
      {
        path: "/form/AjoutSte",
        component: SteForm
      },
      {
        path: "/form/AjoutStade",
        component: StadeForm
      },
      {
        path: "/form/AjoutMatch",
        component: MatchForm
      },
      {
        path: "/form/AjoutEvent",
        component: EventForm
      },
      {
        path: "/form/AjoutMaintenance",
        component: MaintenanceForm
      },

      {
        path: "/form/AjoutRole",
        component: RoleForm,
      },
      {
        path: "/form/AjoutPermission",
        component: PermissionForm,
      },
      {
        path: "/form/FaireReservation",
        component: ReservationForm,
      },
      {
        path: "/form/HistoriqueDemande",
        component: HistoriqueDemande,
      },
     
      {
        path: "/form/historique",
        component: Historique,
      },

    ]
  },

  {
    path: "/profile",
    redirect: "/admin/dashboard",
    component: Profiles,
    children: [
      {
        path: "/profile/stade/:id",
        component: StadeProfile,
      },
      {
        path: "/profile/EquipeProfile/:id",
        component: EquipeProfile,
      },
      {
        path: "/profile/SteProfile/:id",
        component: SteProfile,
      },
      {
        path: "/profile/admin",
        component: Profile,
      },
    ]
  },

  {
    path: "/plan",
    redirect: "/plan/planning",
    component: Plan,
    children: [
      {
        path: "/plan/planning",
        component: Planning,
      }]
    },

  //*** Logout***/
  {
    path: "/login",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];


const app = createApp(App);
app.use(VueSweetalert2);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).mount("#app");
