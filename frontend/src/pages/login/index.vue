<template>
  <div>
    <div>ログインぺージ</div>
    <div>{{ $samplePlugin() }}</div>
    <button @click="login()">ログインボタン</button>
    <button @click="toFetchSample()">フェッチサンプル</button>
  </div>
</template>
<script setup lang="ts">
import LoginService from '~~/src/services/loginService';
definePageMeta({
  layout: 'default',
});

const state = reactive({
  id: 'sample',
  password: 'sample',
});

const login = () => {
  // TODO ローディング等の待機状態表示処理
  console.log('login');

  LoginService.login(state.id, state.password)
    .then(() => {
      navigateTo({
        path: '/directory/child',
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

const toFetchSample = () => {
  navigateTo({
    path: '/directory/fetch',
  });
};

</script>
