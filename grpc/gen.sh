protoc --plugin=$(yarn bin)/protoc-gen-ts_proto \
  --ts_proto_out=src \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=outputClientImple=false \
  --ts_proto_opt=addGrpcMetadata=true \
  -Isrc \
  src/*/*.proto
