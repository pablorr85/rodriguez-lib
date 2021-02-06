import * as React from 'react';
import styled from 'styled-components';

interface IDropdownProps {
  title: string,
  items: [string]
}

const DropdownWrapper = styled.div`
    margin-top: 20px;
`;

export default class Dropdown extends React.Component<IDropdownProps, {}> {
  constructor(props: IDropdownProps) {
      super(props);
  }

  render() {
    return (
      <DropdownWrapper>
        <div>{this.props.title}</div>
        <select>
          {this.props.items.map((item) => {
            return <option>{item}</option>
          })}
        </select>
      </DropdownWrapper>
    );
  }
}
