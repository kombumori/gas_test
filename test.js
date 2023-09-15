function hello(){
  google.script.run.withSuccessHandler(onSuccess).myFunction();
}

function onSuccess(){
  google.script.run.test()
}
