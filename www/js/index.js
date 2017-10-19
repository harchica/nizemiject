
$(function() {
    // 文字列をシャッフルして指定文字数を取得
    function random(len, source) {
        var result = '';
        var sourceLen = source.length;
        for (var i = 0; i < len; i++) {
            result += source.charAt(Math.floor(Math.random() * sourceLen));
        }
        return result;
    }

$(function() {
    var cnt = 0 +1;
     var touch_time = 0;
  var touched = false;
  $("#add").bind({
    'touchstart mousedown': function(e) { // PCにも対応させるなら、touchstartではなくmousedown
      touched = true;
      document.interval = setInterval(function(){
        touch_time += 10;
        if (touch_time == 1000) {
          // ロングタップ(タップから約1秒)時の処理
          alert('送信ボタン出現!');
    var div_element = document.createElement("div");
    div_element.innerHTML = '<br>Good:<span id="g_cnt">' +(cnt-1) +'</span><br>Nowemo: <br><input name="textBox1" id="g_emo" type="text" value="" placeholder="Now Emo" /><br><button  id="sendButton" onclick="sendResult();">Send</button><br>';
    var parent_object = document.getElementById("g_form");
    parent_object.appendChild(div_element);}      
      }, 100);
      e.preventDefault(); // このイベントに紐つく動作をキャンセル
    },
    'touchend mouseup ': function(e) {
      if (touched) {
          if (touch_time < 5000 ) {
              touch_time -= 500;
        $('.good_div').css('background-color','rgba(247,'+(247-cnt)+','+(247-cnt)+',1)');
         $('#add').css('background-color','rgba(247,'+(247-cnt)+','+(247-cnt)+',1)');
        // 外枠のDIVを作成
        var elm_div = $('<li />', {
        	css: {
				display: 'none',
                width: '50%',
                borderColor: '#'+random(6, 'ABCDEF')
			}
		}).addClass('wrap');

        // テキストを追加
        elm_div.html((cnt++) + " good");

        $('#contents').children().animate({width: '50%', height: 'hide', opacity: 'hide', fontSize: '16px'}, 'normal', function () {
            $(this).remove();
        });
        touch_time -= 300;
        // contentsに作成したDIVを追加
        elm_div.appendTo($('#contents'));
        // 表示！
    	elm_div.animate({width: '98%', height: 'show', opacity: 'show', fontSize: '16px'}, 'normal');
        
        // ボタンにフォーカスをセット
        $(this).focus();
        touch_time -= 300;
      }
              touch_time -= 300;
      }
      touched = false;
      e.preventDefault();
    }
  });
});


    // 「追加」ボタンの処理
 
});

$(function() {
    // 文字列をシャッフルして指定文字数を取得
    function random(len, source) {
        var result = '';
        var sourceLen = source.length;
        for (var i = 0; i < len; i++) {
            result += source.charAt(Math.floor(Math.random() * sourceLen));
        }
        return result;
    }
    
$(function() {
    var b_cnt = 0 +1;
     var touch_time = 0;
  var touched = false;
  $("#b_add").bind({
    'touchstart mousedown': function(e) { // PCにも対応させるなら、touchstartではなくmousedown
      touched = true;
      document.interval = setInterval(function(){
        touch_time += 10;
        if (touch_time == 15000) {
          // ロングタップ(タップから約1秒)時の処理
          alert('送信ボタン出現！');
    var bdiv_element = document.createElement("div");
    bdiv_element.innerHTML = '<br>Bad:<span id="bb_cnt">' +(b_cnt-1) +'</span><br>Nowemo: <br><input name="textBox1" id="b_emo" type="text" value="" placeholder="Now Emo" /><br><button id="b_sendbutton" onclick="sendbResult();">Submit</button><br>';
    var parent_object = document.getElementById("b_form");
    parent_object.appendChild(bdiv_element);
    }
    

      }, 100);
      e.preventDefault(); // このイベントに紐つく動作をキャンセル
    },
    'touchend mouseup ': function(e) {
      if (touched) {
          if (touch_time < 3000 ) {
              touch_time -= 500;
         $('.bad_div').css('background-color','rgba('+(147-b_cnt)+','+(147-b_cnt)+',147,1)');
         $('#b_add').css('background-color','rgba('+(147-b_cnt)+','+(147-b_cnt)+',147,1)');
               touch_time -= 100;
        // 外枠のDIVを作成
        var elm_div = $('<li />', {
    		css: {
				display: 'none',
                width: '50%',
                borderColor: '#'+random(6, 'ABCDEF')
			}
		}).addClass('wrap');

        // テキストを追加
        elm_div.html((b_cnt++) + " bad");
        touch_time -= 100;
        $('#b_contents').children().animate({width: '50%', height: 'hide', opacity: 'hide', fontSize: '16px'}, 'normal', function () {
            $(this).remove();
        });

        // contentsに作成したDIVを追加
        elm_div.appendTo($('#b_contents'));
        // 表示！
    	elm_div.animate({width: '98%', height: 'show', opacity: 'show', fontSize: '16px'}, 'normal');
        touch_time -= 100;
        // ボタンにフォーカスをセット
        $(this).focus();
      }
      }
      touched = false;
      e.preventDefault();
    }
  });
});


    // 「追加」ボタンの処理
 
});

//ncmb


