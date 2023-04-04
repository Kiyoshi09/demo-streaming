import React from 'react';
import { Text, View, Link, Image, Heading, Authenticator ,useTheme, ThemeProvider } from '@aws-amplify/ui-react';

import useNavigation from '../hooks/use-navigation';

const AuthComponent = ({ initialState, email, children }) => {
  const { navigate } = useNavigation();

  const handleClickBackToHome = (event, to) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate({ to, email: "" });
  }

  const theme = {
    name: 'Auth Theme',
    tokens: {
      components: {
        textfield: {
          color: { value: 'var(--amplify-colors-neutral-100)' },
        },
      }
    }
  }


  const components = {
    Header() {
      const { tokens } = useTheme()

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Link onClick={(event) => handleClickBackToHome(event, '/')}>
            <Image
              alt="Amplify logo"
              src="https://kiyotaro.cloud/images/2021_Tealium_logo.png" />
          </Link>
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },

    SignIn: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.zero}`}
            level={3}
            color={"#808080"}
            textAlign={"center"}>Sign in to your account</Heading>
        );
      },
    },

    SignUp: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.zero}`}
            level={3}
            color={"#808080"}
            textAlign={"center"} >Create a new account</Heading>
        );
      },
    }
  };

  const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your Email',
        isRequired: true,
        labelHidden: true,
      },
      password: {
        placeholder: 'Enter your Password',
        isRequired: true,
        labelHidden: true,
      }
    },
    signUp: {
      email: {
        placeholder: 'Enter your Email',
        isRequired: true,
        labelHidden: true,
        defaultValue: email,
      },
      password: {
        placeholder: 'Enter your Password',
        isRequired: true,
        labelHidden: true,
      },
      confirm_password: {
        placeholder: 'Confirm your Password',
        isRequired: true,
        labelHidden: true,
      }
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <Authenticator components={components} formFields={formFields} initialState={initialState}>
        {children}
      </Authenticator>
    </ThemeProvider>
  );
}

export default AuthComponent;
