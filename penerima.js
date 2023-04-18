var mqtt = require('mqtt')
var client = mqtt.connect('http://test.mosquitto.org')
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'healthyricefields'
});
var data1;
var data2;
var data3;
var data4;
var data5;
var data6;



connection.connect();

client.on('connect', function(){
	client.subscribe('mqtt/n',function(err){
    })
  client.subscribe('mqtt/p',function(err){
    })
  client.subscribe('mqtt/k',function(err){
    })
  client.subscribe('mqtt/kelembapan',function(err){
    })
  client.subscribe('mqtt/ph',function(err){
    })
  client.subscribe('mqtt/status',function(err){
    })
})

client.on ('message',function (topic, payload) {
      if (topic === 'mqtt/n') {
        data1 = payload;
      }
    
      if (topic === 'mqtt/p') {
        data2 = payload;
      }
      if (topic === 'mqtt/k') {
        data3 = payload;
      }
      if (topic === 'mqtt/kelembapan') {
        data4 = payload;
      }
      if (topic === 'mqtt/ph') {
        data5 = payload;
      }
      if (topic === 'mqtt/status') {
        data6 = payload;
      }
      console.log('Received Message:', topic,payload.toString())
    connection.query('INSERT INTO tb_parameter (`id_parameter`, `persen_n`, `persen_p`, `persen_k`, `persen_kelembapan`, `persen_ph`, `status`, `datetime`) VALUES(NULL,"' + data1 + '","' + data2 + '","' + data3 + '","' + data4 + '","' + data5 + '","' + data6 + '",current_timestamp())' , function (error, results, fields) {

        // connection.query('INSERT INTO tb_parameter (`id_parameter`, `persen_n`, `persen_p`, `persen_k`, `persen_kelembapan`, `persen_ph`, `status`, `datetime`) VALUES(NULL, current_timestamp(),"' + data1 + '","' + data2 + '","' + data3 + '","' + data4 +'")' , function (error, results, fields) {
  
  });

})

