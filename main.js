window.onload = function() { 

    map.on('load', function() {
        
        var layers = ['1', '2-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-80', '80-100', '100-200', '200-300', '300-400', '500+'];
        
        var colors = ['hsl(0, 0%, 93%)', 'hsl(0, 0%, 84%)', 'hsl(0, 0%, 76%)', 'hsl(0, 0%, 67%)', 'hsl(0, 0%, 56%)', 'hsl(0, 0%, 46%)', 'hsl(0, 0%, 36%)', 'hsl(0, 0%, 35%)', 'hsl(0, 0%, 27%)', 'hsl(0, 0%, 19%)', 'hsl(0, 0%, 8%)', 'hsl(0, 0%, 10%)', 'hsl(0, 0%, 0%)']
        
        for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      }
        
        map.on('mousemove', function(e) {
        var states = map.queryRenderedFeatures(e.point, {
          layers: ['metal-bands']
        });
      
        if (states.length > 0) {
          document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.SOVEREIGNT + '</strong></h3><p><strong><em>' + states[0].properties.bands + '</strong> metal bands per million people</em></p>';
        } else {
          document.getElementById('pd').innerHTML = '<p>Hover over a country!</p>';
        }
      });
        
        map.fitBounds([[-9, 42], [32, 58]]);
        
        map.getCanvas().style.cursor = 'default';
        
      
        
      });
}