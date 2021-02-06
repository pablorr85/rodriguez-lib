import { createElement, Component } from 'react';
import styled from 'styled-components';

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
    return createElement(DropdownWrapper, null, createElement("div", null, this.props.title), createElement("select", null, this.props.items.map(function (item) {
      return createElement("option", null, item);
    })));
  };

  return Dropdown;
}(Component);

var _templateObject$1;
var LottoTableWrapper = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    margin-top: 20px;\n"])));

var LottoTable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LottoTable, _React$Component);

  function LottoTable(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = LottoTable.prototype;

  _proto.render = function render() {
    return createElement(LottoTableWrapper, null, createElement("table", null, createElement("thead", null, createElement("tr", null, createElement("th", null, "Tier"), createElement("th", null, "Match"), createElement("th", null, "Winners"), createElement("th", null, "Amount"))), createElement("tbody", null, this.props.items.map(function (item) {
      return createElement("tr", null, createElement("td", null, item.tier), createElement("td", null, item.match), createElement("td", null, item.winners), createElement("td", null, item.amount));
    }))), ");");
  };

  return LottoTable;
}(Component);

export { Dropdown, LottoTable };
//# sourceMappingURL=index.modern.js.map
