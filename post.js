$.ajax({
  type: "GET",
  url: "https://www.googleapis.com/blogger/v3/blogs/3202973009101031702/posts?key=AIzaSyA7s8tE-8FX_39ahUqxK1fUsIBuz43sUZk",
  data: {},
  success: function (result) {
    var item = result.items;
    $.each(item, function (i, data) {
      $("#tampil").append(
        '<p><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample' +
          i +
          '" aria-expanded="false" aria-controls="collapseWidthExample' +
          i +
          '">' +
          data.title +
          '</button></p><div style="min-height:auto;"><div class="collapse collapse-horizontal" id="collapseWidthExample' +
          i +
          '"> <div class="card card-body text-start" style="width: auto;">' +
          data.content +
          "</div> </div></div>"
      );
    });
  },
});
