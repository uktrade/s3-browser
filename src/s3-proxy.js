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

class S3Proxy {
  constructor(bucketName, initialPrefix) {
    if (!bucketName) throw "bucketName is required";

    this.bucketName = bucketName;
    this.prefix = initialPrefix || "/";

    console.debug("S3 proxy ctor");
  }

  /**
   * (Private method)
   * magically returns the AWS S3 credentials
   * @returns {Promise<{}>}
   */
  getCredentials() {
    return Promise.resolve({
      accessKey: "AAAA",
      secretKey: "bbbbb",
      sessionKey: "ccccc",
      endpoint: "http://localhost:9000",
    });
  }

  listObjects() {
    return Promise.resolve(testContents);
  }
}
