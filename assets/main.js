
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
          $('body').removeAttr('style');
          target.html('Loading...');

          setTimeout( function() {
            $('body').css('background', 'black');

            let randomCake = getRandomNumberBetween(0,2);
            $.get('template/cakeGen.html', function(template) {
              let rendered = Mustache.render(template, cake[randomCake]);
              target.html(rendered);
            });

            /*let rendered = Mustache.render(template.html(), cake[randomCake]);
            target.html(rendered);*/

          },400);
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