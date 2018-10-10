
// var pubIP = 'http://192.168.1.83:7777/service/';
// var pubIP = 'http://192.168.1.199:7777/service/';
// var pubIP = 'http://api.hdlsuper.com/service/';
// var pubIP = 'http://wl.api.xjv56.com/service/';
var pubIP = 'http://api.test.hdlsuper.com/service/';
// 上传图片路径
// var uplodImgPath = 'http://file.xjv56.com/bfile/fileUpload.htm';
var uplodImgPath = 'http://file.test.xjv56.com/bfile/fileUpload.htm';
//下载
// var downIP = 'http://file.xjv56.com/bfile/fileDown.htm';
var downIP = 'http://file.test.xjv56.com/bfile/fileDown.htm';


//获取地址栏参数，name:参数名称
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}
if(getUrlParms("type")!=null){
    localStorage.setItem("company_type",1);
    localStorage.setItem("token",getUrlParms("token"));
}

var token=localStorage.getItem("token");
var pageSize=10;//分页的每页个数
var companyId = null, userId = null ;

//时间戳转时间格式
function timestampToTime(timestamp) {
    if(timestamp==0 || timestamp=="" || timestamp==null){
        return "";
    }
    if(timestamp/100000000000<0){
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    }else{
        var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    }

    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    D=D<10?"0"+D:D;
    return Y+M+D;
}
//时间戳转时间
function timestampToTime1(timestamp) {
    if(timestamp==0 || timestamp=="" || timestamp==null){
        return "";
    }
    if(timestamp/100000000000<0){
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    }else{
        var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    }

    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    D=D<10?'0'+D:D;
    h=h<10?'0'+h:h;
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;
    return Y+M+D+" "+h+":"+m+":"+s;
}
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//调用： var time1 = new Date().Format("yyyy-MM-dd");var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");


var adct = document.getElementsByTagName('title')[0].getAttribute('adct');
var adct1 = document.getElementsByTagName('title')[0].getAttribute('adct1');
//登录状态失效的弹框
if(adct1=="acount"){
    document.writeln("<div class=\"pop\" id=\"effect\">\n" +
        "\t<div class=\"cont\" >\n" +
        "\t\t<div class=\"cance2\" >\n" +
        "\t\t\t<span class=\"popTitle Lf\" >提示</span>\n" +
        "\t\t\t<div class=\"close Rt\" style=\"width:46px;height:48px;cursor:pointer;margin-right: -20px;margin-top: 0; background: url('img/gsxq_del.png') no-repeat ; background-size: contain;\" onclick=\"cf_popEffectClose1(this)\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"deanger\"></div>\n" +
        "\t\t<div class=\"contTitle\">您好，<span>您的登陆已经过期</span>,请先<i onclick=\"popEffectLogin()\" style=\"color: #00a0e9;cursor:pointer;\">登陆</i>，以便使用更多功能。</div>\n" +
        "\t\t<div class=\"popLogin\" style=\"width:130px;height:35px;line-height:35px;font-size:16px;cursor:pointer;\" id=\"popLogin\" onclick=\"popEffectLogin()\">登录</div>\n" +
        "\t</div>\n" +
        "</div>");
}

//当返回code为401时需要调用此方法
function missedLogin() {
    // $("#effect").css("display","block");
    window.top.$("#effect").show();
}

