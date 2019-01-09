<template>
  <section class="row">
    <h1 class="title main-title"><i class="fas fa-tachometer-alt"></i>  Dashboard</h1>
    <div class="col s6 container">
      <h3 class="title sub-title">View your shopping history</h3>
      <div class="dummy-div"></div>
    </div>
    <div class="col s6 container">
      <h3 class="title sub-title">Track your order</h3>
      <div class="dummy-div">
      </div>
    </div>
    <div class="col s6 container">
      <h3 class="title sub-title">Track your order</h3>
      <div class="dummy-div"></div>
    </div>
    <div class="col s6 container">
      <h3 class="title sub-title">View your shopping history</h3>
      <div class="dummy-div"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style scoped>
.container {
  background-color: #FAFAFA;
  border: 5px solid #FFFFFF;
}
.dummy-div {
  width: 300px;
  height: 300px;
}
.title {
  color: #666666;
  text-align: center;
}
.main-title {
  font-size: 3rem;
}
.sub-title {
  font-size: 1.8rem;
}
</style>
