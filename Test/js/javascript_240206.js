alert('Hi? i am alert') //확인창
console.log('개발자 모드에서만 확인 가능한 메시지') //코딩 결과를 확인하기 위한 용도

var a = '한글' //a라는 변수에 한글 이라는 값을 저장
a = '대한' //기존에 저장된 값을 지우고 다시 대한 이라는 값을 저장
a = 1 //작은따옴표가 없는 숫자는 연산이 가능하다.
var b = 4
console.log(a)
var c = a + b
if(c == 5){ //()안의 조건이 맞을경우 실행
    console.log('c는 5다.')
}
if(c != 5){ //만일 c가 5가 아니라면
    console.log('c는 5가 아니였다.')
}
var d = 10
if(d > 10){
    console.log('d는 10 초과이다.')
}else{ //if의 조건이 틀리면 실행
    console.log('d는 10 이하이다.')
}
var f = 30
if(f > 30){
    console.log('f는 30 초과')
}else if(f < 30){
    console.log('f는 30 미만')
}else{
    console.log('f는 30')
}

var e = '안녕' //var - 중복선언 가능
console.log(e)

let abc = '대한' //중복선언을 막아준다.
console.log(abc)

const bbb = 'jquery'
console.log(bbb)
//bbb = 'kquery' 처음에 선언한 값 이외엔 선언불가

//------------jquery--------------

let box_w = $('.box').width()
console.log(box_w) //js는 순서대로 html을 로딩하기 때문에 html을 모두 로딩한뒤에 실행해야 제대로 값을 불러온다. 
$(document).ready(function(){ //html 모두 로딩된 이후 1번 실행
    let box_h = $('.box').height()
    console.log(box_h)

    $(window).resize(function(){ //브라우저 사이즈가 변경 될때마다 실행
        let window_w = $(window).width()
        console.log(window_w)
    })

    $(window).scroll(function(){ //스크롤 할때마다 실행
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
    })


    /*box에 마우스를 올리면 active 클래스를 추가
    반대로 마우스를 내리면 active 클래스를 제거*/
    $('.box').on('mouseenter', function(){ //마우스를 box에 오버 했을때
        // $('.box').addClass('active') - 모든 box에 클래스가 추가됨
        $(this).addClass('active') // 마우스를 오버한 대상만 클래스가 추가됨
    })
    $('.box').on('mouseleave', function(){
        $(this).removeClass('active')
    })


    $('.box1').animate({ //box1은 4초(4000)동안 opacity가 0으로 점점 변하는 애니메
        opacity : 0
    }, 4000)

    
    $('.btn_top').on('click', function(){ /* btn_top을 누르면 상단으로 자동 스크롤 */
        $('html, body').animate({
            scrollTop : 0
        }, 600)
    })
})