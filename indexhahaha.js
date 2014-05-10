(function(){

// 插入 <ul> 之 <li> 樣板
var tmpl = '<li><input type="text"><span></span></li>',
    addButton = $('#add'),
    connected = $('.connected'),      // 三個 <ul>
    placeholder = $('#placeholder'),  // 三個 <ul> 的容器
    mainUl = $('.main'),              // main <ul>
    deleteUl = $('.delete'),          // delete <ul>
    doneUl = $('.done');              // done <ul>
    start_id = 0;
// 點擊按鈕時，插入新項目
//
addButton.on('click', function(){
  $(tmpl).prependTo(mainUl).addClass('is-editing').find('input').focus();
});

// 按 Enter 鍵時完成編輯並存檔
//
mainUl.on('keyup', 'input', function(e){
  // 若目前的鍵是「enter」
  if(e.which === 13){
    var input = $(this), li = input.parents('li');

    var newitem = {
      texing: input.val(),
      is_done: 0
    }

    // 把 <input> 的值複製到 <span> 裡
    li.find('span').text( input.val() );
    
    // 取消 <li> 的編輯模式（is-editing class）
    li.removeClass('is-editing');

    // 把整個表存進 localStorage
    //save();
    $.ajax({
            type: 'POST',
            data: newitem,
            url: '/items',
            dataType: 'JSON'
        }).done(function( response ) {
            // Check for successful (blank) response
            
            console.log('create successed');
        });
  }
});

// 從 localStorage 讀出整個表，放進 ul
load();

// 把 ul 初始化為 sortable
mainUl.sortable();
deleteUl.sortable();
doneUl.sortable();

$( ".main" ).sortable( "option", "connectWith", ".delete, .done" );

mainUl.on('sortstart', function(event, ui){
  console.log('sort_start',ui.item);
  start_id = ui.item.index();
	placeholder.addClass('is-dragging');
});



deleteUl.on('sortreceive', function(event, ui){

 //  var temp_id;
 //  var temp_text = ui.item.find('span').text();
	// console.log('del receiving:',ui.item.find('span').text());
  
  // for ( var i=0 ; i< big_table.length ; i+=1){
  //   if( temp_text === big_table[i].texing){
  //       temp_id = big_table[i].id;
  //       console.log('deleting',temp_id);
  //   }
  // }

  $.ajax({
            type: 'DELETE',
            url: '/items/' + start_id
        }).done(function( response ) {

            // Check for a successful (blank) response
            console.log('delete successed');
        });

  $(ui.item).remove();

	//save();
  // big_table.splice(temp_id, 1);
  // for (i =0; i<big_table.length ; i++ ){
  //   big_table[i].id = i ;
  // }

});

doneUl.on('sortreceive', function(event, ui){

  // var temp_id;
  // var temp_text = ui.item.find('span').text();
  // console.log('done receiving:',ui.item.find('span').text());

  // for ( var i=0 ; i< big_table.length ; i+=1){
  //   if( temp_text === big_table[i].texing){
  //       temp_id = big_table[i].id;
  //       big_table[i].is_done =1 ;
  //       console.log('updating',temp_id);
  //   }
  // }

	$(ui.item).prependTo(tmpl).appendTo(mainUl).addClass('is-done');

  $.ajax({
       type: 'PUT',
       url: '/items/' + start_id
   }).done(function( response ) {

       // Check for a successful (blank) response
       console.log('update successed');
   });
	//save();
});


// 當拖曳結束時要存檔
mainUl.on('sortstop', function(event, ui){
  placeholder.removeClass('is-dragging',ui);
  var stop_id = ui.item.index() ; 
  // var temp_id;
  // var temp_pos;
  // var temp_text = ui.item.find('span').text();

  // for ( var i=0 ; i< big_table.length ; i+=1){
  //   if( temp_text === big_table[i].texing){
  //       temp_id = big_table[i].id;
  //       temp_pos = i;
  //       // console.log('sort_stop',temp_id);
  //   }
  // }

  console.log('sort_stop',stop_id);
  
  if(ui.item.hasClass('is-done')){
    stop_id = -1;
  }


  if (stop_id > -1 ){
    $.ajax({
       type: 'PUT',
       url: '/items/' + start_id +'/reposition/'+ stop_id
    }).done(function( response ) {

       // Check for a successful (blank) response
       console.log('reposition successed');
    });
  }


  //  for (i =0; i<big_table.length ; i++ ){
  //   big_table[i].id = i ;
  // }

});

// // 把整個項目表存進 localStorage
// //
// function save(){
//   // 準備好要裝各個項目的空陣列
//   var arr = [];

//   // 對於每個 li，
//   // 把 <span> 裡的文字放進陣列裡
//   mainUl.find('span').each(function(event, ui){

//   arr.push({
//     is_done: $(this).parent('li').hasClass( "is-done" ),
//     texing: $(this).text()
//     });

//   });

//   // 把陣列轉成 JSON 字串後存進 localStorage
//   localStorage.todoItems = JSON.stringify(arr);  
// }

// 從 localStorage 讀出整個表，放進 <ul>
//
function load(){

  $.get(
    '/items',
    {},
    function(arr){
    // 拿到從server傳回的data
    // var arr = JSON.parse( data ), i;
    // 對於陣列裡的每一個項目，插入回 ul 裡。
      for(i=0; i<arr.length; i++){
        if(arr[i].is_done==='1'){
          $(tmpl).appendTo(mainUl).addClass('is-done').find('span').text(arr[i].texing);
        }
        else{
          $(tmpl).appendTo(mainUl).find('span').text(arr[i].texing);
        }};
    },
    'json'
  );

// 從 localStorage 裡讀出陣列 JSON 字串
  // 把 JSON 字串轉回陣列
  
  // // 對於陣列裡的每一個項目，插入回 ul 裡。
  // for(i=0; i<arr.length; i+=1){
  //   if(arr[i].is_done){
  //     $(tmpl).appendTo(mainUl).addClass('is-done').find('span').text(arr[i].texing);
  //   }
  //   else{
  //     $(tmpl).appendTo(mainUl).find('span').text(arr[i].texing);
  //   }

  // };
}

}());
