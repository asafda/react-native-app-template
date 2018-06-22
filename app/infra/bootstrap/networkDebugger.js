// @flow
const debugNetwork = () => {
  // $FlowFixMe
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
};

export default debugNetwork;
