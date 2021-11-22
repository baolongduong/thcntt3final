var  age = "";
var name = "";
function handleSubmit()
        {
             var tempage = ""; 
            name = document.getElementById("Name1").textContent;
            sessionStorage.setItem('Name', name);
             age = document.getElementById("Age1").textContent;
             sessionStorage.setItem('Age', age);
          //  console.log("asd" + age);
        }
function handleSubmit2()
        {
             var tempage = "";
             name = document.getElementById("Name2").textContent;
             sessionStorage.setItem('Name', name);
             age = document.getElementById("Age2").textContent;
             
           sessionStorage.setItem('Age', age);
           
            console.log("asd" + age);
        }
function handleSubmit3()
        {
             var tempage = "";
             name = document.getElementById("Name3").textContent;
             sessionStorage.setItem('Name', name);
             age = document.getElementById("Age3").textContent;
           sessionStorage.setItem('Age', age);
            console.log("asd" + age);
        }

       

 window.addEventListener('load', () => {

            // Via Query parameters - GET
            /* const params = (new URL(document.location)).searchParams;
            const name = params.get('name');
            const surname = params.get('surname'); */
        
            // Via local Storage
            /* const name = localStorage.getItem('NAME');
            const surname = localStorage.getItem('SURNAME'); */
            $(document).ready(function() {
                loadFarms();
              });
           
            empName = sessionStorage.getItem('Name');
            document.getElementById('result-name').innerHTML = empName;
            empAge = sessionStorage.getItem('Age');
            document.getElementById('result-age').innerHTML = empAge;
            if (empAge < 30 ){
                document.getElementById('user').src = 'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg';
            }else{
                document.getElementById('user').src = 'https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg';
            }
        
        })
       
function getallid()
{
    var idname, idage,result;
    var text = document.getElementsByClassName('table-row1')[0].innerHTML;
   const pattern1 = 'id-name="(?<id>.*?)"';
     idname = text.match(pattern1)[1];
    const pattern2 = 'id-age="(?<id>.*?)"';
    idage = text.match(pattern2)[1];
  console.log("ID Name:"+idname+"- ID Age:"+idage)
    //console.log("ID Age:"+idage)
}

function loadFarms() {
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        dataType: 'json',
        url: 'http://localhost:4200/user',
        success: function (data) {
            var str = "";
            $.each(data, function (i, item) {
                // str += '<div class="row mt-10 ml-10">';
                // str += '<div class="col-lg-12 device">';
                // str += '<div class="load">';
                // str += '<i class="fa fa-heartbeat fa-3x"></i >';
                // str += '</div >';
                // str += ' <h5> BENH NHAN</h5>';
                // str += ' <ul class="details" style="font-size:large;">';
                // str += ' <li>Tên:' + item.name + '</li>';
                // str += ' <li>Tuổi:' + item.age + '</li>';
                // str += '  <li> ';
                // str += ' <p>Chi so nhip tim</p>';
                // str += '<span style = "font-size: 32px; color: rgb(236, 138, 138)";>';
                // str += '<i class="fas fa-heartbeat" ></i >';
                // str += '</span > </li >';
                // str += '</ul>';
                // str += '</div> </div>';
               
            })
            console.log(data);
            $("#dsbenhnhan").html(str);
           
           
        },
      
    })

    
}



