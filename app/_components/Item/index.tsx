'use client'
import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    padding: theme.spacing(1),
    textAlign: 'center',
    alignContent: 'center',
    maxWidth: 60,
}));