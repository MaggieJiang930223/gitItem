var oName = document.getElementById('name')
var oCheckName = document.getElementById('checkName')

//姓名： 单词字符组成  6--10为 ，不能用数字开头
var checkUsername = function () {
    var reg = /^[a-zA-Z_$][a-zA-Z_$0-9]{5,9}$/;
    if (reg.test(oName.value)) {
        oCheckName.innerText = '√';
        oCheckName.style.color = 'green';
        return true;
    } else {
        oCheckName.innerText = '请输入6-10位正确的用户名,数字不能开头';
        oCheckName.style.color = 'red';
        return false;
    }
}
oName.onchange = checkUsername;

//年龄： 只能由数字组成  年龄不能为负数
var oAge = document.getElementById('age')
var oCheckAge = document.getElementById('checkAge')
var checkAge = function () {
    var reg1 = /^[1-9][0-9]$/;
    var oTestAge = reg1.test(oAge.value)
    if (oTestAge) {
        oCheckAge.innerText = '√';
        oCheckAge.style.color = 'green';
        return true;
    } else {
        oCheckAge.innerText = '请输入正确的年龄';
        oCheckAge.style.color = 'red';
        return false;
    }
}
oAge.onchange = checkAge;

//密码：6--18位字符组成
var oPassword = document.getElementById('pwd')
var oCheckPassword = document.getElementById('checkPassword')

var checkPassword = function () {
    var num1 = /^[a-zA-Z][a-zA-Z0-9]{5,17}$/
    var password = num1.test(oPassword.value)
    if (password) {
        oCheckPassword.innerText = '√';
        oCheckPassword.style.color = 'green';
        return true;
    } else {
        oCheckPassword.innerText = '请输入6-18位的正确密码';
        oCheckPassword.style.color = 'red';
        return false;
    }
}
oPassword.onchange = checkPassword;

//验证密码
var oRpassword = document.getElementById('qpwd')
var oRpasswordSpan = document.getElementById('confirmPassword')
var checkRpassword = function () {
    if (oPassword.value === oRpassword.value) {
        oRpasswordSpan.innerText = '√';
        oRpasswordSpan.style.color = 'green';
        return true;
    } else {
        oRpasswordSpan.innerText = '两次密码不一致';
        oRpasswordSpan.style.color = 'red';
        return false;
    }
}
oRpassword.onchange = checkRpassword;

//4、手机号： 15  13  18 17 19 开头
var oTel = document.getElementById('tel')
var oCheckTelephone = document.getElementById('checkTelephone')
var checkTel = function () {
    var reg2 = /^1(5|8|3|7|9)\d{9}$/
    var telephone = reg2.test(oTel.value)
    if (telephone) {
        oCheckTelephone.innerText = '√';
        oCheckTelephone.style.color = 'green';
        return true;
    } else {
        oCheckTelephone.innerText = '请输入正确的电话号';
        oCheckTelephone.style.color = 'red';
        return false;
    }
}
oTel.onchange = checkTel;

//5、qq ： 5--12位数字  第一位不能是数字
var oQQ = document.getElementById('qq')
var oCheckQQ = document.getElementById('checkQQ')
var checkQQ = function () {
    var reg3 = /^[1-9]\w{4,10}$/
    var QQ = reg3.test(oQQ.value)
    if (QQ) {
        oCheckQQ.innerText = '√';
        oCheckQQ.style.color = 'green';
        return true;
    } else {
        oCheckQQ.innerText = '请输入正确的QQ号';
        oCheckQQ.style.color = 'red';
        return false;
    }
}
oQQ.onchange = checkQQ;

//6、邮箱： 必须有@符号
var oEmail = document.getElementById('email')
var oCheckEmail = document.getElementById('checkEmail')
var checkEmail = function () {
    var reg4 = /^\w+@\w+(\.\w+)+$/
    var Email = reg4.test(oEmail.value)
    if (Email) {
        oCheckEmail.innerText = '√';
        oCheckEmail.style.color = 'green';
        return true;
    } else {
        oCheckEmail.innerText = '请输入正确的邮箱';
        oCheckEmail.style.color = 'red';
        return false;
    }
}
oEmail.onchange = checkEmail;

