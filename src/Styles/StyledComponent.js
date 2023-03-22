import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

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