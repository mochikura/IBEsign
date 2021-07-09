function KeyGen(){
    const userid=document.getElementsByName('userID')[0].value
    if(userid===""){
        document.getElementsByName('IDshow')[0].innerText=`キーを入力してください`
    }else {
        document.getElementsByName('IDshow')[0].innerText=`${userid}でキーを生成しました`
    }
}