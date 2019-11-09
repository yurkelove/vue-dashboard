<template>
  <div class="modal-window">
    <div class="modal-window-dialog">
      <div class="modal-window-container">
        <div class="modal-window-header">
          <span class="modal-window-header__title">Add Social Profile</span>
          <span class="modal-times" @click="closeModal">
            <img src="@/assets/svg/close.svg" />
          </span>
        </div>
        <div class="modal-window-content">
          <h3 class="modal-window-content__title">Add new social profile for tracking</h3>
          <div>
            <label class="modal-window-content__label">URL</label>
            <input
              type="text"
              class="modal-window-content__input"
              placeholder="https://twitter.com/username"
            />
          </div>
        </div>
        <div class="modal-window-footer">
          <button class="modal-window-footer__button" @click="closeModal">Lookup</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal () {
      this.$emit('openModal');
    }
  }
}
</script>

<style lang="scss">
.modal-window {
  display: block;
  position: relative;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .modal-window-dialog {
    padding-top: 115px;
    .modal-window-container {
      margin: 0px auto;
      padding: 35px 40px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      width: 600px;
      height: 260px;
      overflow: hidden;
      .modal-window-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__title {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          font-weight: bold;
          color: #4f4f4f;
        }
        .modal-times {
          cursor: pointer;
        }
      }
      .modal-window-content {
        padding-top: 32px;
        &__title {
          font-family: "Roboto", sans-serif;
          font-weight: normal;
          font-size: 14px;
          color: #4f4f4f;
          padding-bottom: 20px;
        }
        &__label {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size: 13px;
          color: #4f4f4f;
        }
        &__input {
          background: #ffffff;
          border: 1px solid #c5cfc9;
          border-radius: 6px;
          width: 100%;
          outline: none;
          margin-top: 10px;
          height: 40px;
          text-indent: 10px;
          display: flex;
          align-items: center;
          font-family: "Roboto", sans-serif;
          font-weight: normal;
          font-size: 14px;
          color: #b6b6b6;
        }
      }
      input[type="text"] {
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        font-size: 14px;
        color: #b6b6b6;
      }
      .modal-window-footer {
        padding-top: 20px;
        display: flex;
        justify-content: flex-end;
        &__button {
          width: 117px;
          height: 40px;
          background: linear-gradient(180deg, #53cd72 0%, #1caf5e 100%);
          border-radius: 6px;
          border: none;
          outline: none;
          color: white;
          font-family: "Roboto", sans-serif;
          font-weight: normal;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
          &:hover{
            background: linear-gradient(180deg, #50be6c 0%, #1eac5e 100%);
            color:white;
          }
          &:active{
            background: linear-gradient(180deg, #50be6c 0%, #1eac5e 100%);
            color:white;
          }
        }
      }
    }
  }
}
</style>