//7、邮编：6为数字
var oEml = document.getElementById('eml')
var oCheckPostCode = document.getElementById('checkPostCode')
var checkPostcode = function () {
    var reg5 = /^[1-9]\d{5}$/;
    var postCode = reg5.test(oEml.value)
    if (postCode) {
        oCheckPostCode.innerText = '√';
        oCheckPostCode.style.color = 'green';
        return true;;
    } else {
        oCheckPostCode.innerText = '请输入正确的邮编号';
        oCheckPostCode.style.color = 'red';
        return false;
    }
}
oEml.onchange = checkPostcode;

//8、身份证： 18位   最后一位考虑有x
var oSname = document.getElementById('sname')
var oCheckIdCardNumber = document.getElementById('checkIdCardNumber')
var checkIdcard = function () {
    var reg6 = /^[1-9][0-9]{16}(\d|x)$/;
    var IDnum = reg6.test(oSname.value)
    if (IDnum) {
        oCheckIdCardNumber.innerText = '√';
        oCheckIdCardNumber.style.color = 'green';
        return true;
    } else {
        oCheckIdCardNumber.innerText = '请输入正确的身份证号';
        oCheckIdCardNumber.style.color = 'red';
        return false;
    }
}
oSname.onchange = checkIdcard;

//9、验证码输入的验证码必须和红色框中的相同，  点击看不清可以实现验证码的切换验证码由字母  数字组成
var numArr = [];
for (var i = 48; i <= 57; i++) {
    numArr.push(String.fromCharCode(i))
}

var upperCase = [];
for (var i = 65; i <= 90; i++) {
    upperCase.push(String.fromCharCode(i))
}

var lowerCase = [];
for (var i = 97; i <= 122; i++) {
    lowerCase.push(String.fromCharCode(i))
}

var allArr = numArr.concat(upperCase, lowerCase)
// console.log(allArr)
var oCheckCode = document.getElementById('checkCode')
var oCheckCodeSpan = document.getElementById('checkCodeSpan')
var oCodePicture = document.getElementById('codePicture')
var oRes = document.getElementById('res')

oCodePicture.onclick = function () {
    var str = '';
    for (var i = 0; i < 4; i++) {
        str += allArr[Math.floor(Math.random() * allArr.length)]
    }
    oCheckCodeSpan.innerHTML = str;
}
var checkCode = function () {
    if (oCheckCode.value === oCheckCodeSpan.innerHTML) {
        oRes.innerHTML = '√';
        oRes.style.color = 'green'
        return true;
    } else {
        oRes.innerHTML = '请重新输入验证码';
        oRes.style.color = 'red';
        return false;
    }
}
oCheckCode.onchange = checkCode;

//10、爱好和性别必选
var oSubmitBtn = document.getElementById('submitBtn')
// var oA = document.getElementsByName('a')
// var oSex = document.getElementsByName('sex')
$('#submitBtn').bind('click', function () {
    // console.log(666)
    if (checkUsername() !== true) {
        return;
    }
    if (!$('#male')[0].checked && !$('#female')[0].checked) {
        return;
    }
    if (checkAge() !== true) {
        return;
    }
    if (checkPassword() !== true) {
        return;
    }
    if (checkRpassword() !== true) {
        return;
    }
    if (checkTel() !== true) {
        return;
    }
    if (checkQQ() !== true) {
        return;
    }
    if (checkEmail() !== true) {
        return;
    }
    if (checkPostcode() !== true) {
        return;
    }
    if (checkIdcard() !== true) {
        return;
    }
    if (checkCode() !== true) {
        return;
    }
    // console.log(666)
    $.ajax({
        type: 'POST',
        url: 'http://10.36.135.89/ctrip/register.php',
        data: {
            username: $('#name').val(),
            sex: $('#male')[0].checked ? '男' : '女',
            age: $('#age').val(),
            password: $('#pwd').val(),
            confirmpassword: $('#qpwd').val(),
            telnum: $('#tel').val(),
            qqnum: $('#qq').val(),
            email: $('#email').val(),
            postcode: $('#eml').val(),
            idcard: $('#sname').val()
        },
        success: function (msg) {
            if (msg == 1) {
                location.href = 'https://www.ctrip.com/';
                alert('注册成功')
            }
            if (msg == 0) {
                alert("请重新注册");
            }

        }
    })
})
