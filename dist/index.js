function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = _interopDefault(require('styled-components'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var DropdownWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    margin-top: 20px;\n"])));

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    return React.createElement(DropdownWrapper, null, React.createElement("div", null, this.props.title), React.createElement("select", null, this.props.items.map(function (item) {
      return React.createElement("option", null, item);
    })));
  };

  return Dropdown;
}(React.Component);

var _templateObject$1;
var LottoTableWrapper = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    margin-top: 20px;\n"])));

var LottoTable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LottoTable, _React$Component);

  function LottoTable(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = LottoTable.prototype;

  _proto.render = function render() {
    return React.createElement(LottoTableWrapper, null, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Tier"), React.createElement("th", null, "Match"), React.createElement("th", null, "Winners"), React.createElement("th", null, "Amount"))), React.createElement("tbody", null, this.props.items.map(function (item) {
      return React.createElement("tr", null, React.createElement("td", null, item.tier), React.createElement("td", null, item.match), React.createElement("td", null, item.winners), React.createElement("td", null, item.amount));
    }))), ");");
  };

  return LottoTable;
}(React.Component);

exports.Dropdown = Dropdown;
exports.LottoTable = LottoTable;
//# sourceMappingURL=index.js.map