//跳回登录页
function popEffectLogin() {
	// var isOld = localStorage.getItem('isOld');
 //    window.top.location.href='login.html';

    var isOld = localStorage.getItem('isOld');
    if ($("#popLogin").text() == '认证') {
        window.top.location.href='account.html';
    } else {
        window.top.location.href='login.html';
    }
	// if(isOld == '0' || isOld == '1'){
	// 	if(adct=="首页"){
	//         window.location.href='login.html';
	// 	}else{
	// 		if(location.href.indexOf('account') != -1){
	// 			parent.location.href = 'login.html';
	// 		}else{
	// 			window.location.href='login.html';
	// 		}
	// 	}
	// }else if(isOld == '-1'){
	// 	if(adct=="首页"){
	//         window.location.href='account/account.html';
	// 	}else{
	// 		window.location.href='../account/account.html';
	// 	}
	// }
}
//退出 按钮
$(document).on('click', '.exit', function() {
    $.ajax({
        type: "get",
        url: pubIP + "userCarriers/logoutByToken",//v1.0
        cache: false,
        dataType: "json",
        headers: {
            token: localStorage.getItem("token")
        },
        success: function (data) {
            console.log(data);
            if (data.code == 1) {
                // window.localStorage.removeItem('token');
                localStorage.setItem("token",'')
                // console.log(window.localStorage.getItem('isOld'));
                // window.localStorage.setItem('data-logout', 'true');
                $('.exit').hide();
                $("#loginPub").show();
                $('#userNamePub').html('你好，游客');
                
                location.href = 'login.html';
            }else{
                localStorage.setItem("token",'')
                // console.log(window.localStorage.getItem('isOld'));
                // window.localStorage.setItem('data-logout', 'true');
                $('.exit').hide();
                $("#loginPub").show();
                $('#userNamePub').html('你好，游客');
            }

        },
        error: function (err) {
            console.log(err);
        }
    });
})

var company_type = localStorage.getItem('company_type');
function cf_popEffectClose1(that) {
	$(that).parent().parent().parent().css("display","none");
     
    if ($('#popLogin').text() == '登录') {
        if (company_type == '1') { //供应商
            // location.href = '../login.html';
            window.top.location.href='../login.html';
        } else if (company_type == '2') {
            // location.href = 'login.html';
            window.top.location.href='login.html';
        } else if (company_type == '-1') {
            window.top.location.href='login.html';
        }
    } else if ($('#popLogin').text() == '认证') {
        window.top.location.href='account.html';
    }
    
}

if(token){
	//底部信息ajax
	$.ajax({
		  type:"post",
		  url:pubIP+"platform/getPlatformInfo",//v1.0
		  cache:false,
		  dataType: "json",
		  headers: {
		  	token: token
		  },
		  success: function(json){
		    //console.log(json.code);
		  	$('.kfPhone').text(json.data.customerMobile);
		  	$('.kfEm').text(json.data.customerEmail);
		  },
		  error:function(xhr,statues,error){

		  }
	});

	//isOld token
	//2 ok 已认证
	//0 超时
	//1 未登录
	//-1 未认证
	//-2 审核中
	$.ajax({
		  type:"post",
		  url:pubIP+"userCarriers/getUserInfoByToken",//v1.0
		  cache:false,
		  dataType: "json",
		  async:false,
		  headers: {
		  	token: token
		  },
		  success: function(json){
		    //console.log(json.data);
			//是否超时

		    if(json.code == 401){
		    		localStorage.setItem('isOld','0');
		  		if(location.href.indexOf('login') == -1){
		  			if(location.href.indexOf('index') == -1){
		  				if(location.href.indexOf('account') != -1 || location.href.indexOf('shopManage') != -1){
		  					$("#effect" , parent.document).show();
		  				}else{
		  					missedLogin() ;
		  				}
		  			}
		  		}
		  	}else{
		  		//是否认证
		  		$.ajax({
					  type:"post",
					  url:pubIP+"companyCertification/getCompanyWriteStateByUserToken",//v1.0
					  cache:false,
					  dataType: "json",
					  headers: {
					  	token: token
					  },
					  success: function(json){
						//console.log(json.code);
					    var rzType = null;
					  	switch(json.data.type){
							case 1:
							  //未认证
							  rzType = '-1';
							  break;
							case 2:
							  //审核
							  rzType = '-2';
							  break;
							case 3:
							  //已认证
							  rzType = '2';
							  break;
							case 4:
							  rzType = '-1';
							  break;
							case 5:
							  rzType = '2';
							  break;
							case 6:
							  rzType = '2';
							  break;
							default:
							  rzType = '-1';
						}
					  	localStorage.setItem('isOld',rzType);
					  },
					  error:function(xhr,statues,error){

					  }
				});
		  		//localStorage.setItem('isOld','2');
		  	}
			companyId = json.data.companyId;
			userId = json.data.ids;
		  },
		  error:function(xhr,statues,error){

		  }
	});
}else{
	localStorage.setItem('isOld','1');
    missedLogin() ;
}

