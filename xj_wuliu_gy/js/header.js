// 公共头
var adct = document.getElementsByTagName('title')[0].getAttribute('adct');
//公共IP
var headerip = 'http://192.168.1.199:7777/service/';
// var headerip = 'http://192.168.1.83:7777/service/';
// var headerip = 'http://api.hdlsuper.com/service/';
// var headerip = 'http://api.test.hdlsuper.com/service/';

// var headerip = 'http://wl.api.xjv56.com/service/';

//获取地址栏参数，name:参数名称
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}

$.ajax({
    type:"get",
    url:headerip+"homePage/getNavigationLink",//v1.0
    cache:false,
    dataType: "json",
    async:false,
    headers: {

    },
    success: function(json) {
        //console.log(json);
        var str = "";
        $.each(json.data, function (idx, item) {
            if(idx==0){
                str += '<div class="cfnav cfnav'+(idx+1)+' on"><a href="'+item.navigationUrl+'">'+item.navigationName+'</a></div>'
            }else{
                str += '<div class="cfnav cfnav'+(idx+1)+'"><a href="'+item.navigationUrl+'">'+item.navigationName+'</a></div>'
            }


        })
        document.writeln("<header>\n" +
            "    <div class=\"headerTop\">\n" +
            "        <div class=\"mianCont\">\n" +
            "            <div class=\"headerTopLeft Lf\">\n" +
            "                <div>收藏本站</div>\n" +
            "                <div id=\"userNamePub\"></div>\n" +
            "                <div id=\"loginPub\" style=\"display: none;\"><a href=\"login.html\">登&nbsp;&nbsp;录</a><i style=\"margin: 0 20px;\">|</i><a href=\"registert.html\">注&nbsp;&nbsp;册</a></div>\n" +
            "                <div class=\"exit\" style=\"display: none;\">退出</div>\n" +
            "            </div>\n" +
            "            <div class=\"headerTopRight Rt\">\n" +
            "                <ul>\n" +
            "                    <li>\n" +
            "                        <div class=\"headerTopRightImg1 headerTopRightImg\"></div>\n" +
            "                        <div  class=\"Lf\"><a href=\"##\" class=\"goUser\">用户中心</a></div>\n" +
            "                    </li>\n" +
            "                    <li class=\"liline\"></li>\n" +
            "                    <!--<li>-->\n" +
            "                    <!--<div class=\"headerTopRightImg2 headerTopRightImg\"></div>-->\n" +
            "                    <!--<div  class=\"Lf\"><a href=\"##\">产品分类</a></div>-->\n" +
            "                    <!--</li>-->\n" +
            "                    <!--<li class=\"liline\"></li>-->\n" +
            "                    <li>\n" +
            "                        <div class=\"headerTopRightImg3 headerTopRightImg\"></div>\n" +
            "                        <div  class=\"Lf\"><a href=\"\">网址导航</a></div>\n" +
            "                    </li>\n" +
            "                    <li class=\"liline\"></li>\n" +
            "                    <li>\n" +
            "                        <div class=\"headerTopRightImg4 headerTopRightImg\"></div>\n" +
            "                        <div class=\"Lf\"><a href=\"javascript:;\">供应商入驻</a></div>\n" +
            "                    </li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"headerBot\">\n" +
            "        <div class=\"mianCont\">\n" +
            "            <div class=\"logo Lf\" style=\"width: 243px;height: 63px;margin: 0;margin-right: 129px;margin-left: 30px;\"></div>\n" +
            "            <div class=\"navList Lf\">\n" +str+
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</header>");
    },
    error:function(xhr,statues,error){

    }
});

// document.writeln("<header>\n" +
//     "    <div class=\"headerTop\">\n" +
//     "        <div class=\"mianCont\">\n" +
//     "            <div class=\"headerTopLeft Lf\">\n" +
//     "                <div>收藏本站</div>\n" +
//     "                <div id=\"userNamePub\"></div>\n" +
//     "                <div id=\"loginPub\" style=\"display: none;\"><a href=\"../login.html\">登&nbsp;&nbsp;录</a><i style=\"margin: 0 20px;\">|</i><a href=\"../registert.html\">注&nbsp;&nbsp;册</a></div>\n" +
//     "                <div class=\"exit\" style=\"display: none;\">退出</div>\n" +
//     "            </div>\n" +
//     "            <div class=\"headerTopRight Rt\">\n" +
//     "                <ul>\n" +
//     "                    <li>\n" +
//     "                        <div class=\"headerTopRightImg1 headerTopRightImg\"></div>\n" +
//     "                        <div  class=\"Lf\"><a href=\"account.html\" class=\"goUser\">用户中心</a></div>\n" +
//     "                    </li>\n" +
//     "                    <li class=\"liline\"></li>\n" +
//     "                    <!--<li>-->\n" +
//     "                    <!--<div class=\"headerTopRightImg2 headerTopRightImg\"></div>-->\n" +
//     "                    <!--<div  class=\"Lf\"><a href=\"##\">产品分类</a></div>-->\n" +
//     "                    <!--</li>-->\n" +
//     "                    <!--<li class=\"liline\"></li>-->\n" +
//     "                    <li>\n" +
//     "                        <div class=\"headerTopRightImg3 headerTopRightImg\"></div>\n" +
//     "                        <div  class=\"Lf\"><a href=\"\">网址导航</a></div>\n" +
//     "                    </li>\n" +
//     "                    <li class=\"liline\"></li>\n" +
//     "                    <li>\n" +
//     "                        <div class=\"headerTopRightImg4 headerTopRightImg\"></div>\n" +
//     "                        <div class=\"Lf\"><a href=\"javascript:;\">供应商入驻</a></div>\n" +
//     "                    </li>\n" +
//     "                </ul>\n" +
//     "            </div>\n" +
//     "        </div>\n" +
//     "    </div>\n" +
//     "    <div class=\"headerBot\">\n" +
//     "        <div class=\"mianCont\">\n" +
//     "            <div class=\"logo Lf\" style=\"width: 243px;height: 63px;margin: 0;margin-right: 129px;margin-left: 30px;\"></div>\n" +
//     "            <div class=\"navList Lf\">\n" +
//     "                <div class=\"cfnav cfnav1 on\"><a href=\"index.html\">首页</a></div>\n" +
//     "                <div class=\"cfnav cfnav2\"><a href=\"starTrade.html\">明星货主</a></div>\n" +
//     "                <div class=\"cfnav cfnav3\"><a href=\"starCarrier.html\">明星货运</a></div>\n" +
//     "                <div class=\"cfnav cfnav4\"><a href=\"##\">金融服务</a></div>\n" +
//     "                <!--<div class=\"cfnav cfnav5\"><a href=\"./OAplatform.html\">OA平台</a></div>-->\n" +
//     "                <div class=\"cfnav cfnav6\"><a href=\"dangerousGoods_search.html\">危化品查询</a></div>\n" +
//     "                <div class=\"cfnav cfnav7\"><a href=\"##\">交易平台</a></div>\n" +
//     "            </div>\n" +
//     "        </div>\n" +
//     "    </div>\n" +
//     "</header>");

window.onload=function () {
    if(getUrlParms("type")!=null && getUrlParms("token")!=null && getUrlParms("orderId")!=null){
        localStorage.setItem("company_type",1);
        sessionStorage.setItem("jiaoYiType",getUrlParms("type"));
        localStorage.setItem("token",getUrlParms("token"));
        sessionStorage.setItem("isfromjiaoyi",1);
        sessionStorage.setItem("fromjiaoyi_productName",hexToDec(getUrlParms("productName")));
        sessionStorage.setItem("fromjiaoyi_sum",getUrlParms("sum"));
        sessionStorage.setItem("fromjiaoyi_orderId",getUrlParms("orderId"));
        sessionStorage.setItem("fromjiaoyi_chemicalId",getUrlParms("chemicalId"));
        sessionStorage.setItem("fromjiaoyi_chemicalName",hexToDec(getUrlParms("chemicalName")));
        window.location.href="account.html"
    }
    if(localStorage.getItem("token")){
        //判断登录状态
        $.ajax({
            type:"post",
            url:headerip+"userSupplier/getUserInfoByToken",//v1.0
            cache:false,
            dataType: "json",
            async:false,
            headers: {
                token: localStorage.getItem("token")
            },
            success: function(json){
                //console.log(json);
                if(json.code == '1'){
                    $("#loginPub").hide();
                    $(".exit").show();
                    $('#userNamePub').html('你好，'+json.data.loginName);
                }else{
                    $("#loginPub").show();
                    $(".exit").hide();
                    $('#userNamePub').html('你好，游客');
                }
            },
            error:function(xhr,statues,error){

            }
        });
    }else{
        $("#loginPub").show();
        $(".exit").hide();
        $('#userNamePub').html('你好，游客');
    }

}
// $(function () {
//     if(localStorage.getItem("token")){
//         //判断登录状态
//         $.ajax({
//             type:"post",
//             url:headerip+"userCarriers/getUserInfoByToken",//v1.0
//             cache:false,
//             dataType: "json",
//             async:false,
//             headers: {
//                 token: localStorage.getItem("token")
//             },
//             success: function(json){
//                 //console.log(json);
//                 if(json.code == '1'){
//                     $("#loginPub").hide();
//                     $(".exit").show();
//                     $('#userNamePub').html('你好，'+json.data.loginName);
//                 }else{
//                     $("#loginPub").show();
//                     $(".exit").hide();
//                     $('#userNamePub').html('你好，游客');
//                 }
//             },
//             error:function(xhr,statues,error){
//
//             }
//         });
//     }else{
//         $("#loginPub").show();
//         $(".exit").hide();
//         $('#userNamePub').html('你好，游客');
//     }
//
//
// })


var hexToDec = function(str) {
    if(str==""){
        return "";
    }
    str=str.replace(/\@/g,"%");
    return unescape(str);
}

// alert("编码后："+str+"\n\n解码后："+hexToDec(str));
