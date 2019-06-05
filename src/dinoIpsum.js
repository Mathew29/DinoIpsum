export class DinoIpsum {
  getWord(paragraphs, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api?format=json&paragraphs=${paragraphs}&words=${words}`
      // let url = `http://dinoipsum.herokuapp.com/api/?format=json`

      request.onload = function() {
        if (this.status === 200) {
          //return(request.response);
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
