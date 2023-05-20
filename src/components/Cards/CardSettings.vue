<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Paramètre</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div>
        <!-- Profile -->
        <router-link to="/profile/admin" v-slot="{ href, navigate, isActive }">
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
            settings_account_box
            </span>
            Modifier Profile
          </a>
        </router-link>

        <router-link v-if="userRole === 'Admin Federation'"
          to="/admin/settings/role"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
              person_add
            </span>
            Paramètre de Rôles
          </a>
        </router-link>

        <router-link v-if="userRole === 'Admin Federation'"
          to="/admin/settings/permission"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
              tune
            </span>
            Paramètre des Permissions
          </a>
        </router-link>

        <!-- Notification -->
        <router-link v-if="userRole === 'Admin Federation'" to="/form/HistoriqueN" v-slot="{ href, navigate, isActive }">
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
              history_toggle_off
            </span>
            Historique des Notifications</a
          >
        </router-link>

        <router-link v-if="userRole === 'Admin Federation'"
          to="/form/HistoriqueDemande"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
              data_info_alert
            </span>
            Historique des Demandes</a
          >
        </router-link>
        <router-link v-if="userRole === 'Admin Federation'"
          to="/form/historique"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
              history
            </span>
            Historique
          </a>
        </router-link>
        <router-link
          to="/login"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            style="font-family: inherit, serif; font-size: 15px"
            :href="href"
            @click="navigate"
            class="text-xs py-3 block"
            :class="[
              isActive
                ? 'box-sidebar hover:text-red-600 '
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <span
              class="material-symbols-outlined"
              @click="navigate"
              :class="[isActive ? 'icon-sidebar-click ' : 'icon-sidebar']"
            >
            logout
          </span>
          Logout
        </a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      userRole: '',
    };
  },
  methods: {
    async getUser() {
      let token = localStorage.getItem("userToken");
      await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      }).then((result) => {
        this.userRole = result.data.role;

      }).catch((err) => {
          console.log(err);
      })
    }
  },
  mounted() {
   this.getUser();
   console.log(this.userRole);
  },
};

</script>