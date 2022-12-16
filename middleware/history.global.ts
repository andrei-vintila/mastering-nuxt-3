export default defineNuxtRouteMiddleware((to, from) => {
  const navationHistory = useLocalStorage("history", []);
  navationHistory.value.push(to.path);
});
