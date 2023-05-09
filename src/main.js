import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Forms from "@/layouts/Forms.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Role from "@/views/admin/Role.vue";
import Permission from "@/views/admin/Permission.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
import GestionAdmins from "@/views/admin/GestionAdmins.vue";
import ListeDemande from "@/views/admin/ListeDemande.vue";
import Competition from "@/views/admin/Competition.vue";
import Matchs from "@/views/admin/Matchs.vue";
import Stades from "@/views/admin/Stades.vue";
import Stade from "@/views/Stade.vue";
import Events from "@/views/admin/Events.vue";
import Maintenance from "@/views/admin/Maintenance.vue";
import Planning from "@/views/admin/Planning.vue";
import Equipe from "@/views/admin/Equipe.vue";
import AdminForm from "@/views/admin/AdminForm.vue";
import CompetitionForm from "@/views/admin/CompetitionForm.vue";
import EquipeForm from "@/views/admin/EquipeForm.vue";
import SteForm from "@/views/admin/SteForm.vue";
import StadeForm from "@/views/admin/StadeForm.vue";
import MatchForm from "@/views/admin/MatchForm.vue";
import EventForm from "@/views/admin/EventForm.vue";
import PermissionForm from "@/views/admin/PermissionForm.vue";
import RoleForm from "@/views/admin/RoleForm.vue";
import Historique from "@/views/admin/Historique.vue";
import HistoriqueDemande from "@/views/admin/HistoriqueDemande.vue";
import HistoriqueN from "@/views/admin/HistoriqueN.vue";
import MaintenanceForm from "@/views/admin/MaintenanceForm.vue";
import SocieteMaintenance from "@/views/admin/SocieteMaintenance.vue";
import ReservationForm from "@/views/admin/ReservationForm.vue";

import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

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
        component:Matchs,
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
        component:Equipe,
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
      {
        path: "/admin/planning",
        component: Planning,
      },
    ],
  },
  {path: "/form",
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
        path: "/form/HistoriqueDemande",
        component: HistoriqueDemande,
      },
      {
        path: "/form/HistoriqueN",
        component: HistoriqueN,
      },
      {
        path: "/form/historique",
        component: Historique,
      },
      {
        path: "/form/Role",
        component: RoleForm,
      },
      {
        path: "/form/Permission",
        component: PermissionForm,
      },
      {
        path: "/form/stade/:id",
        component: Stade,
      },
      {
        path: "/form/FaireReservation",
        component: ReservationForm,
      },
    
    ]
    },
 
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/login",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
