/**
 * Created with IntelliJ IDEA.
 * User: Family
 * Date: 13-6-1
 * Time: 上午12:11
 * To change this template use File | Settings | File Templates.
 */
/*;(function($){
    $.fn.extend({
        "strSubset":function(option){
            option= $.extend({

            });
        }
    });
})(jQuery);*/
$(function () {
    var $p = $('.p');
    var str = $p.html();//取得需要截取的内容
    var colLen = 8; //单行字符数
    var rowStart = 0;//首行的起始值
    var rowLen = 5;//截取的行数
    var newStr = "";//定义输出字符串
    var tempStr = "";//临时字符串

    for (var m = 1; m <= rowLen; m++) {
        //第一次截取的初始值存入临时字符串中
        tempStr = str.substr(rowStart, colLen);
        //取得临时字符串内的英文字符及阿拉伯数字
        var tempChar = tempStr.match(/[a-z0-9A-Z]/g);
        var charLen = 0;//每行的初初始英文及阿拉伯数字数量

        if (tempChar) {
            //如果存在英文及阿拉伯数字则执行
            charLen = tempChar.length;//临时字符串中的英文及阿拉伯数字数量
            //根据英文及阿拉伯数字数量延长本行截取的字符数，遇汉字减少一位
            for (var i = 0; i < charLen; i++) {
                //若某一位是汉字则减少一位字符
                if (str.charCodeAt(rowStart + colLen + i) > 255) {
                    charLen--;
                }
            }
        }
        //原字符串与本行连接形成新字符串
        newStr += str.substr(rowStart, colLen + charLen);
        //新行截取的起始值
        rowStart += (colLen + charLen);
    }

    $('.pTemp').html(newStr);
});

