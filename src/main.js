import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { DinoIpsum } from './dinoIpsum';

$(document).ready(function() {
  $('#dinos').submit(function(event) {
    event.preventDefault();
    let paragraphs = $('#paragraphs').val();
    let words = $('#words').val();
    $('#paragraphs').val("");
    $('#words').val("");

    let dinoIpsum = new DinoIpsum();  // create instance of WeatherService class
    dinoIpsum.getWord(paragraphs, words).then((response) => {
      let text = JSON.parse(response);
      text.forEach((dino) => {
        $("#output").append(`<h1> ${dino}</h1>`);
        //   $("#output").html(`<h1> ${body}</h1>`)

      });

    });  // call the instance method and pass in user input

    // promise.then(function(response) {
    //
    //
    //
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // });
  });

});
