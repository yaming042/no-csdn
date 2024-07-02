(function(){
    let openNoCSDN = localStorage.getItem('__bd_no_csdn') !== 'false';

    const listenBtn = () => {
        const div = document.getElementById('no-csdn-btn');
        openNoCSDN = !openNoCSDN;
        localStorage.setItem('__bd_no_csdn', openNoCSDN.toString());
        if(openNoCSDN) { // 已经打开了
            div.classList.add('open');
        }else{
            div.classList.remove('open');
        }
    };
    // 创建开关按钮
    const createBtn = () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'no-csdn-btn');
        div.innerHTML = `<div class='no-btn-box'>No<br/>csdn</div>`;

        if(openNoCSDN) { // 已经打开了
            div.classList.add('open');
        }else{
            div.classList.remove('open');
        }

        div.addEventListener('click', listenBtn, false);
        document.body.appendChild(div);
    };
    // 监听表单提交
    const listenSubmit = () => {
        const searchForm = document.getElementById('form');

        if(!searchForm) return;

        searchForm.addEventListener('submit', function(e) {
            const btn = document.getElementById('no-csdn-btn');
            if(!btn) {
                btn.removeEventListener('click', listenBtn, false);
                createBtn();
            }

            if(!openNoCSDN) return;

            e.preventDefault();
            const kw = document.getElementById('kw');
            const url = `${location.origin}/s?q1=${decodeURIComponent(kw.value)}&q2=&q3=&q4=CSDN`;
            location.href = url;
        }, false);
    };

    createBtn();
    listenSubmit();
})();