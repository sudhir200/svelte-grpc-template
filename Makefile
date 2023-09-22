protoc:
	protoc --proto_path=src/protos src/protos/*.proto --js_out=import_style=commonjs:./src/generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated