import * as React from 'react';
import styled from 'styled-components';

interface LottoProps {
  tier: string,
  match: string,
  winners: string,
  amount: string
}

interface ILottoTableProps {
  items: [LottoProps]
}

const LottoTableWrapper = styled.div`
    margin-top: 20px;
`;

export default class LottoTable extends React.Component<ILottoTableProps, {}> {
  constructor(props: ILottoTableProps) {
      super(props);
  }

  render() {
    return (
      <LottoTableWrapper>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Match</th>
              <th>Winners</th>
              <th>Amount</th>
            </tr>
            </thead>
          <tbody>
            {this.props.items.map((item) => {
              return(
                <tr>
                  <td>{item.tier}</td>
                  <td>{item.match}</td>
                  <td>{item.winners}</td>
                  <td>{item.amount}</td>
                </tr>
              )}
            )}
          </tbody>
        </table>);
      </LottoTableWrapper>
    );
  }
}
