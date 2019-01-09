<template>
  <section>
    <h1 class="title main-title"><i class="fas fa-store"></i> Sweet Store</h1>
    <h3 class="title sub-title">A custom-tailored shopping experience awaits.</h3>
    <div class="musicnotes">
      <div class="noot-1">&#9835; &#9833;</div>
      <div class="noot-2">&#9833;</div>
      <div class="noot-3">&#9839; &#9834;</div>
      <div class="noot-4">&#9834;</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.musicnotes {
  display: block;
  margin: auto;
  position: relative;
  width: 50%;
  min-width: 300px;
  height: 200px;
  border: 0;
}
.noot-1,
.noot-2,
.noot-3,
.noot-4 {
  position: absolute;
  animation: notes 2s infinite linear;
  font-size: 35px;
  opacity: 0;
  color: #284266;
}

.noot-1 {
  top: 60px;
  left: 0;
  animation-delay: 0.5s;
}

.noot-2 {
  top: 30px;
  left: 30%;
  animation-delay: 1s;
}

.noot-3 {
  top: 90px;
  left: 60%;
  animation-delay: 1.5s;
}

.noot-4 {
  top: 40px;
  left: 90%;
  animation-delay: 2s;
}

@keyframes notes {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.5) translate(50%, -50%);
  }
  80% {
    opacity: 0;
    transform: scale(1.5) translate(100%, -100%);
  }
  100% {
    transform: scale(1.5) translate(100%, -100%);
    opacity: 0;
  }
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
