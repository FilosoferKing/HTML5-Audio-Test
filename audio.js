
$(document).ready(function() {
    var id = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11', '#12', '#13', '#14', '#15', '#16', '#17', '#18'];

    $('#player').click(function(){
        var fx = Math.floor(Math.random() * id.length);
        var random_id;
        random_id = id[fx];
        $(random_id)[0].play();
        console.log("Random number: ", $(random_id));
    });

});

