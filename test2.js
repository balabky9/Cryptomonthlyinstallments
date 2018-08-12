var a=require('./test.js');

$(document).ready(function(){
   // window.alert("jQ works");
    $("#reqLoan").click(function(){
        var tenure = $("#tenure").val();
        var loanReqPromise = a.genLoan(tenure);
        loanReqPromise.then(function(loanReq){
            var json_loanreq = loanReq.toJSON();
            
            $('#loanreqbox').val(JSON.stringify(json_loanreq));
            console.log(loanReq);
        })
    });
    $('#approveLoan').click(function(){
        var jsonstr = $('#loanreqbox').val();
        var json = JSON.parse(jsonstr);
        //console.log(json);
        var promiselr = a.approveLoan(json);
        promiselr.then(function(loanrq){
            //console.log(loanrq);
        });
    })

})

