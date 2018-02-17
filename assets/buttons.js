function create_db_thing(){
  var obj = {
    thing_name: $( "#thing_name").val(),
    type: "create"
  };

  $.ajax({
    url: window.location.pathname,
    method: "POST",
    data: JSON.stringify( obj),
    dataType: "html",
    processData: false,
    contentType: "application/json; charset=utf-8"
  });
};

function update_db_thing(){
  var obj = {
    thing_name: $( "#update_name").val(),
    thing_time: $( "#update_time").val(),
    type : "update"
  };

  console.log( obj);

  $.ajax({
    url: window.location.pathname,
    method: "POST",
    data: JSON.stringify( obj),
    dataType: "html",
    processData: false,
    contentType: "application/json; charset=utf-8"
  });
};

function delete_db_thing(){
  var obj = {
    thing_name: $( "#delete_name").val(),
    type: "delete"
  };

  $.ajax({
    url: window.location.pathname,
    method: "DELETE",
    data: JSON.stringify( obj),
    dataType: "html",
    processData: false,
    contentType: "application/json; charset=utf-8"
  });
};

$( "#create").bind( "click", ()=>{
  console.log( "create clicked");
  create_db_thing();
  location.reload();
});
$( "#update").bind( "click", ()=>{
  console.log( "update clicked");
  update_db_thing();
  location.reload();
});
$( "#delete").bind( "click", ()=>{
  console.log( "delete clicked");
  delete_db_thing();
  location.reload();
});
/*$( "#read").bind( "click", ()=>{
  console.log( "read clicked");
  location.reload();
});*/
