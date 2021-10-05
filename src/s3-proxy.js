const testContents = {
  IsTruncated: false,
  Contents: [
    {
      Key: "events.csv",
      LastModified: "2021-10-01T14:52:30.520Z",
      ETag: '"00000000000000000000000000000000-1"',
      Size: 7705,
      StorageClass: "STANDARD",
      Owner: {
        DisplayName: "minio",
        ID: "02d6176db174dc93cb1b899f7c6078f08654445fe8cf1b6ce98d8855f66bdbf4",
      },
      isCsv: true,
      $$hashKey: "object:13",
    },
    {
      Key: "select-from-events.sql",
      LastModified: "2021-10-01T14:53:51.349Z",
      ETag: '"00000000000000000000000000000000-1"',
      Size: 30,
      StorageClass: "STANDARD",
      Owner: {
        DisplayName: "minio",
        ID: "02d6176db174dc93cb1b899f7c6078f08654445fe8cf1b6ce98d8855f66bdbf4",
      },
      isCsv: false,
      $$hashKey: "object:14",
    },
  ],
  Name: "my-bucket",
  Prefix: "",
  Delimiter: "/",
  MaxKeys: 1000,
  CommonPrefixes: [
    {
      Prefix: "superset-examples/",
      $$hashKey: "object:11",
    },
  ],
  KeyCount: 3,
};

class Credentials extends AWS.Credentials {
  constructor() {
    super();
    this.expiration = 0;
  }

  async refresh(callback) {
    // try {
    //     var response = await fetchJSON(Config.credentialsUrl);
    // } catch(err) {
    //     callback(err);
    //     return
    // }
    console.log("refresh");
    this.accessKeyId = "AAAAAAAAAAAAAAAAAAAA";
    this.secretAccessKey = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    // this.sessionToken = "bbbbbbb";

    const now = new Date();
    // this.expiration = new Date(now.getFullYear()-1, now.getMonth(), now.getDay());
    callback();
    return Promise.resolve();
  }

  needsRefresh() {
    return true; //this.expiration - 60 < Date.now();
  }
}

class S3Proxy {
  constructor(config) {
    AWS.config.update({
      credentials: new Credentials(),
      region: config.region,
    });

    const ep = new AWS.Endpoint("http://localhost:9000");
    this.s3 = new AWS.S3({ endpoint: ep, s3ForcePathStyle: true });
  }

  enrichObjectContents(data) {
    data.Contents.forEach((d) => {
      d.isCsv = d.Key.substr(d.Key.length - 3, d.Key.length) === "csv";
      d.formattedDate = new Date(d.LastModified);
    });
    return data;
  }

  async listObjects(params) {
    console.log("listObjects", arguments);

    try {
      const response = await this.s3.listObjectsV2(params).promise();
      console.log("/here");

      const data = this.enrichObjectContents(response);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
