import $ from 'jquery';
import swal from 'sweetalert';

//swal("Hello Web8");


//using asyn/await
/*swal("Type something:", {
    content: "input",
  })
  .then((value) => {
    swal(`You typed: ${value}`);
  });*/

  //using promesse
  swal({
    title: "Are you sure?",
    text: "ERASE the title",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {
    if (willDelete) {
        $('h1').remove();
      swal("Deleted!", "The title has been deleted!", "success");
    }
  });