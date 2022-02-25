<template>
  <div class="register_form">
    <div class="inputs">
      <div class="inputWrp">
        <p>Email</p>
        <input type="email" />
      </div>
      <div class="inputWrp">
        <p>Re - Email</p>
        <input type="email" />
      </div>
      <div class="inpuWrpt">
        <p>Password</p>
        <input type="password" />
      </div>
      <div class="inputWrp">
        <p>Re - Passwoed</p>
        <input type="password" />
      </div>
    </div>
    <div class="captcha">
      <p>Capcha</p>
      <img src="" alt="" />
      <button><img src="" alt="" /></button>
      <input type="text" />
    </div>
    <div class="btnWrapper">
      <input type="checkbox" />
      <p>I agree with terms</p>
      <button>
        <p>Register</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style lang="scss" scoped>
</style>