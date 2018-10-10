// 公共头
var adct = document.getElementsByTagName('title')[0].getAttribute('adct');

var pubIP = 'http://192.168.1.199:7777/service/';
    $.ajax({
            type:"get",
            url:pubIP+"homePage/getFriendshipLink",//v1.0
            cache:false,
            dataType: "json",
            async:false,
            headers: {

            },
            success: function(json){
                //console.log(json);
                var str="";
                $.each(json.data,function (idx,item) {
                    str+='<a href="'+item.navigationUrl+'">'+item.navigationName+'</a>'
                })


                document.writeln(" <footer>\n" +
                    "        <div class=\"footerTop\">\n" +
                    "            <div class=\"mianCont\">\n" +
                    "                <div class=\"Lf ftphone\">\n" +
                    "                    <div class=\"Lf ftphoneImg ftImg1\">\n" +
                    "                        <!--<img src=\"./img/footer1.png\" alt=\"\">-->\n" +
                    "                    </div>\n" +
                    "                    <div class=\"Lf ftphoneText\">\n" +
                    "                        <div style=\"height: 28px;line-height: 28px;font-size: 27px;font-weight: 600;color: #FF7C3E;\">4000-012-556</div>\n" +
                    "                        <div style=\"height: 28px;line-height: 28px;font-size: 16px;color: #666666;\"><span style=\"font-size: 14px;\">工作日 : </span>10 : 00 am -19 : 00 pm</div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "                <div class=\"Lf footer2\">\n" +
                    "                    <div class=\"Lf ftImg ftImg2\" style=\"width: 56px;\">\n" +
                    "                        <!--<img src=\"./img/footer2.png\" alt=\"\">-->\n" +
                    "                    </div>\n" +
                    "                    <div class=\"Lf ftText\">\n" +
                    "                        <div style=\"font-size: 18px;font-weight: bold;color: #333333;\">在线客服</div>\n" +
                    "                        <div style=\"font-size: 14px;color: #666666;\">立即咨询</div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "                <div class=\"Lf footer3\" >\n" +
                    "                    <div class=\"Lf ftImg ftImg3\" style=\"width: 40px;\">\n" +
                    "                        <!--<img src=\"./img/footer3.png\" alt=\"\">-->\n" +
                    "                    </div>\n" +
                    "                    <div class=\"Lf ftText\">\n" +
                    "                        <div style=\"font-size: 18px;font-weight: bold;color: #333333;\">邮件客服</div>\n" +
                    "                        <div style=\"font-size: 14px;color: #666666;\">xjv56@163.com</div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "                <div class=\"Lf footer4\" >\n" +
                    "                    <div class=\"Lf ftImg ftImg4\" style=\"width: 56px;\">\n" +
                    "                        <!--<img src=\"./img/footer4.png\" alt=\"\">-->\n" +
                    "                    </div>\n" +
                    "                    <div class=\"Lf ftText\">\n" +
                    "                        <div style=\"font-size: 18px;font-weight: bold;color: #333333;\">微信公众号</div>\n" +
                    "                        <div style=\"font-size: 14px;color: #666666;\">扫码关注我们</div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "                <div class=\"Lf footer5\" >\n" +
                    "                    <div class=\"Lf ftImg ftImg5\" style=\"width: 56px;\">\n" +
                    "                        <!--<img src=\"./img/footer5.png\" alt=\"\">-->\n" +
                    "                    </div>\n" +
                    "                    <div class=\"Lf ftText\">\n" +
                    "                        <div style=\"font-size: 18px;font-weight: bold;color: #333333;\">微信公众号</div>\n" +
                    "                        <div style=\"font-size: 14px;color: #666666;\">扫码关注我们</div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footerCen mianCont\">\n" +
                    "            <div class=\"footerCen1 Lf\">\n" +
                    "                <h3> <div class=\"footerCenTitle\">新手上路</div></h3>\n" +
                    "                <div>新手注册</div>\n" +
                    "                <div>新手注册</div>\n" +
                    "                <div>新手注册</div>\n" +
                    "            </div>\n" +
                    "            <div class=\"footerCen2 Lf\">\n" +
                    "                <h3><div class=\"footerCenTitle\">用户中心</div></h3>\n" +
                    "                <div>如何发布产品</div>\n" +
                    "                <div>如何发布产品</div>\n" +
                    "                <div>如何发布产品</div>\n" +
                    "            </div>\n" +
                    "            <div class=\"footerCen3 Lf\">\n" +
                    "                <h3> <div class=\"footerCenTitle\">交易入门</div></h3>\n" +
                    "                <div>如何购买现货</div>\n" +
                    "                <div>如何购买现货</div>\n" +
                    "                <div>如何购买现货</div>\n" +
                    "            </div>\n" +
                    "            <div class=\"footerCen4 Lf\">\n" +
                    "                <h3><div class=\"footerCenTitle\">供应链服务</div></h3>\n" +
                    "                <div>金融服务</div>\n" +
                    "                <div>金融服务</div>\n" +
                    "                <div>金融服务</div>\n" +
                    "            </div>\n" +
                    "            <div class=\"line Lf\" style=\"width: 0;height: 105px;border-right: 1px solid #e8e8e8;margin-right: 100px;\"></div>\n" +
                    "            <div class=\"footerCen5 Lf\">\n" +
                    "                <div class=\"logo\" style=\"width: 295px;height: 77px;margin: 0;margin-top: 21px;\"></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"footerBot\">\n" +
                    "            <ul>\n" +
                    "                <li><a href=\"index.html\">首页</a></li>\n" +
                    "                <li class=\"liline\"></li>\n" +
                    "                <li><a href=\"##\">合作伙伴</a></li>\n" +
                    "                <li class=\"liline\"></li>\n" +
                    "                <li><a href=\"aboutUs.html\">关于我们</a></li>\n" +
                    "                <li class=\"liline\"></li>\n" +
                    "                <li><a href=\"connect.html\">联系我们</a></li>\n" +
                    "                <li class=\"liline\"></li>\n" +
                    "                <li><a href=\"legal.html\">服务条款</a></li>\n" +
                    "                <li class=\"liline\"></li>\n" +
                    "                <li><a href=\"##\">金融服务</a></li>\n" +
                    "            </ul>\n" +
                    "            <div></div>\n" +
                    "            <div class=\"friendList\">\n" +
                    "                <div class=\"Lf friendTitle\">友情链接：&nbsp;&nbsp;&nbsp;</div>" +str+
                    "            </div>\n" +
                    "            <div>Copyright&nbsp;&copy;&nbsp;2016 www.xjv56.com All Rights Reserved 新疆化学品经营服务平台版权所有&nbsp;新ICP备&nbsp;16002644</div>\n" +
                    "        </div>\n" +
                    "    </footer>");
            },
            error:function(xhr,statues,error){

            }
        });




    $(document).on('click', '.logo', function() {
        // var company_type = localStorage.getItem('company_type');
        // if (company_type == '1') { //供应商
        //     window.location.href="../index.html"
        // } else if (company_type == '2') {
        //     window.location.href="index.html"
        // } else if (company_type == '-1') {
        //     window.location.href="index.html"
        // }
        window.location.href="index.html"
    });
