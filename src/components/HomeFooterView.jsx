import React from 'react';
import { Link, Table, TableBody, TableCell, TableRow, View } from '@aws-amplify/ui-react';
import styled from 'styled-components';

const HomeFooterView = (props) => {
  return (
    <View {...props}>
      <StyledTable>
        <StyledTableBody>

          <StyledTableRow>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">FAQ</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Gift Card Terms</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Help Center</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Account</Link></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Media Center</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Investor Relations</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Jobs</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Tealium Shops</Link></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Redeem Gift Cards</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Buy Gift Cards</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Ways to Watch</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Terms of Use</Link></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Privacy</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Cookie Preferences</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Coporate Information</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Contact Us</Link></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Commercial Transactions</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Speed Test</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Legal Notices</Link></StyledTableCell>
            <StyledTableCell><Link href='#' color="#fff" textDecoration="underline">Only on Tealium</Link></StyledTableCell>
          </StyledTableRow>

        </StyledTableBody>
      </StyledTable>
      
    </View>
  );
}

export default HomeFooterView;

const StyledTable = styled(Table)`
  table-layout: fixed;
  width: 70%;
  margin: 60px auto;
  border: none;

  @media screen and (max-width: 1279px) {
    width: 85%;
  }

  @media screen and (max-width: 479px) {
    margin: 10px auto;
  }
`;

const StyledTableBody = styled(TableBody)`
  border: none;
`;

const StyledTableRow = styled(TableRow)`
  border: none;
`;

const StyledTableCell = styled(TableCell)`
  border: none;
  color: #fff;
  font-family: "Ubuntu";
  font-size: 1.1rem;

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;