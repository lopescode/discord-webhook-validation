export enum INTERACTION_CALLBACK_TYPE {
  PONG = 1, // ACK a Ping
  CHANNEL_MESSAGE_WITH_SOURCE = 4, // respond to an interaction with a message
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5, // ACK an interaction and edit a response later, the user sees a loading state
  DEFERRED_UPDATE_MESSAGE = 6, // for components, ACK an interaction and edit the original message later; the user does not see a loading state
  UPDATE_MESSAGE = 7, // for components, edit the message the component was attached to
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8, // ACK a command without sending a message, eating the user's input
  MODAL = 9, // respond to an interaction with a popup modal
}
