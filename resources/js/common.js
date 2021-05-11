const js_func = (() => {
	class common {
		constructor() {
			const _this = this

			_this.init = () => {
				//init
			}
		}

		// new common_func.index(selector)
		// new common_func.index(element)
		index (obj) {
			return Array.from(obj.parentElement.children).indexOf(obj)
		}
	}

	return {
		common
	}
})()

//outside 
window.common_func = js_func

// export {
// 	js_func
// }