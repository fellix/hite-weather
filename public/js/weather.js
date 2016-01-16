$(function () {
  var cities = ['videira', 'teresina', 'sete_lagoas', 'rio_de_janeiro', 'belo_horizonte', 'itarare'];

  _.each(cities, function (city) {
    $.get('http://api.wunderground.com/api/9ce44199e21797d8/conditions/q/BR/' + city + '.json', function (data) {
      renderCityWeather(data)
    });
  });

  var renderCityWeather = function (cityData) {
    var mainContainer = $("<div class='col-xs-4'></div>"),
      fieldset = $("<fieldset class='bordered-container'></fieldset>");

    fieldset.append('<h2>' + cityData['current_observation']['display_location']['full'] + '</h2>');

    fieldset
      .append(
        $('<h3></h3')
          .append('<img src="' + cityData['current_observation']['icon_url'] + '" />')
          .append('<span class="label label-default">' + cityData['current_observation']['temp_c'] + 'º C</span>')
      );

    mainContainer.append(fieldset);

    $("#app").append(mainContainer);
  }
})