// else{
// 	localStorage.setItem('isOld','1');
// 	if(location.href.indexOf('login') == -1){
// 		if(location.href.indexOf('index') == -1){
// 			$('#effect .contTitle span').text('您尚未登录');
// 			missedLogin() ;
// 		}
// 	}
// }



// 模拟下拉框
$('.select').click(function(event){

    if($(this).attr("disabled")=="disabled"){return;}//不可选

    if($(this).children('img').attr('src') == '../img/prl-selected.jpg'){
        $(this).children('img').attr('src', '../img/prl-select.jpg')
    } else {
        $(this).children('img').attr('src', '../img/prl-selected.jpg')
    }

    event.stopPropagation();

    $(this).children('ul').toggle();
    var that = $(this);
    that.find('li').each(function(){
        $(this).mouseover(function(){
            $(this).addClass('hovered')
        });
        $(this).mouseleave(function(){
            $(this).removeClass('hovered')
        });
        if($(this).attr('data-index') == that.attr('data-selectedindex')){
            $(this).css({'background': '#6ea3ff','color': '#fff'});
            $(this).siblings('li').css({'background': '#fff','color': '#999'});
        }
    });

}).mouseleave(function (event) {
    $(this).children('img').attr('src', '../img/prl-select.jpg');
    $(this).children('ul').hide();
});
$('.select ul li').click(function(){
    event.stopPropagation();
    $(this).parent().parent().attr('data-selectedindex', $(this).attr('data-index'));
    $(this).parent().parent().find('span').text($(this).text());
    $(this).parent().parent().children('img').attr('src', '../img/prl-select.jpg')
    $(this).parent().css('display','none');
});



var company_type = localStorage.getItem('company_type');

