


function KeyGen(){
    const userid=document.getElementsByName('userID')[0].value
    const msg=document.getElementsByName('msg')[0].value
    document.getElementsByName('IDshow')[0].innerText=`${userid}でキーを生成しました`
    mcl.init(mcl.BLS12_381).then(()=>{
        document.getElementsByName('status')[0].innerText=`mcl.BLS12_381で設定しました。`
    })
    document.getElementsByName('msgshow')[0].innerText=`${msg}をメッセージとしました`
}

function SignGen(){
    document.getElementsByName('signgen')[0].innerText="署名を生成しました。"
}