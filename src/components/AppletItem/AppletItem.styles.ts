import { Box, Button, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/system';

import theme from 'styles/theme';
import { variables } from 'styles/variables';

export const StyledCard = styled(Card)`
  background-color: inherit;
  box-shadow: unset;
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(1.6, 0, 2, 0)};
  border: unset;

  &:not(:last-child) {
    border-bottom: ${variables.borderWidth.md} solid ${variables.palette.surface_variant};
  }

  .MuiCardContent-root:last-child {
    padding-bottom: 0;
  }

  .MuiCardActions-root > :not(:first-of-type) {
    margin-left: ${theme.spacing(1.4)};
  }
`;

export const StyledCardContent = styled(CardContent)`
  & > * {
    padding-bottom: ${theme.spacing(0.4)};
  }
`;

export const StyledButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  padding: 0;
  border-radius: ${variables.borderRadius.half};
  margin: 0;
  svg {
    fill: ${variables.palette.surface_variant};
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
`;

export const StyledChip = styled(Chip)`
  color: ${variables.palette.white};
  background-color: ${variables.palette.primary};
  margin-right: ${theme.spacing(0.5)}};
`;
