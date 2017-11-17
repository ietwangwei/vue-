import alert from './alert'
Vue.use(alert)
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})