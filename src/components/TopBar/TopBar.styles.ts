import { styled } from '@mui/system';

import { TOP_BAR_HEIGHT } from 'utils/constants';
import theme from 'styles/theme';
import { StyledFlexTopCenter } from 'styles/styledComponents/Flex';
import { variables } from 'styles/variables';

export const StyledTopBar = styled(StyledFlexTopCenter)`
  height: ${TOP_BAR_HEIGHT};
  justify-content: space-between;
  padding: ${theme.spacing(1.4, 2.4, 1.4, 2)};

  svg {
    fill: ${variables.palette.on_surface_variant};
  }
`;
