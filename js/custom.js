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
   let collapsedBtn = document.getElementById('btn-collapse');
   if(collapsedBtn != null || collapsedBtn != undefined){
    let fullDiv =  collapsedBtn.parentElement;
    let sideDiv = collapsedBtn.parentElement.parentElement.children[0]
    let sideDivWidth = sideDiv.offsetWidth;
 
    collapsedBtn.addEventListener('click', function(e){
      sideDiv.classList.toggle('d-none');
      fullDiv.classList.toggle('w-100');
      if(collapsedBtn.children[0].style.transform !== 'rotate(180deg)'){
          collapsedBtn.children[0].style.transform = 'rotate(180deg)'
          fullDiv.style.maxWidth = '100%';
      }else {
          collapsedBtn.children[0].style.transform = 'rotate(0deg)'
          fullDiv.style.maxWidth = `calc(100% - ${sideDivWidth}px)`;
      }
 
    })
   }
}
// collapse sidebar end


// tooltip start
{
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}
// tooltip end


// setting collapse start
{
    if(document.querySelectorAll('#setting .collapse-btn')){
        let btn = document.querySelectorAll('#setting .collapse-btn');
        [...btn].forEach((item) => {
            item.addEventListener('click', (e) =>{
                if(item.innerHTML !== '<i class="fas fa-compress"></i>'){
                    item.innerHTML = '<i class="fas fa-compress"></i>'
                }else {
                    item.innerHTML = '<i class="fas fa-expand"></i>'
                }
               
            })
        })
    }

}
// setting collapse end