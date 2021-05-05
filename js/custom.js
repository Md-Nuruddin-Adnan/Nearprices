// data range start
$('#dateRange').daterangepicker({
  "showISOWeekNumbers": true,
  "timePicker": true,
  "autoUpdateInput": true,
  "locale": {
      "cancelLabel": 'Clear',
      "format": "MMMM DD, YYYY, h:mm A",
      "separator": " - ",
      "applyLabel": "Apply",
      "cancelLabel": "Cancel",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
      ],
      "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      "firstDay": 1
  },
  "linkedCalendars": true,
  "showCustomRangeLabel": false,
  "startDate": 1,
  // "endDate": "December 31, 2016 @ h:mm A",
  "opens": "center"
});
// data range end


// collapse sidebar start
{
   let collapsedBtn = document.getElementById('btn-collapse')
   collapsedBtn.addEventListener('click', function(e){
      let fullDiv =  collapsedBtn.parentElement;
      let sideDiv = collapsedBtn.parentElement.parentElement.children[0]
      console.log(sideDiv);
   })
}
// collapse sidebar end


