var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
   user: 'admin@archieweb.host',
   host: '162.240.23.87',
   password: 'Bqxq*.2a',
   port: 21,
   localRoot: __dirname + '/out/',
   remoteRoot: '/',
   // remoteRoot: '/public_html/',
   /* this would upload everything except dot files */
   include: ['*', '**/*'],
   // for quick deploy purpose exclude those files: "images/**/*", "logo512.png", "logo192.png",
   exclude: [
      'node_modules/**',
      'node_modules/**/.*',
      '.git/**',
      'src/**',
      'CNAME',
      '*.DS_Store',
      'logo512.png',
      'logo192.png',
      'favicon/**',
      'images/**/*',
      'testing.html',
   ],
   // delete ALL existing files at destination before uploading, if true
   deleteRemote: false,
   // Passive mode is forced (EPSV command is not sent)
   forcePasv: true,
   // use sftp or ftp
   sftp: false,
};

ftpDeploy
   .deploy(config)
   .then((res) => console.log('finished:', res))
   .catch((err) => console.log(err));
