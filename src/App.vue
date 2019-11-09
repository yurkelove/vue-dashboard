<template>
  <div id="app">
    <div class="dashboard-sidebar">
      <div class="dashboard-sidebar__header">
        <router-link to="/">
          <img src="@/assets/svg/sociotrack-logo.svg" />
        </router-link>
      </div>
      <div class="dashboard-sidebar__content">
        <div class="sidebar-content-profile">
          <div class="sidebar-content-profile__profile-img">
            <img src="@/assets/profile-photo.png" />
          </div>
          <div class="sidebar-content-profile__profile-info">
            <h2 class="profile-info-name">Yura Kuzkin</h2>
            <p class="profile-info-followers">10,500 Followers</p>
          </div>
        </div>
        <div class="sidebar-content-menu">
          <ul class="sidebar-content-menu__list">
            <li
              :class="activeLink === index ? 'sidebar-content-menu-list-item active' : 'sidebar-content-menu-list-item'"
              v-for="(item,index) in menu"
              :key="index"
              @click="activeMenu(index)"
            >
              <router-link class="router-link" :to="item.url">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="dashboard-sidebar__footer">
        <div class="footer-menu">
          <div class="footer-row-first">
            <ul class="footer-row-first__links">
              <li v-for="(item,index) in footerRowFirst" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="footer-row-second">
            <ul class="footer-row-second__links">
              <li v-for="(item,index) in footerRowSecond" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="app-container">
      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeLink: 0,
      menu: [
        {
          name: "Dashboard",
          url: "/dashboard"
        },
        {
          name: "Social Fedd",
          url: "/social"
        },
        {
          name: "Invite Friends",
          url: "/invite"
        },
        {
          name: "Settings",
          url: "/settings"
        },
        {
          name: "Log out",
          url: "/logout"
        }
      ],
      footerRowFirst: ["About", "Terms", "Privacy"],
      footerRowSecond: ["Help", "Report"]
    };
  },
  methods: {
    activeMenu(index) {
      this.activeLink = index;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";

h1,
h2,
h3,
h4,
h5,
p,
span {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
body,
html {
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 100%;
  width: 100%;
}
#app {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  @include deviceRes($tablet) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.app-container {
  width: 1200px;
  height: 100vh;
  display: flex;
  @include deviceRes($tablet) {
    width: 100%;
  }
  .router-title {
    font-size: 100px;
    color: #46c776;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    align-items: center;
  }
}

$Roboto: "Roboto", sans-serif;

.dashboard-sidebar {
  height: 100vh;
  width: 240px;
  background: linear-gradient(180deg, #27b983 -18.15%, #91e857 266.75%);
  box-shadow: inset -1px 0px 0px rgba(28, 175, 94, 0.1);
  @include deviceRes($tablet) {
    width: 100%;
    height: 100%;
  }
  &__header {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0px 1px 0px rgba(28, 175, 94, 0.1);
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
  }
  &__content {
    padding-top: 40px;
    .sidebar-content-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      &__profile-img {
        margin-right: 10px;
        width: 45px;
        height: 45px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #ffffff;
        img {
          width: 100%;
          height: auto;
        }
      }
      &__profile-info {
        .profile-info-name {
          font-family: $Roboto;
          font-weight: normal;
          font-size: 14px;
          color: white;
        }
        .profile-info-followers {
          font-family: $Roboto;
          font-weight: bold;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.3);
          padding-top: 5px;
        }
      }
    }
    .sidebar-content-menu {
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 20px;
      &__list {
        .active {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.0472713);
          border-radius: 5px;
          line-height: 50px;
        }
        .sidebar-content-menu-list-item {
          margin-bottom: 33px;
          padding-left: 30px;
          cursor: pointer;
          .router-link {
            padding: 0;
            margin: 0;
            font-family: $Roboto;
            font-weight: normal;
            font-size: 14px;
            color: #ffffff;
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }
  }
  &__footer {
    margin-top: 370px;
    margin-left: 35px;
    margin-right: 35px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    @include deviceRes($tablet) {
      margin-top: 0;
    }
    .footer-menu {
      padding-top: 22px;
      padding-bottom: 30px;
      .footer-row-first {
        &__links {
          display: flex;
          justify-content: space-between;
          @include deviceRes($tablet) {
            justify-content: space-evenly;
          }
          li {
            font-family: $Roboto;
            font-weight: normal;
            font-size: 12px;
            color: #147a42;
          }
        }
      }
      .footer-row-second {
        padding-top: 15px;
        &__links {
          display: flex;
          justify-content: space-evenly;
          @include deviceRes($tablet) {
            justify-content: space-evenly;
          }
          li {
            font-family: $Roboto;
            font-weight: normal;
            font-size: 12px;
            color: #147a42;
          }
        }
      }
    }
  }
}

.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
