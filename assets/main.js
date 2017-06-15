
      generateCake = (function(){

        let template = $('#template');
        let target = $('#target');
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
          return Math.round(Math.random() * (max - min) + min);
        }

        return {
          start: function() {
            render();
          }
        }

      })();