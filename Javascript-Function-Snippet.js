/*
    function snippet untuk cek nomor telepon
    di dalam tag html input nomer telepon dikasih id="phone", validplus, validlength, validNotelp
*/

jQuery.validator.addMethod("validplus", function(value, element) {
            conv = value.substring(0,3);
            if(conv == '+62') return false;
            return true;
        }, "Please Change +62 to 0 ");  

jQuery.validator.addMethod("validlength", function(value, element) {
if(value.length >0 && value.length <8) return false;
return true;
}, "Please Enter Minimum 8 Digit Numbers. ");

jQuery.validator.addMethod("validNotelp", function(value, element) {
validno=[<?php foreach($allphone as $ph) {echo '"'.'0'.$ph['Val']['phone'].'",';} ?>];
filme = value.substring(0, 3);
if (filme == '021' || filme =='022' || filme =='024' || filme =='031' || filme == '061'){
filmo = value.substring(0, 3);
}
else
{
filmo = value.substring(0, 4);
}
var a = validno.indexOf(filmo);
//alert (a);
if(a == -1 ) return false;
return true;
}, "Please Enter Valid Numbers. ");