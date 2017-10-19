
var apikey    = "6481af6e91c05d4d9ca11d732a0dafc3192f71f4157167f2b25a22c831b567f7";
var clientkey = "e2dee1f57b754c3e6ee70aa958e98b608c935a712b8562a0f361b30b6236d086";
var ncmb      = new NCMB(apikey, clientkey);



function sendResult() {
  var Message = ncmb.DataStore("Message");
  var message = new Message();
  
  var memo =  document.getElementById("g_emo").value;
          //target.innerText = document.id_form1.id_textBox1.value;//これでもOK
   var element =   $('#g_cnt').html();
    if(element == undefined){
        window.alert("goodが未定義、お前の人生も未定義");
    
    }
  message.set("result", memo)
         .set("good", element)
         .set("bad",0)
         .save()
         .then(function(){
          window.alert("送信完了！");
              window.location.href = "index.html";
         })
         .catch(function(err){
          window.alert("送信失敗…");
         })
         
}

//bad送信
function sendbResult() {
  var Message = ncmb.DataStore("Message");
  var message = new Message();
  
  var b_memo =  document.getElementById("b_emo").value;
          //target.innerText = document.id_form1.id_textBox1.value;//これでもOK
   var b_element =   $('#bb_cnt').html();
    if(b_element == undefined){
        window.alert("badが未定義、お前の人生も未定義");
    
    }
  message.set("result", b_memo)
         .set("good", 0)
         .set("bad",b_element)
         .save()
         .then(function(){
          window.alert("送信完了！");
         window.location.href = "index.html";
         })
         .catch(function(err){
          window.alert("送信失敗…");
         })
         .doReload();
}

function recieveResult() {
  var Message = ncmb.DataStore("Message");

  Message.fetchAll()
         .then(function(result){
           //最新の一件を取得する
           result = result[result.length - 1].get("result");
           // contents[Math.floor(Math.random() * contents.length)].get("contents")
            window.alert("前回送ったのは「" + result + "」だよ！");
          })
         .catch(function(err){
            window.alert("取得できませんでした…");
          });
}