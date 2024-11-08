/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'opennext-next-after-test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      buildCommand:
        'node /home/lillemagga/Koding/git/opennextjs-aws/packages/open-next/dist/index.js build',
    });
  },
});
