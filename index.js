const dg = document;
const cart = 0;
const gotoPage = () => {
    dg.getElementById('start-button').style.backgroundColor = "transparent";
    dg.getElementById('start-button').style.color = "#307FE2";
    dg.getElementById('start-button').innerHTML = "이동중......";
    setTimeout(()=>{
        location.href="./main.html";
    }, 2000);
}

const msg_time = () => {
    let stDate = new Date().getTime();
    let edDate = new Date('2021-08-21 24:00:00').getTime(); // 종료날짜
    let RemainDate = edDate - stDate;

    let hours = Math.floor((RemainDate % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let miniutes = Math.floor((RemainDate % (1000 * 60 * 60)) / (1000*60));
    let seconds = Math.floor((RemainDate % (1000 * 60)) / 1000);
    
    let m = hours + ":" +  miniutes + ":" + seconds ; // 남은 시간 text형태로 변경
    
    dg.getElementById('count').innerHTML = `<div>매점 종료시각까지 : ${m}</div>`;   // div 영역에 보여줌 
    
    if (RemainDate < 0) {      
        dg.getElementById('count').innerHTML = `<div>매점 종료!</div>`;
    }else{
        RemainDate = RemainDate - 1000; // 남은시간 -1초
    }
}
const Initialize = () => {
    setInterval(msg_time,100);
}
const gotoCart = () => {
    alert('장바구니에 추가되었습니다');
    location.reload();
}
Initialize();