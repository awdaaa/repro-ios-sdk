// Generated by CoffeeScript 1.10.0
(function() {
  var repro, track;

  track = function(name, _props) {
    var bridge, key, result, url, value;
    if (typeof name !== 'string' || name === '') {
      return;
    }
    name = encodeURIComponent(name);
    result = '';
    if (typeof _props === 'object') {
      for (key in _props) {
        value = _props[key];
        result += (encodeURIComponent(key)) + "=" + (encodeURIComponent(value)) + "&";
      }
      result = result.slice(0, result.length - 1);
    }
    if (result) {
      url = 'repro://' + name + '?' + result;
    } else {
      url = 'repro://' + name;
    }
    bridge = document.getElementById('repro-insight-bridge');
    if (bridge) {
      return bridge.src = url;
    } else {
      bridge = document.createElement('iframe');
      bridge.setAttribute('style', 'display:none;');
      bridge.setAttribute('height', '0px');
      bridge.setAttribute('width', '0px');
      bridge.setAttribute('frameborder', '0');
      bridge.setAttribute('id', 'repro-insight-bridge');
      document.documentElement.appendChild(bridge);
      return bridge.src = url;
    }
  };

  repro = {
    track: track
  };

  window.repro = repro;

}).call(this);
