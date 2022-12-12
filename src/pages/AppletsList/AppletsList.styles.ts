import { Box, TablePagination } from '@mui/material';
import { styled } from '@mui/system';

import { StyledFlexAllCenter } from 'styles/styledComponents/Flex';
import theme from 'styles/theme';
import { variables } from 'styles/variables';

export const StyledHeader = styled(StyledFlexAllCenter)`
  position: relative;
`;

export const StyledTablePagination = styled(TablePagination)`
  position: absolute;
  right: 0;
  .MuiTablePagination-displayedRows {
    color: ${variables.palette.outline};
  }
` as typeof TablePagination;

export const StyledAppletsList = styled(Box)`
  border: ${variables.borderWidth.md} solid ${variables.palette.surface_variant};
  border-radius: ${variables.borderRadius.xl};
  margin: ${theme.spacing(2.4)};
  padding: 0 ${theme.spacing(1.6)}; ;
`;
