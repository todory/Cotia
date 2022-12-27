$(document).ready(function(){
    $('.mov').click(function(){
        $('.video').stop().slideDown();
    });
    $('.mov').click(function(){
        $('.mov_btn').stop().slideDown();
    });
    $('.mov_close').click(function(){
        $('.video').stop().slideUp();
    });
    $('.mov_close').click(function(){
        $('.mov_btn').stop().slideUp();
    });

    $('.faq_tg').click(function(){
        $('.faq_fade').hide();
        $(this).parent().next().stop().slideToggle();
    });


    $('.notice_list').click(function(){
        $('.notice_fade').hide();
        $(this).next().stop().slideToggle();
    });
    
    
});

// DOM 객체 탭메뉴명 변수로 할당
var tab = $('.about_menu').find('li');
// 콘솔창 tab의 갯수 출력
console.log('tab메뉴 li갯수:' + tab.length);

// 구조에서 값을 보내주면 매체로 받아 연결
// Event Listener
var i;
function tab_menu(num) {
    // alert('aa');
    for(i=0;i<tab.length;i++){
        if(num == i){
            // a. active 클래스 적용
            tab.eq(i).addClass('active');
            // b. 콘텐츠 보여주기 
            $('.tab_content_0'+i).show(300);
        }else {
            // a_1. active 클래스 제거
            tab.eq(i).removeClass('active');
            // b_1. 나머지 콘텐츠 가리기
            $('.tab_content_0'+i).hide(300);
        }
        if(num == i){
            // a. active 클래스 적용
            tab.eq(i).addClass('active');
            // b. 콘텐츠 보여주기 
            $('.tab_img_0'+i).slideDown(300);
        }else {
            // a_1. active 클래스 제거
            tab.eq(i).removeClass('active');
            // b_1. 나머지 콘텐츠 가리기
            $('.tab_img_0'+i).slideUp(300);
        }
        if(num == i){
            // a. active 클래스 적용
            tab.eq(i).addClass('active');
            // b. 콘텐츠 보여주기 
            $('.tab_spot_0'+i).show();
        }else {
            // a_1. active 클래스 제거
            tab.eq(i).removeClass('active');
            // b_1. 나머지 콘텐츠 가리기
            $('.tab_spot_0'+i).hide();
        }
    }
}


// 슬라이드 인덱스 초기 변수값 설정 = 1
var slideIndex = 1;
// 실제 수동 슬라이드 동작 함수 호출
// 초깃값 1로 시작 = 첫번째 이미지가 로딩시 화면에 나오도록 하기 위함.
showSlide(slideIndex);

// 슬라이드 좌우이미지 클릭 EventListener | 매개변수 -1, 1
function plusSlides(num){
    // 이벤트 발생시 showSlide()구현 함수에 변동된 매개변수값 넘겨줌, 함수호출
    showSlide(slideIndex += num);
};

// Dot 클릭시 이벤트리스너 | 매개변수 1, 2, 3
function currentSlides(num){
    // 이벤트 발생시 showSlide()구현 함수에 변동된 매개변수값 넘겨줌, 함수호출
    showSlide(slideIndex = num);
};

// 실제 수동 슬라이드 동작 함수
function showSlide(num){
    var i;
    var slide = $('.slide');
    // 콘솔창 출력 .slide 갯수 | '슬라이드 갯수 :' ???
    console.log('slide 갯수 :' + slide.length);

// 1. 좌우 화살표 클릭시 수동 슬라이드 구현
    // 1-1. 매개변수값이 슬라이드 박스 갯수(여기서는 3)보다 크면 slideIndex 값을 초기값 1로 세팅
    if(num >slide.length){
        slideIndex = 1;
    };
    // 1-2. 매개변수값이 0이하면 slideIndex 값을 슬라이드 박수 갯수로 세팅
    if(num < 1){
        slideIndex = slide.length;
    };

// 2. 수동 슬라이드 구현
    // 2-1. 모든 슬라이드 이미지 박스 가림
    for(i=0;i<slide.length;i++){
        $('.slide').eq(i).css({display:'none'});
    };
    // 맨 처음 이미지 나오도록 코딩 + 클릭시 다음, 이전 이미지 구현됨.
    $('.slide').eq(slideIndex -1).css({display:'block'});
};