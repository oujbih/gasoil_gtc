(function() {

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAY6Pg-ldBAgeAYAC6nmOtSXU8BWKSduKs",
    authDomain: "com.gtcgroup.gasoil",
    databaseURL: "https://gtc-gasoil-a6fb8-default-rtdb.firebaseio.com",
    storageBucket: "example-realtime-database.appspot.com"
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  // Get element
  const preObject_cuve1 = document.getElementById('cuve1');
  const preObject_cuve2 = document.getElementById('cuve2');
  const preObject_cuve4 = document.getElementById('cuve4');
  const preObject_cuve5 = document.getElementById('cuve5');
  const preObject_cuve6 = document.getElementById('cuve6');
  const preObject_cuve7 = document.getElementById('cuve7');
  const preObject_total = document.getElementById('total');

  // Create references
  const CUVE1_Object = firebase.database().ref("stock").child('CUVE1');
  CUVE1_Object.on('value', snap => { preObject_cuve1.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3); });
  // CUVE 2
  const CUVE2_Object = firebase.database().ref("stock").child('CUVE2');
  CUVE2_Object.on('value', snap => { preObject_cuve2.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3);;});

  const CUVE4_Object = firebase.database().ref("stock").child('CUVE4');
  CUVE4_Object.on('value', snap => { preObject_cuve4.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3);});

  const CUVE5_Object = firebase.database().ref("stock").child('CUVE5');
  CUVE5_Object.on('value', snap => { preObject_cuve5.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3);});

  const CUVE6_Object = firebase.database().ref("stock").child('CUVE6');
  CUVE6_Object.on('value', snap => { preObject_cuve6.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3);});

  const CUVE7_Object = firebase.database().ref("stock").child('CUVE7');
  CUVE7_Object.on('value', snap => { preObject_cuve7.innerText = JSON.stringify(Math.round(snap.val()*100)/100, null, 3);});

  
  const total_Object = firebase.database().ref("stock");
  total_Object.on('value', snap => {
    var total = snap.child("CUVE1").val() + snap.child("CUVE2").val()+snap.child("CUVE4").val()+snap.child("CUVE5").val()+snap.child("CUVE6").val()+snap.child("CUVE7").val()
    preObject_total.innerText =  Math.round(total*100)/100});


  


}());
