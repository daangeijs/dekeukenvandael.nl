var computeServing = function (serving) {
    if (serving <= 0) {  // Check if the serving size is negative or zero
        serving = 1;  // Set the serving size to 1 if it's negative or zero
        $('#servingInput').val(serving);  // Update the input field value
    }
    $('.js-recipeIngredient').each(function (index, item) {
        $(item).children('span').html($(item)[0].dataset.basevalue * serving)
    });
};

$('#servingInput').on('change', function () {
    computeServing($(this).val());
});

$('.js-decreaseService').on('click', function () {
    var currentServing = $('#servingInput').val();
    if (currentServing > 1) {  // Check if the current serving size is greater than 1
        $('#servingInput').val(currentServing - 1);
        computeServing(currentServing - 1);
    }
});

$('.js-increaseService').on('click', function () {
    var currentServing = $('#servingInput').val();
    $('#servingInput').val(parseInt(currentServing) + 1);
    computeServing(parseInt(currentServing) + 1);
});

computeServing(1);