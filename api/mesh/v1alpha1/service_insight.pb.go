// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.14.0
// source: mesh/v1alpha1/service_insight.proto

package v1alpha1

import (
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type ServiceInsight struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	LastSync *timestamp.Timestamp                     `protobuf:"bytes,1,opt,name=last_sync,json=lastSync,proto3" json:"last_sync,omitempty"`
	Services map[string]*ServiceInsight_DataplaneStat `protobuf:"bytes,2,rep,name=services,proto3" json:"services,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ServiceInsight) Reset() {
	*x = ServiceInsight{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_service_insight_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceInsight) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceInsight) ProtoMessage() {}

func (x *ServiceInsight) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_service_insight_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceInsight.ProtoReflect.Descriptor instead.
func (*ServiceInsight) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_service_insight_proto_rawDescGZIP(), []int{0}
}

func (x *ServiceInsight) GetLastSync() *timestamp.Timestamp {
	if x != nil {
		return x.LastSync
	}
	return nil
}

func (x *ServiceInsight) GetServices() map[string]*ServiceInsight_DataplaneStat {
	if x != nil {
		return x.Services
	}
	return nil
}

type ServiceInsight_DataplaneStat struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total   uint32 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Online  uint32 `protobuf:"varint,2,opt,name=online,proto3" json:"online,omitempty"`
	Offline uint32 `protobuf:"varint,3,opt,name=offline,proto3" json:"offline,omitempty"`
}

func (x *ServiceInsight_DataplaneStat) Reset() {
	*x = ServiceInsight_DataplaneStat{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_service_insight_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceInsight_DataplaneStat) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceInsight_DataplaneStat) ProtoMessage() {}

func (x *ServiceInsight_DataplaneStat) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_service_insight_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceInsight_DataplaneStat.ProtoReflect.Descriptor instead.
func (*ServiceInsight_DataplaneStat) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_service_insight_proto_rawDescGZIP(), []int{0, 0}
}

func (x *ServiceInsight_DataplaneStat) GetTotal() uint32 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *ServiceInsight_DataplaneStat) GetOnline() uint32 {
	if x != nil {
		return x.Online
	}
	return 0
}

func (x *ServiceInsight_DataplaneStat) GetOffline() uint32 {
	if x != nil {
		return x.Offline
	}
	return 0
}

var File_mesh_v1alpha1_service_insight_proto protoreflect.FileDescriptor

var file_mesh_v1alpha1_service_insight_proto_rawDesc = []byte{
	0x0a, 0x23, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdf, 0x02, 0x0a, 0x0e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x12, 0x37, 0x0a,
	0x09, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x73, 0x79, 0x6e, 0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x08, 0x6c, 0x61,
	0x73, 0x74, 0x53, 0x79, 0x6e, 0x63, 0x12, 0x4c, 0x0a, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e,
	0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x1a, 0x57, 0x0a, 0x0d, 0x44, 0x61, 0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e,
	0x65, 0x53, 0x74, 0x61, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x16, 0x0a, 0x06, 0x6f,
	0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x6f, 0x6e, 0x6c,
	0x69, 0x6e, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6f, 0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x6f, 0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x1a, 0x6d, 0x0a,
	0x0d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x46, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x30, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x73, 0x69,
	0x67, 0x68, 0x74, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x53, 0x74, 0x61,
	0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x2a, 0x5a, 0x28,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x68,
	0x71, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x65, 0x73, 0x68, 0x2f,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_mesh_v1alpha1_service_insight_proto_rawDescOnce sync.Once
	file_mesh_v1alpha1_service_insight_proto_rawDescData = file_mesh_v1alpha1_service_insight_proto_rawDesc
)

func file_mesh_v1alpha1_service_insight_proto_rawDescGZIP() []byte {
	file_mesh_v1alpha1_service_insight_proto_rawDescOnce.Do(func() {
		file_mesh_v1alpha1_service_insight_proto_rawDescData = protoimpl.X.CompressGZIP(file_mesh_v1alpha1_service_insight_proto_rawDescData)
	})
	return file_mesh_v1alpha1_service_insight_proto_rawDescData
}

var file_mesh_v1alpha1_service_insight_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_mesh_v1alpha1_service_insight_proto_goTypes = []interface{}{
	(*ServiceInsight)(nil),               // 0: kuma.mesh.v1alpha1.ServiceInsight
	(*ServiceInsight_DataplaneStat)(nil), // 1: kuma.mesh.v1alpha1.ServiceInsight.DataplaneStat
	nil,                                  // 2: kuma.mesh.v1alpha1.ServiceInsight.ServicesEntry
	(*timestamp.Timestamp)(nil),          // 3: google.protobuf.Timestamp
}
var file_mesh_v1alpha1_service_insight_proto_depIdxs = []int32{
	3, // 0: kuma.mesh.v1alpha1.ServiceInsight.last_sync:type_name -> google.protobuf.Timestamp
	2, // 1: kuma.mesh.v1alpha1.ServiceInsight.services:type_name -> kuma.mesh.v1alpha1.ServiceInsight.ServicesEntry
	1, // 2: kuma.mesh.v1alpha1.ServiceInsight.ServicesEntry.value:type_name -> kuma.mesh.v1alpha1.ServiceInsight.DataplaneStat
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_mesh_v1alpha1_service_insight_proto_init() }
func file_mesh_v1alpha1_service_insight_proto_init() {
	if File_mesh_v1alpha1_service_insight_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_mesh_v1alpha1_service_insight_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceInsight); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_service_insight_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceInsight_DataplaneStat); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_mesh_v1alpha1_service_insight_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mesh_v1alpha1_service_insight_proto_goTypes,
		DependencyIndexes: file_mesh_v1alpha1_service_insight_proto_depIdxs,
		MessageInfos:      file_mesh_v1alpha1_service_insight_proto_msgTypes,
	}.Build()
	File_mesh_v1alpha1_service_insight_proto = out.File
	file_mesh_v1alpha1_service_insight_proto_rawDesc = nil
	file_mesh_v1alpha1_service_insight_proto_goTypes = nil
	file_mesh_v1alpha1_service_insight_proto_depIdxs = nil
}
