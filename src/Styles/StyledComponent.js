import styled from "@emotion/styled";
import { Box, Stack, TableCell, Typography } from "@mui/material";

export const LogoImg = styled('img')`
    width: 202.81px;
    height: 60px;
`;

export const MenuStack = styled(Stack)`

`;

export const MenuLink = styled(Typography)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding-right: 25px;
    padding-top: 5px;
    text-decoration: none;
`;

export const ResponsiveLink = styled(MenuLink)`
    padding: 10px 10px;
    color: #000;
`;

export const Title = styled(Typography)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.01em;
    color: #111430;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 35px;
        line-height: 30px;
        margin-top: 20px;
    }
`;

export const ServiceTitle = styled(Typography)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.396px;
    color: #111430;
    margin-top: 10px;
`;
export const ServiceTitle2 = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 28px;
text-align: center;
letter-spacing: 0.396px;
color: rgba(0, 0, 0, 0.7);
margin-top: 10px;
`;

export const LoginBox = styled(Box)`
    background: #FFFFFF;
    border: 1px solid #ABABAB;
    border-radius: 4px;
    width: 570px;
    height: 457px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${props => props.theme.breakpoints.down('sm')}{
        width: 100%;
    }
`;

export const CustomTableCell = styled(TableCell)`
    color: #000;
`