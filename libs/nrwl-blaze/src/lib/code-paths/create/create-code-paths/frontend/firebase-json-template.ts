
export const firebaseJsonTemplate = {
  target: '',
  public: '',
  ignore: ['**/.*'],
  headers: [
    {
      source:
        '*.[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f].+(css|js)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache',
        },
      ],
    },
    {
      source: '/@(ngsw-worker.js|ngsw.json)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache',
        },
      ],
    },
  ],
  rewrites: [
    {
      source: '**',
      destination: '/index.html',
    },
  ],
};
