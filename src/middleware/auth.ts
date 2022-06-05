export default defineNuxtRouteMiddleware((to, from) => {
if (false) {
    return abortNavigation()
}

// ログイン画面にリダイレクト
return navigateTo('/login')
});