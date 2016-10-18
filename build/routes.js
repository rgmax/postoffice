(function() {
  var TriggerValidator;

  TriggerValidator = require('./models/triggerValidator');

  module.exports = function(server, options) {
    var Trigger;
    Trigger = require('./handlers/trigger')(server, options);
    return [
      {
        method: "POST",
        path: "/v1/trigger/{trigger_point}/subscribe",
        config: {
          handler: Trigger.subscribe,
          validate: TriggerValidator.prototype.subscribe,
          description: "Subscribes a list of emails to a trigger point",
          label: ['email']
        }
      }, {
        method: "POST",
        path: "/v1/trigger/{trigger_point}/post",
        config: {
          handler: Trigger.post,
          validate: TriggerValidator.prototype.post,
          description: "Posts an email to addresses of a trigger point",
          label: ["email"]
        }
      }, {
        method: "POST",
        path: "/v1/email/{email}/unsubscribe",
        config: {
          handler: Trigger.unsubscribe,
          validate: TriggerValidator.prototype.unsubscribe,
          description: "Unsubscribes an email from a list of trigger points",
          label: ["email"]
        }
      }
    ];
  };

}).call(this);