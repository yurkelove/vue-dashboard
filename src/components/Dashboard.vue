<template>
  <section class="dashboard-content">
    <div class="dashboard-content__header">
      <div class="dashboard-content-header-actions">
        <div class="action-notification">
          <img src="@/assets/svg/notification.svg" />
          <span class="action-notification__count">3</span>
        </div>
        <div class="action-search">
          <img src="@/assets/svg/search.svg" />
        </div>
      </div>
    </div>
    <div class="dashboard-content__main">
      <div class="dashboard-main-header">
        <h1 class="dashboard-content-main-nickname">@yura.kuzkin</h1>
        <button class="dashboard-content-main-addProfile" @click="openModal">+ Add Social Profile</button>
      </div>
      <div class="dashboard-main-filters">
        <ul class="dashboard-main-filters__list">
          <li
            :class="activeFilter === item.id ? 'dashboard-filter filter-active' : 'dashboard-filter'"
            v-for="item in  filters"
            :key="item.id"
            @click="changeFilter(item.id)"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="dashboard-main-content">
        <div class="items-profiles-single-box" v-for="(item,index) in profiles" :key="index">
          <div class="single-item-profile" :class="item.colorTest">
            <div class="single-item-profile__container">
              <img :src="item.icon" />
              <h2
                :style="item.colorTest === 'snapchat_color' ? 'color:black' : ''"
              >{{item.count_followers}}</h2>
              <span
                :style="item.colorTest === 'snapchat_color' ? 'color:black' : ''"
              >{{item.actions}}</span>
              <div class="profile-activity">
                <div class="profile-activity__subscr" v-if="item.followers_subscribed ">
                  {{item.followers_subscribed}}
                  <img src="@/assets/svg/arrow-up.svg" />
                </div>
                <div class="profile-activity__unsubsr" v-if="item.followers_unsubscribed">
                  {{item.followers_unsubscribed}}
                  <img src="@/assets/svg/arrow-down.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="single-item-profile-info">
            <div class="profile-avatar">
              <img :src="item.avatar" />
            </div>
            <div class="profile-info">
              <h3 class="profile-info__social">{{item.social_title}}</h3>
              <p class="profile-info__nickname">@{{item.nickname}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-profile @openModal="openModal" v-if="addProfile" />
  </section>
</template>


<script>
import ModalProfile from "../modal/ModalProfile";
export default {
  data() {
    return {
      activeFilter: 1,
      addProfile: false,
      filters: [
        { id: 1, title: "Last day" },
        { id: 2, title: "Week" },
        { id: 3, title: "Month" }
      ],
      profiles: [
        {
          icon: require("../assets/svg/Facebook.svg"),
          count_followers: "1,701",
          followers_subscribed: "+4",
          followers_unsubscribed: null,
          social_title: "Facebook",
          social_account: "@abhisek.daas",
          actions: "FOLLOWERS",
          colorTest: "facebook_color",
          avatar: require("../assets/img/user_1.png"),
          nickname: "abhisek.daas"
        },
        {
          icon: require("../assets/svg/Twitter.svg"),
          count_followers: "1,567",
          followers_subscribed: null,
          followers_unsubscribed: "-3",
          social_title: "Twitter",
          social_account: "@wholetthedasout",
          actions: "FOLLOWERS",
          colorTest: "twitter_color",
          avatar: require("../assets/img/user.png"),
          nickname: "ivan.ivanov"
        },
        {
          icon: require("../assets/svg/Instagram.svg"),
          count_followers: "1,701",
          followers_subscribed: "+11",
          followers_unsubscribed: null,
          social_title: "Instagram",
          social_account: "@wholetthedasout",
          actions: "FOLLOWERS",
          colorTest: "instagram_color",
          avatar: require("../assets/img/user_3.png"),
          nickname: "abhisi.abhasi"
        },
        {
          icon: require("../assets/svg/LinkedIn.svg"),
          count_followers: "2,160",
          followers_subscribed: "+39",
          followers_unsubscribed: null,
          social_title: "LinkedIn",
          social_account: "@abhisekd3",
          actions: "FOLLOWERS",
          colorTest: "linkedin_color",
          avatar: require("../assets/img/user_2.png"),
          nickname: "david.makin"
        },
        {
          icon: require("../assets/svg/Youtube.svg"),
          count_followers: "3,190",
          followers_subscribed: "+22",
          followers_unsubscribed: null,
          social_title: "YouTube",
          social_account: "@TheAbhisekD",
          actions: "SUBSCRIBERS",
          colorTest: "youtube_color",
          avatar: require("../assets/img/user_4.png"),
          nickname: "nasim.nasim"
        },
        {
          icon: require("../assets/svg/Snapchat.svg"),
          count_followers: "8,780",
          followers_subscribed: null,
          followers_unsubscribed: null,
          social_title: "Snapchat",
          social_account: "@TheAbhisekD",
          actions: "SNAP SCORE",
          colorTest: "snapchat_color",
          avatar: require("../assets/img/user.png"),
          nickname: "petr.gorber"
        },
        {
          icon: require("../assets/svg/GooglePlus.svg"),
          count_followers: "8,780",
          followers_subscribed: null,
          followers_unsubscribed: null,
          social_title: "Google+",
          social_account: "@TheAbhisekD",
          actions: "FOLLOWERS",
          colorTest: "google_color",
          avatar: require("../assets/img/user_1.png"),
          nickname: "jan.vetr"
        },
        {
          icon: require("../assets/svg/Vine.svg"),
          count_followers: "8,780",
          followers_subscribed: null,
          followers_unsubscribed: null,
          social_title: "Vine",
          social_account: "@TheAbhisekD",
          actions: "LOOPS",
          colorTest: "vine_color",
          avatar: require("../assets/img/user_2.png"),
          nickname: "balde.keyta"
        }
      ]
    };
  },
  methods: {
    changeFilter(id) {
      this.activeFilter = id;
    },
    openModal() {
      this.addProfile = !this.addProfile;
    }
  },
  components: {
    ModalProfile
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/profiles-colors.scss";
@import "@/assets/scss/mixin.scss";
$Roboto: "Roboto", sans-serif;
$Oswald: "Oswald", sans-serif;

.dashboard-content {
  width: 1200px;
  background: #eff7ed;
  @include deviceRes($tablet) {
    width: 100%;
  }
  &__header {
    background: linear-gradient(0deg, #ffffff, #ffffff);
    box-shadow: inset 0px 1px 0px rgba(28, 175, 94, 0.1);
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    @include deviceRes($tablet) {
      width: 100%;
    }
    .dashboard-content-header-actions {
      padding-right: 35px;
      display: flex;
      .action-notification {
        margin-right: 20px;
        position: relative;
        &__count {
          position: absolute;
          background-color: #1dce6c;
          height: 17px;
          width: 17px;
          border-radius: 100%;
          text-align: center;
          line-height: 17px;
          top: -6px;
          right: -12px;
          color: white;
          font-size: 10px;
          font-family: $Roboto;
          font-weight: bold;
        }
      }
    }
  }
  &__main {
    padding-top: 72px;
    padding-bottom: 127px;
    padding-left: 125px;
    padding-right: 125px;

    @include deviceRes($tablet) {
      padding: 50px;
      background: #eff7ed;
    }
    @include deviceRes($mobile) {
      padding: 20px;
    }

    .dashboard-main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include deviceRes($mobile) {
        align-items: center;
      }
      .dashboard-content-main-nickname {
        text-transform: lowercase;
        color: #1caf5e;
        font-family: $Roboto;
        font-weight: bold;
        font-size: 24px;
      }
      .dashboard-content-main-addProfile {
        color: #1caf5e;
        font-family: $Roboto;
        font-weight: normal;
        font-size: 14px;
        border: 1px solid #1caf5e;
        border-radius: 4px;
        outline: none;
        background: white;
        width: 154px;
        height: 40px;
        text-align: center;
        &:hover {
          background: #1dce6c;
          color: white;
          cursor: pointer;
          transition: all 0.25s ease-in-out;
        }
      }
    }
    .dashboard-main-filters {
      padding-top: 25px;
      &__list {
        display: flex;
        @include deviceRes($tablet) {
          justify-content: center;
        }
        .dashboard-filter {
          cursor: pointer;
          margin-right: 33px;
          font-family: $Roboto;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #333333;
          position: relative;
          &:nth-last-child(1) {
            padding-right: 0;
          }
        }
        .filter-active {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            bottom: -8px;
            width: 100%;
            height: 2px;
            left: 0;
            background-color: #b8e986;
            border-radius: 5px;
          }
        }
      }
    }
    .dashboard-main-content {
      padding-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @include deviceRes($tablet) {
        margin: 0 auto;
        justify-content: space-evenly;
      }
      @include deviceRes($mobile) {
        padding-top:35px;
        justify-content:center;
      }
      .items-profiles-single-box {
        margin-bottom: 25px;
        @include deviceRes($tablet) {
          margin-bottom: 30px;
        }
        cursor: pointer;
        .single-item-profile {
          &__container {
            padding-right: 10px;
            padding-left: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
            h2 {
              font-family: Oswald;
              font-weight: bold;
              font-size: 42px;
              letter-spacing: -0.03em;
              color: #ffffff;
              padding-top: 23px;
            }
            span {
              font-family: Oswald;
              font-weight: normal;
              font-size: 11px;
              letter-spacing: 0.2em;
              color: #ffffff;
            }
            .profile-activity {
              display: flex;
              justify-content: flex-end;
              padding-top: 20px;
              &__subscr {
                color: white;
                font-size: 26px;
                font-family: $Roboto;
                font-weight: normal;
              }
              &__unsubsr {
                color: white;
                font-size: 26px;
                font-family: $Roboto;
                font-weight: normal;
              }
            }
          }
        }
        .single-item-profile-info {
          padding-top: 10px;
          display: flex;
          align-items: center;
          .profile-avatar {
            width: 35px;
            height: 35px;
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            img {
              width: 100%;
              height: auto;
            }
          }
          .profile-info {
            margin-left: 10px;
            &__social {
              font-family: $Roboto;
              font-weight: normal;
              font-size: 13px;
              color: #333333;
              opacity: 0.5;
            }
            &__nickname {
              font-family: Roboto;
              font-weight: normal;
              font-size: 13px;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>