import component from './component'
let AlertConstructor = vue.extend(component);
function merge(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};
var instance;
function initInstance(){
	instance = new AlertConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}
initInstance();
var Alert = {
	hide:function(){
		merge(instance.$data,{
			success:false,
			error:false,
			message:'error!'
		})
	},
	success:function(message){
		var _this = this;
		merge(instance.$data,{
			success:true,
			error:false,
			message:message
		})
		var timer = setTimeout(function(){
			_this.hide();
			clearTimeout(timer)
		}, 2000);
	},
	error:function(message){
		var _this = this;
		merge(instance.$data,{
			error:true,
			success:false,
			message:message
		})
		var timer = setTimeout(function(){
			_this.hide();
			clearTimeout(timer)
		}, 2000);
	}
}
function install(){
	vue.prototype.$Alert = Alert;
}
export default {
	install:install
}

//注册全局方法,在export default 里面必定有一个install函数,才可以被vue use
