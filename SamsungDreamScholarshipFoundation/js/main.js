$(document).ready(function(){
	console.log('おはよう');
    /*스크롤 했을때 맨 위면 fixed 삭제
    맨 위가 아닐때 스크롤하면 fixed 추가*/
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()//스크롤 된 정도를 표시하는 값
        console.log(scrolling)
        //스크롤 인식
        if(scrolling > 0){//조건문 "스크롤값이 0보다 크면"
            //console.log('0보다 큼')
            $(".header").addClass("fixed");	
        }else{//0일때
            //console.log('0이다')
            $(".header").removeClass("fixed");
        }
        
    });
});
