function getMockResponse() {
  const response = {
    IsTruncated: false,
    Contents: [
      {
        Key: "folder/IMG_1406.JPG",
        LastModified: "2021-09-30T13:56:10.743Z",
        ETag: '"c2e5c0ee494e42fb9767b355cc679d99"',
        Size: 717381,
        StorageClass: "STANDARD",
        Owner: {
          DisplayName: "minio",
          ID: "02d6176db174dc93cb1b899f7c6078f08654445fe8cf1b6ce98d8855f66bdbf4",
        },
        isCsv: false,
        $$hashKey: "object:17",
      },
    ],
    Name: "my-bucket",
    Prefix: "folder/",
    Delimiter: "/",
    MaxKeys: 1000,
    CommonPrefixes: [],
    KeyCount: 1,
  };

  return response;
}
