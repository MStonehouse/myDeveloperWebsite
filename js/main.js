let clipboardData = String.fromCharCode(109, 105, 107, 101, 115, 116, 111, 110, 101, 104, 111, 117, 115, 101, 64, 112, 114, 111, 116, 111, 110, 109, 97, 105, 108, 46, 99, 111, 109)







// tippy tooltip for navbar
tippy('#copy-email', {
  placement: 'bottom',
  hideOnClick: false,
  trigger: 'mouseenter focus',
  content: 'Copy email to clipboard',
  onTrigger(instance) {
    document.getElementById('copy-email').onclick = function() {
      //let clipboardData = String.fromCharCode(109, 105, 107, 101, 115, 116, 111, 110, 101, 104, 111, 117, 115, 101, 64, 112, 114, 111, 116, 111, 110, 109, 97, 105, 108, 46, 99, 111, 109)
      navigator.clipboard.writeText(clipboardData).then(function() {
        // success
        instance.setProps({
          trigger: 'manual'
        });
        instance.setContent('Email copied to clipboard');
        instance.show();
        setTimeout(function() {
          instance.hide();
          instance.setProps({
            trigger: 'mouseenter focus'
          });
        }, 1500);
      }, function() {
        //failure
        window.location.href = 'mailto:' + clipboardData;
      })
    }
  },
  onHidden(instance) {
    instance.setContent('Copy email to clipboard');
    document.getElementById('copy-email').blur();
  }
});



// tippy tooltip for footer
tippy('#copy-email-footer', {
  // pulls theme from css file
  theme: 'footer-theme',
  placement: 'top',
  hideOnClick: false,
  trigger: 'mouseenter focus',
  content: 'Copy email to clipboard',
  onTrigger(instance) {
    document.getElementById('copy-email-footer').onclick = function() {
      //let clipboardData = String.fromCharCode(109, 105, 107, 101, 115, 116, 111, 110, 101, 104, 111, 117, 115, 101, 64, 112, 114, 111, 116, 111, 110, 109, 97, 105, 108, 46, 99, 111, 109)
      navigator.clipboard.writeText(clipboardData).then(function() {
        // success
        instance.setProps({
          trigger: 'manual'
        });
        instance.setContent('Email copied to clipboard');
        instance.show();
        setTimeout(function() {
          instance.hide();
          instance.setProps({
            trigger: 'mouseenter focus'
          });
        }, 1500);
      }, function() {
        //failure
        window.location.href = 'mailto:' + clipboardData;
      })
    }
  },
  onHidden(instance) {
    instance.setContent('Copy email to clipboard');
    document.getElementById('copy-email-footer').blur();
  }
});
