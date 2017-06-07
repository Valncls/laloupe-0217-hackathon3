angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth) {
      $scope.user = {
        sitefav:[]
      }

        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('anon.home');
            });
          });
        };
        console.log($scope.user);
        var place = '';

        function onPlaceChanged() {
            var place = this.getPlace();
            for (var i in place.address_components) {
                var component = place.address_components[i];
                for (var j in component.types) { // Some types are ["country", "political"]
                    var type_element = document.getElementById(component.types[j]);
                    if (type_element) {
                        type_element.value = component.long_name;
                    }
                }
            }
        }
        function initializeAutocomplete(id) {
            var element = document.getElementById(id);
            if (element) {
                var autocomplete = new google.maps.places.Autocomplete(element, {
                    types: ['geocode']
                });
                google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
            }
        }
        initializeAutocomplete('user_input_autocomplete_address');
    });
