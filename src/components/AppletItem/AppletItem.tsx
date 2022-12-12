import { useNavigate } from 'react-router';
import { CardMedia, CardActions } from '@mui/material';

import { Svg } from 'components/Svg';
import { StyledTitleSmall } from 'styles/styledComponents/Typography';
import { variables } from 'styles/variables';

import {
  StyledCard,
  StyledBox,
  StyledChip,
  StyledButton,
  StyledCardContent,
} from './AppletItem.styles';
import { AppletItemProps } from './AppletItem.types';

export const AppletItem = ({ applet }: AppletItemProps): JSX.Element => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: string | undefined) => {
    if (id) navigate(`/${id}`);
  };

  return (
    <StyledCard key={applet.id}>
      <StyledBox>
        {applet.image ? (
          <CardMedia
            component="img"
            height="140"
            sx={{ width: 92, height: 92, borderRadius: 2 }}
            image={applet.image}
          />
        ) : (
          <Svg id="default-applet-image" height={92} width={92} />
        )}
        <StyledCardContent>
          <StyledTitleSmall fontWeight="semiBold" color={variables.palette.on_primary_container}>
            {applet.name}
          </StyledTitleSmall>
          <StyledTitleSmall fontWeight="regular" color={variables.palette.outline}>
            {applet.description}
          </StyledTitleSmall>
          <StyledBox>
            {applet.keywords?.map((keyword) => (
              <StyledChip key={keyword} label={keyword} />
            ))}
          </StyledBox>
        </StyledCardContent>
      </StyledBox>
      <CardActions>
        <StyledButton size="small">
          <Svg id="basket" width={24} height={24} />
        </StyledButton>
        <StyledButton size="small" onClick={() => handleDetailsClick(applet.id as string)}>
          <Svg id="info" width={24} height={24} />
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
};
