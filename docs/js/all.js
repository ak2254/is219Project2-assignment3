(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "Sex" },
            { "data": "Weight_Sep" },
            { "data": "Weight_Apr" },
            { "data": "BMI_Sep" },
            { "data": "BMI_Apr" },


        ]
    } );

})(jQuery);