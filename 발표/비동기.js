function time(){

        const 처음= Date.now();
        for(let i=0; i<100000; i++){    
        }
        const 끝= Date.now();
        console.log(끝 - 처음 +'ms');
}

console.log('이전 작업');
time();
console.log('다음 작업');

-----------------------------------------------------
function time(){
    setTimeout(()=> {
        const 처음= Date.now();
        for(let i=0; i<100000; i++){    
        }
        const 끝= Date.now();
        console.log(끝 - 처음 +'ms');
    },0)
}

console.log('이전 작업');
time();
console.log('다음 작업');
--------------------------------------------------------
function time(){
    setTimeout(()=> {
        const 처음= Date.now();
        for(let i=0; i<100000; i++){    
        }
        const 끝= Date.now();
        console.log(끝 - 처음 +'ms');
    },1000)
}

console.log('이전 작업');
time();
console.log('다음 작업');

--------------------------------------------------------
function time(callback){
    setTimeout(()=> {
        const 처음= Date.now();
        for(let i=0; i<100000; i++){    
        }
        const 끝= Date.now();
        console.log(끝 - 처음 +'ms');
        callback();
    },0)
}

console.log('이전 작업');
time(()=>{
    console.log('작업이 끝났습니다.');
});
console.log('다음 작업');
