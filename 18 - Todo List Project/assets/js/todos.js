// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on delete button to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// Add new todos by pressing enter
$("input[type='text'").keypress(function(e){
    if(e.which === 13) {
        // Get new todo text from input
        var newTodoText = $(this).val();   
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodoText + "</li>")
        // Clear input text
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})