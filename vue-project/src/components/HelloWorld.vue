<script setup>
import { reactive, ref, nextTick } from "vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
const raw = { name: "sunsir" };
const proxy = reactive(raw);
console.log("proxy", proxy);
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy); // true
// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy); // true

const raw1 = { age: "123123123" };
proxy.nested = raw1;
console.log("proxy", proxy);
console.log(proxy.nested === raw); // false
function changeProxy() {
  proxy.nested.age = 9999;
  test();
}

const count = ref(0);
const state = reactive({
  count,
});
console.log(state.count); // 0
state.count = 1;
console.log(count.value); // 1

const a = ref(1);
a.value = 3;
console.log(a.value); //3

const emit = defineEmits(["test"]);

async function test() {
  let p1 = await new Promise((resolve) => {
    emit("test", (nothing) => {
       resolve(nothing);
    });
  });
  nextTick(() => {
    console.log("p1p1p1p1", p1);
    if (p1) {
      console.log("成功！！！");
    }
  });
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}{{ proxy.nested.age }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
    <button @click="changeProxy">点我改变年龄</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
