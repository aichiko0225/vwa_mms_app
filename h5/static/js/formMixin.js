//单据
import {
    ACCESS_TOKEN,
    USER_NAME,
    USER_INFO,
    USER_ID,
} from "@/common/util/constants"
import $ from "@/common/js/jquery-3.5.1.min.js"
import {
    forEach
} from "../../common/luch-request/utils";

export const formMixin = {
    props: {
        //基本信息数据
        // valiFormData: {}
    },
    data() {
        return {
            measuredValueList: [], //measuredValue表
        }
    },
    watch: {
			immediate: true
	},
    onLoad(e) {
    },
    onReady() {

    },
    mounted(e) {
        let that = this;
        this.userInfo = Object.assign({}, uni.getStorageSync(USER_INFO))
		that.getMeasuredValueList()
    },
    methods: {
		getMeasuredValueList(){
			let that = this
			let data = [
				{id:"1",value:"i.o"},
				{id:"2",value:"n.i.o"},
				{id:"3",value:"i.o*"},
				{id:"4",value:"Not tested"},
				{id:"5",value:"Not testable"},
			];
			that.measuredValueList = data.map((item) => {
			    let obj = {
			        name: item.value,
			        id: item.id
			    }
			    return obj
			})
		},
		//Measured Value下拉选
		selectMeasuredValue: function (e) {
			let that = this
			//存id或者时存文本值
			that.valiFormData.measuredValue = that.measuredValueList[e.detail.value].name;
			// that.valiFormData.measuredValue = that.measuredValueList[e.detail.value].id;
		},
        cssStyle2DomStyle(sName) {
            const reg = /[A-Z]/g;
            let retstr = "";
            for (let i in sName) {
                if (reg.test(sName[i])) {
                    retstr += "_" + sName[i].toLowerCase()
                } else {
                    retstr += sName[i];
                }
            }
            return retstr;
        },
        getFormat(date, fmt) { //author: meizz
			let phoneType =  uni.getSystemInfoSync().platform;
			if(phoneType == 'ios'){
				date = new Date(date.replaceAll('-', '/'))
			}else{
				date = new Date(date)
			}
            let o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "H+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (let k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
			if(phoneType == 'ios'){
				fmt = fmt.replaceAll('-', '/')
            }
            return fmt;
        }
    }

}
