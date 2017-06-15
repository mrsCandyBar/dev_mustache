
      generateCake = (function(){

        let template = $('#template');
        let target = $('#target');
        let selectedCake;
        let cake = [
          {
            type: "Chocolate",
            ingredient: 'cocoa',            
            taste: "chocolatey goodness"
          },
          {
            type: "Strawberry",
            ingredient: 'strawberries',
            taste: "berry berry nice"
          },
          {
            type: "Butterscotch",
            ingredient: 'caramel',
            taste: "creamy caramel clouds"
          },          
        ]

        let init = (function() {
          render();
        })();

        function render() {
          $.get('template/cakeGen.html', function(template) {
            let rendered = Mustache.render(template, cake[getRandomNumberBetween(0,2)]);
            target.html(rendered);
          });
        }

        function getRandomNumberBetween(min, max) {
          let randomNumber,
            numberMin = min, 
            numberMax = max;

          for (noOfTries = 0; noOfTries < 3; noOfTries++) {
            randomNumber = Math.round(Math.random() * (numberMax - numberMin) + numberMin);

            if (randomNumber != selectedCake) {
              selectedCake = randomNumber;
              return selectedCake;
            } 

            if (noOfTries === 2) {
              selectedCake = selectedCake != 0 ? 0 : 1;
              return selectedCake; 
            } 
          }
        }

        return {
          start: function() {
            render();
          }
        }

      })();