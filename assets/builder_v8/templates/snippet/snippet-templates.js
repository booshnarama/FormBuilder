define(function(require) {
  var formname               = require('text!templates/snippet/formname.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , search                   = require('text!templates/snippet/searchinput.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , appendedcheckbox         = require('text!templates/snippet/appendedcheckbox.html')
  , appendedtext             = require('text!templates/snippet/appendedtext.html')
  , filebutton               = require('text!templates/snippet/filebutton.html')
  , button                   = require('text!templates/snippet/button.html')
  , buttondouble             = require('text!templates/snippet/buttondouble.html')
  , buttondropdown           = require('text!templates/snippet/buttondropdown.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/snippet/multipleradios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , passwordinput            = require('text!templates/snippet/passwordinput.html')
  , prependedcheckbox        = require('text!templates/snippet/prependedcheckbox.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , searchinput              = require('text!templates/snippet/searchinput.html')
  , selectbasic              = require('text!templates/snippet/selectbasic.html')
  , selectmultiple           = require('text!templates/snippet/selectmultiple.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , yesnodefault                 = require('text!templates/snippet/yesnodefault.html')
  , yesnovalid                 = require('text!templates/snippet/yesnovalid.html')
  , yesno                 = require('text!templates/snippet/yesno.html')
  , depyes                 = require('text!templates/snippet/depyes.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , tripleyes                = require('text!templates/snippet/tripleyes.html')
  , tripleyes1                = require('text!templates/snippet/tripleyes1.html')
  , yesnodouble                = require('text!templates/snippet/yesnodouble.html')
  , yeserrorno                = require('text!templates/snippet/yeserrorno.html')
  , yestextareanoerror       = require('text!templates/snippet/yestextareanoerror.html')
  , agree                = require('text!templates/snippet/agree.html');

  return {
    formname                   : formname
    , appendedcheckbox         : appendedcheckbox
    , appendedtext             : appendedtext
    , filebutton               : filebutton
    , singlebutton             : button
    , doublebutton             : buttondouble
    , buttondropdown           : buttondropdown
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , prependedcheckbox        : prependedcheckbox
    , selectbasic              : selectbasic
    , selectmultiple           : selectmultiple
    , textarea                 : textarea 
    , textinput                : textinput
    , yesnovalid                : yesnovalid
    , yesnodefault                : yesnodefault
    , yesnowithdependency                : yesno
    , yesnowithdependencyradio                : depyes
    , yesnodouble : yesnodouble
    , tripleyes : tripleyes
    , agree : agree
    , tripleyes1 : tripleyes1
    , yeserrorno : yeserrorno
    , yestextareanoerror: yestextareanoerror

  }
});
