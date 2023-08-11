import { Button, Text, TextInput } from '@react-native-material/core';

import { Grid } from '@src/components';

export const Home = () => {
  return (
    <Grid padding={10}>
      <Grid container>
        <Grid item alignItems="center">
          <Text variant="h6">One Piece</Text>
        </Grid>
        <Grid item alignItems="center">
          <Text variant="h6">É real</Text>
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item alignItems="center">
          <TextInput
            label="Email"
            style={{
              width: '100%'
            }}
          />
        </Grid>
        <Grid item alignItems="center">
          <TextInput
            label="Password"
            style={{
              width: '100%'
            }}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Button
          title="Press me"
          variant="contained"
          color="primary"
          style={{
            width: '100%'
          }}
          onPress={() => console.log('Pressed')}
        />
      </Grid>
    </Grid>
  );
};
