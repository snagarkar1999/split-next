import { SplitFactory } from '@splitsoftware/splitio'

const splitConfig = {
  core: {
    authorizationKey: 'l57fu4jnq9gk93ltb63tvtkboh07m54vp32v',
  },
}

const splitFactory = SplitFactory(splitConfig);

const splitClient = splitFactory.client();

export default splitClient;