$(function () {
    var url = window.location.href;

    if (url.indexOf('account') != -1) { //存在
        if (company_type == '-1' || company_type == '2') {
            if (url.indexOf('xj_wuliu_gy') != -1) {
                window.location.href = "account.html";
            }    
        } else if (company_type == '1') {
            
            if (url.indexOf('xj_wuliu_gy') == -1) {
                window.location.href = "xj_wuliu_gy/account.html";
            }
        }
    }
    
    

    // $("header  .logo").click(function () {
    //
    //     if (company_type == '1') { //供应商
    //         debugger
    //         $('.goUser').attr('href', '../index.html');
    //     } else if (company_type == '2') {
    //         $('.goUser').attr('href', 'index.html');
    //     } else if (company_type == '-1') {
    //         $('.goUser').attr('href', 'index.html');
    //     }
    //     window.location.href="/allWuliu/index.html";
    // })

    if (companyId) {
        $.ajax({
            type: "get",
            url: pubIP + "chemicalType/findUserCompanyInfo",//v1.0
            cache: false,
            dataType: "json",
            headers: {
                token: token
            },
            success: function(json){
                console.log(json);

                if (json.code == 1) {
                    if (json.companyType == 1) { //供应商
                        localStorage.setItem('company_type', '1');
                        // window.location.href="xj_wuliu_gy/account.html";
                    } else if (json.companyType == 2) {
                        localStorage.setItem('company_type', '2');
                        // window.location.href="./account.html";
                    } else if (json.companyType == -1) {
                        localStorage.setItem('company_type', '-1');
                    }
                } else if (json.code == -1) {
                    cf_alert01(2, json.msg);
                }

            },
            error: function(err) {
                console.log(err);
            }
        });
    }




    $(".goUser").click(function () {
        // $.ajax({
        //     type: "get",
        //     url: pubIP + "chemicalType/findUserCompanyInfo",//v1.0
        //     cache: false,
        //     dataType: "json",
        //     headers: {
        //         token: token
        //     },
        //     success: function(json){
        //         console.log(json);
        //         if (json.code == 1) {
        //             if (json.companyType == 1) { //供应商
        //                 localStorage.setItem('company_type', '1');
        //                 window.location.href="xj_wuliu_gy/account.html";
        //             } else if (json.companyType == 2) {
        //                 localStorage.setItem('company_type', '2');
        //                 window.location.href="./account.html";
        //             } else if (json.companyType == -1) {
        //                 var url = window.location.href;
        //                 if (url.indexOf('login.html') != -1) {
                        
        //                     $('#effect2 .contTitle span').text('您尚未登录');
        //                     $('#effect2').css('display', 'block');
        //                     // missedLogin();
        //                     // $('.goUser').attr('href', 'javascript:;');
        //                 } else {
        //                     window.location.href="./account.html";
        //                     //window.sessionStorage.setItem('cfsrc', "./finance/identification1.html");
        //                     var url = window.location.href;
        //                     if (url.indexOf('account.html') != -1) {
        //                         $.ajax({
        //                             url: pubIP + 'companyCertification/getCompanyWriteStateByUserToken',
        //                             type: 'post',
        //                             headers: {
        //                                 Accept: "application/json; charset=utf-8",
        //                                 token: token
        //                             },
        //                             data: {
        //                                 token: token
        //                             },
        //                             cache: false,
        //                             dataType: 'json',
        //                             success: function (data) {
        //                                 console.log(data);
        //                                 console.log(data.data.state);

        //                                 if (data.data.state && data.data.type == 1) {
        //                                     if (data.data.state != 1) {
        //                                         $('.qiye_renzheng').attr('data-src', '../finance/identification'+data.data.state+'.html');
        //                                         // $(document).on('click', '.qiye_renzheng', function() {
        //                                         window.sessionStorage.setItem('cfsrc', "./finance/identification"+data.data.state+".html");
        //                                             if (companyId) {
        //                                                 tiao_tan();
        //                                             }
        //                                         // });
        //                                     }
                                            
        //                                 }

                                                  
        //                             },
        //                             error: function (err) {
        //                                 console.log(err);
        //                             }
        //                         });
        //                     }
        //                 }
        //             }
        //         }

        //     },
        //     error: function(err) {
        //         console.log(err);
        //     }

        // });
        
        if (company_type == '1') { //供应商
            window.location.href="xj_wuliu_gy/account.html";
        } else if (company_type == '2') {
            window.location.href="./account.html";
        } else if (company_type == '-1') {
            var url = window.location.href;
            if (url.indexOf('login.html') != -1) {
            
                $('#effect2 .contTitle span').text('您尚未登录');
                $('#effect2').css('display', 'block');
                // missedLogin();
                // $('.goUser').attr('href', 'javascript:;');
            } else {
                window.location.href="./account.html";
                //window.sessionStorage.setItem('cfsrc', "./finance/identification1.html");
                // var url = window.location.href;
                
                // if (url.indexOf('account.html') == -1) {

                window.sessionStorage.setItem('cfsrc', "./finance/identification1.html");
                    $.ajax({
                        url: pubIP + 'companyCertification/getCompanyWriteStateByUserToken',
                        type: 'post',
                        headers: {
                            Accept: "application/json; charset=utf-8",
                            token: token
                        },
                        data: {
                            token: token
                        },
                        cache: false,
                        dataType: 'json',
                        success: function (data) {
                            console.log(data);
                            console.log(data.data.state);

                            if (data.data.state && data.data.type == 1) {
                                if (data.data.state != 1) {
                                    $('.qiye_renzheng').attr('data-src', '../finance/identification'+data.data.state+'.html');
                                    // $(document).on('click', '.qiye_renzheng', function() {
                                    window.sessionStorage.setItem('cfsrc', "./finance/identification"+data.data.state+".html");
                                        if (companyId) {
                                            tiao_tan();
                                        }
                                    // });


                                }
                                
                            }

                                      
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                // }
            }

            
        }

        
        
    })

    var url = window.location.href;
    console.log(url);
    if (url.indexOf('account.html') != -1) {
        
        $.ajax({
            url: pubIP + 'companyCertification/getCompanyWriteStateByUserToken',
            type: 'post',
            headers: {
                Accept: "application/json; charset=utf-8",
                token: token
            },
            data: {
                token: token
            },
            cache: false,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                console.log(data.data.state);

                if (data.data.state && data.data.type == 1) {
                    if (data.data.state != 1) {
                        $('.qiye_renzheng').attr('data-src', './finance/identification'+data.data.state+'.html');
                        // $(document).on('click', '.qiye_renzheng', function() {
                        window.sessionStorage.setItem('cfsrc', "./finance/identification"+data.data.state+".html");
                            if (companyId) {
                                tiao_tan();
                            }
                        // });
                        $('.qiye_renzheng').click();
                    }
                    
                }

                          
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    
    
})
// //刷新按钮
// $(".cfRefresh").click(function () {
//     location.reload();
// })
// $(".cfRefresh").hide();
//模拟点击 框
$(".cf_select").click(function () {
    $(this).toggleClass("on");
})
//全选
$('.cf_selsectAll').click(function(){
    if($(this).hasClass("on")){
        $(this).parent().prev().find("table").find(".cf_select").addClass("on");
    }else{
        $(this).parent().prev().find(".cf_select").removeClass("on");
    }
});

$(function () {
    //分页的  下面框的宽度
    $(".pagination li").each(function (idx,item) {

        if($(item).find("a").text()=="上一页"||$(item).find("a").text()=="下一页"){
            $(item).find('a').css("width","60px");
        }else if($(item).find("a").text()=="首页"||$(item).find("a").text()=="尾页"){
            $(item).find('a').css("width","60px");
        }
    })
    // 所有的显示条数 先隐藏
    $(".select span").each(function (idx,item) {
        if($(item).text()=="显示条数"){
            $(item).parent().css("display","none");
        }
    })
})

//     $(this).parent().css('display','none');
// });
// 伪alert弹框    //type  1成功   2失败    msg消息   （注：点击该alert框的关闭或者确认，所有弹框将会被关闭，并且刷新当前页面）
function cf_alert(aa,msg) {
    if(aa==1){
        window.parent.$(".all_success_alert").show();
        window.parent.$(".all_success_alert .innerSuccmsg").text(msg);
        window.parent.$(".all_success_alert .confirm").unbind();
        window.parent.$(".all_success_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
        window.parent.$(".all_success_alert img.close").unbind();
        window.parent.$(".all_success_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
    }else {
        window.parent.$(".all_error_alert").show();
        window.parent.$(".all_error_alert .innerErrmsg").text(msg);
        window.parent.$(".all_error_alert .confirm").unbind();
        window.parent.$(".all_error_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
        window.parent.$(".all_error_alert img.close").unbind();
        window.parent.$(".all_error_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
    }

}
//不刷新弹窗
function cf_alert01(aa,msg) {
    if(aa==1){
        window.parent.$(".all_success_alert").show();
        window.parent.$(".all_success_alert .innerSuccmsg").text(msg);
        window.parent.$(".all_success_alert .confirm").unbind();
        window.parent.$(".all_success_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            //window.top.$(".modelCont").parent().hide();
            //window.location.reload();
        })
        window.parent.$(".all_success_alert img.close").unbind();
        window.parent.$(".all_success_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            //window.top.$(".modelCont").parent().hide();
            // window.location.reload();
        })
    }else {
        window.parent.$(".all_error_alert").show();
        window.parent.$(".all_error_alert .innerErrmsg").text(msg);
        window.parent.$(".all_error_alert .confirm").unbind();
        window.parent.$(".all_error_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            //window.top.$(".modelCont").parent().hide();
            //window.location.reload();
        })
        window.parent.$(".all_error_alert img.close").unbind();
        window.parent.$(".all_error_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            //window.top.$(".modelCont").parent().hide();
            //window.location.reload();
        })
    }

}

//查询按钮 统一设置样式
$(".searchResultBtn.btn.input").css({"float":"right","margin-top":"11px","margin-left":"0","margin-right":"11px"});


// 导出 EXCEL 表格 暂时没有用到
var idTmr;
function  getExplorer() {
    var explorer = window.navigator.userAgent ;
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if(explorer.indexOf("Chrome") >= 0){
        return 'Chrome';
    }
    //Opera
    else if(explorer.indexOf("Opera") >= 0){
        return 'Opera';
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0){
        return 'Safari';
    }
}
function method1(tableid) {//整个表格拷贝到EXCEL中
    if(getExplorer()=='ie') {
        var curTbl = document.getElementById(tableid);
        var oXL = new ActiveXObject("Excel.Application");

        //创建AX对象excel
        var oWB = oXL.Workbooks.Add();
        //获取workbook对象
        var xlsheet = oWB.Worksheets(1);
        //激活当前sheet
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        //把表格中的内容移到TextRange中
        sel.select;
        //全选TextRange中内容
        sel.execCommand("Copy");
        //复制TextRange中内容
        xlsheet.Paste();
        //粘贴到活动的EXCEL中
        oXL.Visible = true;
        //设置excel可见属性

        try {
            var fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
        } catch (e) {
            print("Nested catch caught " + e);
        } finally {
            oWB.SaveAs(fname);

            oWB.Close(savechanges = false);
            //xls.visible = false;
            oXL.Quit();
            oXL = null;
            //结束excel进程，退出完成
            //window.setInterval("Cleanup();",1);
            idTmr = window.setInterval("Cleanup();", 1);
        }
    } else {
        tableToExcel('ta')
    }
}
function Cleanup() {
    window.clearInterval(idTmr);
    CollectGarbage();
}

/*
    template ： 定义文档的类型，相当于html页面中顶部的<!DOCTYPE> 声明。（个人理解，不确定）
    encodeURIComponent:解码
    unescape() 函数：对通过 escape() 编码的字符串进行解码。
    window.btoa(window.encodeURIComponent(str)):支持汉字进行解码。
    \w ：匹配包括下划线的任何单词字符。等价于’[A-Za-z0-9_]’
    replace()方法：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    {(\w+)}：匹配所有 {1个或更多字符} 形式的字符串；此处匹配输出内容是 “worksheet”
    正则中的() ：是为了提取匹配的字符串。表达式中有几个()就有几个相应的匹配字符串。
    讲解(/{(\w+)}/g, function(m, p) { return c[p]; } ：
        /{(\w+)}/g 匹配出所有形式为“{worksheet}”的字符串；
        function参数：  m  正则所匹配到的内容，即“worksheet”；
                        p  正则表达式中分组的内容,即“(\w+)”分组中匹配到的内容，为“worksheet”；
        c ：为object，见下图3
        c[p] : 为“worksheet”

*/
var tableToExcel = (function() {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64 = function(s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            },
            // 下面这段函数作用是：将template中的变量替换为页面内容ctx获取到的值
            format = function(s, c) {
                return s.replace(/{(\w+)}/g,
                    function(m, p) {
                        return c[p];
                    }
                )
            };
        return function(table, name) {
            if (!table.nodeType) {
                table = document.getElementById(table)
            }
            // 获取表单的名字和表单查询的内容
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML};
            // format()函数：通过格式操作使任意类型的数据转换成一个字符串
            // base64()：进行编码
            window.location.href = uri + base64(format(template, ctx))
        }
    })()

// 导出订单
function exportOrder(status,type){
    $(".export").attr("href",pubIP + 'uploadExcel/orderExcel?type='+type+'&status='+status+'&page=1&size=5000&orderNo='+$(".orderNo").text()+'&time='+$("#test1").val()+'&endTime='+$("#test2").val()+'&goodsName='+$("#cf_goodsName").val()+'&token='+sessionStorage.getItem("token"))
}