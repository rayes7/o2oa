var service_base_path = '../jaxrs/log';
function data_get_log( ) {
	var service_url = $("#service_url").val();
	var query_url =  service_base_path + "/" + service_url;
	
	//获取用户所填写的参数
	var id = $("#id").val();
	var appId = $("#appId").val();
	var name = $("#name").val();
	var last_id = $("#last_id").val();
	var count = $("#count").val();
	
	//根据参数组织URL
	if( "{id}" == service_url ){
		query_url = query_url.replace( "{id}",id );
		if( id == null || id == "" || id == undefined){
			alert("请填写ID");return false;
		}
	}else if( "list/app/{appId}" == service_url ){
		query_url = query_url.replace( "{appId}",appId );
		if( appId == null || appId == "" || appId == undefined){
			alert("请填写appId");return false;
		}
	}else if( "list/app/{appId}/name/{name}" == service_url ){
		query_url = query_url.replace( "{appId}",appId );
		query_url = query_url.replace( "{name}",name );
		if( appId == null || appId == "" || appId == undefined){
			alert("请填写appId");return false;
		}
		if( name == null || name == "" || name == undefined){
			alert("请填写name");return false;
		}
	}else if( "list/{id}/next/{count}" == service_url ){
		query_url = query_url.replace( "{id}",last_id );
		query_url = query_url.replace( "{count}",count );
		if( last_id == null || last_id == "" || last_id == undefined){
			alert("请填写last_id");return false;
		}
		if( count == null || count == "" || count == undefined){
			alert("请填写count");return false;
		}
	}else if( "list/{id}/prev/{count}" == service_url ){
		query_url = query_url.replace( "{id}",last_id );
		query_url = query_url.replace( "{count}",count );
		if( last_id == null || last_id == "" || last_id == undefined){
			alert("请填写last_id");return false;
		}
		if( count == null || count == "" || count == undefined){
			alert("请填写count");return false;
		}
	}
    $.ajax({
		type : 'get',
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		url : query_url,
		xhrFields : {
		    'withCredentials' : true
		},
		crossDomain : true
    }).done(function(json) {
    	$('#result').html( JSON.stringify( json, null, 4) );
    }).fail(function(json) {
    	failure(json);
    });
}

function data_put_log( id ) {
	if( id == null || id == undefined || id == "" ){
		alert("请输入ID");
		return false;
	}
    $.ajax({
		type : 'put',
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		url : service_base_path + "/" + id,
		xhrFields : {
		    'withCredentials' : true
		},
		data : JSON.stringify($.parseJSON($('#content').val())),
		crossDomain : true
    }).done(function(json) {
    	$('#result').html(JSON.stringify(json.data, null, 4));
    });
}

function data_post_log( id ) {
    $.ajax({
		type : 'post',
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		url : service_base_path ,
		xhrFields : {
		    'withCredentials' : true
		},
		data : JSON.stringify($.parseJSON($('#content').val())),
		crossDomain : true
    }).done(function(json) {
    	$('#result').html(JSON.stringify(json.data, null, 4));
    });
}

function data_delete_log( id ) {
	if( id == null || id == undefined || id == "" ){
		alert("请输入ID");
		return false;
	}
    $.ajax({
		type : 'delete',
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		url : service_base_path + "/" + id ,
		xhrFields : {
		    'withCredentials' : true
		},
		crossDomain : true
    }).done(function(json) {
    	$('#result').html(JSON.stringify(json.data, null, 4));
    });
}