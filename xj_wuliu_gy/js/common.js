// var pubIP = 'http://192.168.1.218:7777/service/';
// var pubIP = 'http://192.168.1.199:7777/service/';
var pubIP = 'http://api.hdlsuper.com/service/';
 // var pubIP = 'http://wl.api.xjv56.com/service/';


var ip = pubIP;


//获取地址栏参数，name:参数名称
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}



var token=localStorage.getItem("token");

// 上传图片路径
// var uplodImgPath = 'http://192.168.1.80:8680/bfile/fileUpload.htm';
// var uplodImgPath = 'http://172.17.210.188:8081/bfile/fileUpload.htm';
var uplodImgPath = 'http://file.xjv56.com/bfile/fileUpload.htm';

var pageSize=10;//分页的每页个数

var companyId = null, userId = null ;

//时间戳转时间
function timestampToTime(timestamp) {
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
    D=D<10?'0'+D:D;
    return Y+M+D;
}
//时间戳转时间
function timestampToTime1(timestamp) {
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
Date.prototype.Format = function (fmt) { //author: meizz 
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
//登录状态失效的弹框
if(adct=="account"){
    document.writeln("<div class=\"pop\" id=\"effect\">\n" +
        "\t<div class=\"cont\" >\n" +
        "\t\t<div class=\"cance2\" >\n" +
        "\t\t\t<span class=\"popTitle Lf\" >提示</span>\n" +
        "\t\t\t<div class=\"close Rt\" style=\"cursor:pointer;width:46px;height:48px;margin-right: -20px;margin-top: 0; background: url('../img/gsxq_del.png') no-repeat ; background-size: contain;\" onclick=\"cf_popEffectClose1(this)\"></div>\n" +
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
	var isOld = localStorage.getItem('isOld');
    window.top.location.href='../login.html';
    // var company_type = localStorage.getItem('company_type');
    // if (company_type == '1') { //供应商
    //     // location.href = '../login.html';
    //     window.top.location.href='../login.html';
    // } else if (company_type == '2') {
    //     // location.href = 'login.html';
    //     window.top.location.href='login.html';
    // }



	// if(isOld == '0' || isOld == '1'){
	// 	//if(adct=="首页"){
	//         window.location.href='login.html';
	// 	// }else{
	// 	// 	if(location.href.indexOf('account') != -1){
	// 	// 		parent.location.href = '../login/login.html';
	// 	// 	}else{
	// 	// 		window.location.href='../login/login.html';
	// 	// 	}
	// 	// }
	// }else if(isOld == '-1'){
	// 	if(adct=="首页"){
	//         window.location.href='account/account.html';
	// 	}else{
	// 		window.location.href='../account/account.html';
	// 	}
	// }
}

function cf_popEffectClose1(that) {
	$(that).parent().parent().parent().css("display","none");
    window.location.href='../login.html';
}



//退出 按钮
$(document).on('click', '.exit', function() {
    $.ajax({
        type: "get",
        url: pubIP + "userSupplier/logoutByToken",//v1.0
        cache: false,
        dataType: "json",
        headers: {
            token: localStorage.getItem("token")
        },
        success: function (data) {
            console.log(data);
            if (data.code == 1) {
                window.localStorage.removeItem('token');
                console.log(window.localStorage.getItem('isOld'));
                // window.localStorage.setItem('data-logout', 'true');
                $('.exit').hide();
                $("#loginPub").show();
                $('#userNamePub').html('你好，游客');
                var company_type = localStorage.getItem('company_type');
                if (company_type == '1') { //供应商
                    location.href = '../login.html';
                } else if (company_type == '2') {
                    location.href = 'login.html';
                }
            }

        },
        error: function (err) {
            console.log(err);
        }
    });
})


if(token) {
    //底部信息ajax
    // $.ajax({
    //     type: "post",
    //     url: pubIP + "platform/getPlatformInfo",//v1.0
    //     cache: false,
    //     dataType: "json",
    //     headers: {
    //         token: token
    //     },
    //     success: function (json) {
    //         //console.log(json.code);
    //         $('.kfPhone').text(json.data.customerMobile);
    //         $('.kfEm').text(json.data.customerEmail);
    //     },
    //     error: function (xhr, statues, error) {
    //
    //     }
    // });

    //isOld token
    //2 ok 已认证
    //0 超时
    //1 未登录
    //-1 未认证
    //-2 审核中
    $.ajax({ 
          type:"post",
          url:pubIP+"userSupplier/getUserInfoByToken",//v1.0
          cache:false,
          dataType: "json",
          async:false,
          headers: {
            token: token
          },
          success: function(json){
            console.log(json.data);
            //是否超时
            if(json.code == 401){
                missedLogin() ;
                //     localStorage.setItem('isOld','0');
                // if(location.href.indexOf('login') == -1){
                //
                //      if(!(location.href.indexOf('index') != -1 || location.href.indexOf('aboutUs') != -1)){
                //     //if(location.href.indexOf('index') == -1){
                //         if(location.href.indexOf('account') != -1 || location.href.indexOf('shopManage') != -1){
                //             $("#effect" , parent.document).show();
                //         }else{
                //             missedLogin() ;
                //         }
                //     }
                // }
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
                        console.log(json.code);
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
            userId = json.data.id;
            
          },
          error:function(xhr,statues,error){
              
          }
    });
}else{
    localStorage.setItem('isOld','1');
    //if(adct=="acount"){
        missedLogin() ;
    //}
}




$(function () {
    // if(getUrlParms("type")!=null && getUrlParms("token")!=null && getUrlParms("orderId")!=null){
    //     localStorage.setItem("company_type",1);
    //     sessionStorage.setItem("jiaoYiType",getUrlParms("type"));
    //     localStorage.setItem("token",getUrlParms("token"));
    //     sessionStorage.setItem("isfromjiaoyi",1);
    //     sessionStorage.setItem("fromjiaoyi_productName",decodeURI(getUrlParms("productName")));
    //     sessionStorage.setItem("fromjiaoyi_sum",getUrlParms("sum"));
    //     sessionStorage.setItem("fromjiaoyi_orderId",getUrlParms("orderId"));
    //     sessionStorage.setItem("fromjiaoyi_chemicalId",getUrlParms("chemicalId"));
    //     sessionStorage.setItem("fromjiaoyi_chemicalName",decodeURI(getUrlParms("chemicalName")));
    //     window.location.href="account.html"
    // }
    var company_type = localStorage.getItem('company_type');
    var url = window.location.href;
    if (url.indexOf('account.html') != -1) {

        if (company_type == '-1' || company_type == '2') {

            if (url.indexOf('xj_wuliu_gy') != -1) { //不存在
                window.location.href = "../account.html";
            }
        } else if (company_type == '1') {
            if (url.indexOf('xj_wuliu_gy') == -1) { //不存在
                window.location.href = "./account.html";
            }
        }

    }
    
})


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

$(function () {
    // $("header  .logo").click(function () {
    //     alert(',,');
    //     if (company_type == '1') { //供应商

    //         $('.goUser').attr('href', '../index.html');
    //     } else if (company_type == '2') {
    //         $('.goUser').attr('href', '../index.html');
    //     } else if (company_type == '-1') {

    //         $('.goUser').attr('href', '../index.html');
    //     }

    //     // window.location.href="./index.html";
    // })


    $(".goUser").click(function () {

        if (company_type == '1') { //供应商
            
            if (localStorage.getItem('isOld') == -1 || localStorage.getItem('isOld') == -2) {
                window.location.href="./account.html";
                window.sessionStorage.setItem('cfsrc', "../finance/identification1.html");
            }
        } else if (company_type == '2') {
            window.location.href="../account.html";
        } else if (company_type == '-1') {
            var url = window.location.href;
            if (url.indexOf('login.html') != -1) {
            
                $('#effect2 .contTitle span').text('您尚未登录');
                $('#effect2').css('display', 'block');
                // missedLogin();
                // $('.goUser').attr('href', 'javascript:;');
            } else {
                window.location.href="./account.html";

                window.sessionStorage.setItem('cfsrc', "../finance/identification1.html");
                var url = window.location.href;
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
                                    $('.qiye_renzheng').attr('data-src', '../finance/identification'+data.data.state+'.html');
                                    // $(document).on('click', '.qiye_renzheng', function() {
                                    window.sessionStorage.setItem('cfsrc', "../finance/identification"+data.data.state+".html");
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
                }
            }

            
        }

    })
})

var url = window.location.href;
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
                        $('.qiye_renzheng').attr('data-src', '../finance/identification'+data.data.state+'.html');
                        // $(document).on('click', '.qiye_renzheng', function() {
                        window.sessionStorage.setItem('cfsrc', "../finance/identification"+data.data.state+".html");
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


// 模拟下拉框

// var adct1 = document.getElementsByTagName('title')[0].getAttribute('adct1');
// $('.selectPub').click(function(event){
//     console.log($(this).attr("disabled"))
//     if($(this).attr("disabled")=="disabled"){return;}//不可选
//     if(adct1==1){
//         if($(this).children('img').attr('src') == '../img/prl-selected.jpg'){
//             $(this).children('img').attr('src', '../img/prl-select.jpg')
//         } else {
//             $(this).children('img').attr('src', '../img/prl-selected.jpg')
//         }

//         event.stopPropagation();

//         $(this).children('ul').toggle();
//         var that = $(this);
//         that.find('li').each(function(){
//             $(this).mouseover(function(){
//                 $(this).addClass('hovered')
//             });
//             $(this).mouseleave(function(){
//                 $(this).removeClass('hovered')
//             });
//             if($(this).attr('data-index') == that.attr('data-selectedindex')){
//                 $(this).css({'background': '#6ea3ff','color': '#fff'});
//                 $(this).siblings('li').css({'background': '#fff','color': '#999'});
//             }
//         });
//     }else if(adct1==2){
//         if($(this).children('img').attr('src') == '../../img/prl-selected.jpg'){
//             $(this).children('img').attr('src', '../../img/prl-select.jpg')
//         } else {
//             $(this).children('img').attr('src', '../../img/prl-selected.jpg')
//         }

//         event.stopPropagation();

//         $(this).children('ul').toggle();
//         var that = $(this);
//         that.find('li').each(function(){
//             $(this).mouseover(function(){
//                 $(this).addClass('hovered')
//             });
//             $(this).mouseleave(function(){
//                 $(this).removeClass('hovered')
//             });
//             if($(this).attr('data-index') == that.attr('data-selectedindex')){
//                 $(this).css({'background': '#6ea3ff','color': '#fff'});
//                 $(this).siblings('li').css({'background': '#fff','color': '#999'});
//             }
//         });
//     }else if(adct1==0){
//         if($(this).children('img').attr('src') == './img/prl-selected.jpg'){
//             $(this).children('img').attr('src', './img/prl-select.jpg')
//         } else {
//             $(this).children('img').attr('src', './img/prl-selected.jpg')
//         }

//         event.stopPropagation();

//         $(this).children('ul').toggle();
//         var that = $(this);
//         that.find('li').each(function(){
//             $(this).mouseover(function(){
//                 $(this).addClass('hovered')
//             });
//             $(this).mouseleave(function(){
//                 $(this).removeClass('hovered')
//             });
//             if($(this).attr('data-index') == that.attr('data-selectedindex')){
//                 $(this).css({'background': '#6ea3ff','color': '#fff'});
//                 $(this).siblings('li').css({'background': '#fff','color': '#999'});
//             }
//         });
//     }


// }).mouseleave(function (event) {
//     if(adct1==0){
//         $(this).children('img').attr('src', './img/prl-select.jpg');
//     }else if(adct1==1){
//         $(this).children('img').attr('src', '../img/prl-select.jpg');
//     }else if(adct1==2){
//         $(this).children('img').attr('src', '../../img/prl-select.jpg');
//     }
//     $(this).children('ul').hide();
// });

// $('.selectPub ul li').click(function(){
//     event.stopPropagation();
//     $(this).parent().parent().attr('data-selectedindex', $(this).attr('data-index'));
//     $(this).parent().parent().find('span').text($(this).text());
//     if(adct1==0){
//         $(this).parent().parent().children('img').attr('src', './img/prl-select.jpg')
//     }else if(adct1==1){
//         $(this).parent().parent().children('img').attr('src', '../img/prl-select.jpg')
//     }else if(adct1==2){
//         $(this).parent().parent().children('img').attr('src', '../../img/prl-select.jpg')
//     }

//     $(this).parent().css('display','none');
// });

$(function () {
    //分页的  下面框的宽度
    $(".pagination li").each(function (idx,item) {

        if($(item).find("a").text()=="上一页"||$(item).find("a").text()=="下一页"){
            $(item).find('a').css("width","40px");
        }else if($(item).find("a").text()=="首页"||$(item).find("a").text()=="尾页"){
            $(item).find('a').css("width","40px");
        }
    })
    // 所有的显示条数 先隐藏
    $(".select span").each(function (idx,item) {
        if($(item).text()=="显示条数"){
            $(item).parent().css("display","none");
        }
    })
})
//查询按钮 统一设置样式
$(".searchResultBtn.btn.input").css({"float":"right","margin-top":"11px","margin-left":"0","margin-right":"8px"});




// //刷新按钮
// $(".cfRefresh").click(function () {
//     location.reload();
// })
//模拟点击 框
$(".cf_select").click(function () {
    $(this).toggleClass("on");
})

// 伪alert弹框    //type  1成功   2失败    msg消息   （注：点击该alert框的关闭或者确认，所有弹框将会被关闭，并且刷新当前页面）
function cf_alert(type,msg) {
    if(type==1){
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